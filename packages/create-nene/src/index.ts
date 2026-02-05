import { program } from "commander";
import prompts from "prompts";
import pc from "picocolors";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface ProjectOptions {
  projectName: string;
  template: "default" | "minimal";
  typescript: boolean;
  eslint: boolean;
  packageManager: "npm" | "yarn" | "pnpm";
}

function validateProjectName(name: string): boolean {
  const validNameRegex =
    /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/;
  return validNameRegex.test(name);
}

function detectPackageManager(): "npm" | "yarn" | "pnpm" {
  const userAgent = process.env.npm_config_user_agent;
  if (userAgent) {
    if (userAgent.startsWith("yarn")) return "yarn";
    if (userAgent.startsWith("pnpm")) return "pnpm";
  }
  return "npm";
}

function copyDir(src: string, dest: string): void {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function getTemplateDir(template: string): string {
  // In development, templates are relative to src
  // In production (dist), templates are at the package root
  const devPath = path.resolve(__dirname, "..", "templates", template);
  const prodPath = path.resolve(__dirname, "..", "..", "templates", template);

  if (fs.existsSync(devPath)) return devPath;
  if (fs.existsSync(prodPath)) return prodPath;

  throw new Error(`Template "${template}" not found`);
}

function updatePackageJson(projectPath: string, projectName: string): void {
  const pkgPath = path.join(projectPath, "package.json");
  const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
  pkg.name = projectName;
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");
}

function renameGitignore(projectPath: string): void {
  const gitignorePath = path.join(projectPath, "_gitignore");
  const targetPath = path.join(projectPath, ".gitignore");
  if (fs.existsSync(gitignorePath)) {
    fs.renameSync(gitignorePath, targetPath);
  }
}

async function promptForOptions(projectName?: string): Promise<ProjectOptions> {
  const defaultProjectName = projectName || "my-nene-app";

  const response = await prompts(
    [
      {
        type: projectName ? null : "text",
        name: "projectName",
        message: "Project name:",
        initial: defaultProjectName,
        validate: (value: string) => {
          if (!value) return "Project name is required";
          if (!validateProjectName(value)) {
            return "Invalid project name. Use lowercase letters, numbers, and hyphens only.";
          }
          return true;
        },
      },
      {
        type: "select",
        name: "template",
        message: "Select a template:",
        choices: [
          {
            title: "Default",
            description: "Full-stack with unified frontend and backend",
            value: "default",
          },
          {
            title: "Minimal",
            description: "Minimal setup for quick prototyping",
            value: "minimal",
          },
        ],
        initial: 0,
      },
      {
        type: "confirm",
        name: "typescript",
        message: "Use TypeScript?",
        initial: true,
      },
      {
        type: "confirm",
        name: "eslint",
        message: "Use ESLint?",
        initial: true,
      },
      {
        type: "select",
        name: "packageManager",
        message: "Select a package manager:",
        choices: [
          { title: "npm", value: "npm" },
          { title: "yarn", value: "yarn" },
          { title: "pnpm", value: "pnpm" },
        ],
        initial: ["npm", "yarn", "pnpm"].indexOf(detectPackageManager()),
      },
    ],
    {
      onCancel: () => {
        console.log(pc.red("\nOperation cancelled."));
        process.exit(0);
      },
    }
  );

  return {
    projectName: projectName || response.projectName,
    template: response.template,
    typescript: response.typescript,
    eslint: response.eslint,
    packageManager: response.packageManager,
  };
}

async function createProject(options: ProjectOptions): Promise<void> {
  const { projectName, template, packageManager } = options;
  const projectPath = path.resolve(process.cwd(), projectName);

  // Check if directory exists
  if (fs.existsSync(projectPath)) {
    const { overwrite } = await prompts({
      type: "confirm",
      name: "overwrite",
      message: `Directory "${projectName}" already exists. Overwrite?`,
      initial: false,
    });

    if (!overwrite) {
      console.log(pc.red("Operation cancelled."));
      process.exit(0);
    }

    fs.rmSync(projectPath, { recursive: true, force: true });
  }

  console.log();
  console.log(
    pc.cyan(`Creating a new nene.js project in ${pc.bold(projectPath)}`)
  );
  console.log();

  // Copy template
  const templateDir = getTemplateDir(template);
  copyDir(templateDir, projectPath);

  // Rename _gitignore to .gitignore
  renameGitignore(projectPath);

  // Update package.json with project name
  updatePackageJson(projectPath, projectName);

  // Install dependencies
  console.log(pc.cyan("Installing dependencies..."));
  console.log();

  const installCmd = {
    npm: "npm install",
    yarn: "yarn",
    pnpm: "pnpm install",
  }[packageManager];

  try {
    execSync(installCmd, {
      cwd: projectPath,
      stdio: "inherit",
    });
  } catch {
    console.log(
      pc.yellow(
        "\nFailed to install dependencies. You can install them manually."
      )
    );
  }

  // Success message
  console.log();
  console.log(
    pc.green("Success!") + ` Created ${pc.bold(projectName)} at ${projectPath}`
  );
  console.log();
  console.log("Next steps:");
  console.log();
  console.log(`  ${pc.cyan("cd")} ${projectName}`);
  console.log(
    `  ${pc.cyan(packageManager === "npm" ? "npm run" : packageManager)} dev`
  );
  console.log();
  console.log("Happy coding!");
  console.log();
}

export async function main(): Promise<void> {
  program
    .name("create-nene")
    .description("Create a new nene.js project")
    .version("0.1.0")
    .argument("[project-name]", "Name of the project")
    .option("-t, --template <template>", "Template to use (default, minimal)")
    .option("--typescript", "Use TypeScript (default: true)")
    .option("--no-typescript", "Do not use TypeScript")
    .option("--eslint", "Use ESLint (default: true)")
    .option("--no-eslint", "Do not use ESLint")
    .action(async (projectName: string | undefined) => {
      console.log();
      console.log(
        pc.bold(pc.cyan("  nene.js ") + "- The AI-native full-stack framework")
      );
      console.log();

      const options = await promptForOptions(projectName);
      await createProject(options);
    });

  await program.parseAsync(process.argv);
}
