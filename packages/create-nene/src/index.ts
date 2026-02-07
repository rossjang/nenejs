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
  return "pnpm"; // Default to pnpm for monorepo
}

function isCommandAvailable(command: string): boolean {
  try {
    execSync(`${command} --version`, { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

function ensurePackageManager(packageManager: "npm" | "yarn" | "pnpm"): boolean {
  if (isCommandAvailable(packageManager)) {
    return true;
  }

  console.log(
    pc.yellow(`\n${packageManager} is not installed. Attempting to install...`)
  );

  // Try corepack first (built-in to Node.js 16.9+)
  if (isCommandAvailable("corepack")) {
    try {
      console.log(pc.dim(`  Using corepack to enable ${packageManager}...`));
      execSync(`corepack enable ${packageManager}`, { stdio: "inherit" });
      if (isCommandAvailable(packageManager)) {
        console.log(pc.green(`  ✓ ${packageManager} installed via corepack\n`));
        return true;
      }
    } catch {
      // corepack failed, try next method
    }
  }

  // Fallback: install via npm
  if (packageManager !== "npm" && isCommandAvailable("npm")) {
    try {
      console.log(pc.dim(`  Installing ${packageManager} globally via npm...`));
      execSync(`npm install -g ${packageManager}`, { stdio: "inherit" });
      if (isCommandAvailable(packageManager)) {
        console.log(pc.green(`\n  ✓ ${packageManager} installed via npm\n`));
        return true;
      }
    } catch {
      // npm global install failed (possibly permission issue)
    }
  }

  // All methods failed
  console.log(
    pc.red(`\n  ✗ Failed to install ${packageManager} automatically.`)
  );
  console.log(
    pc.yellow(`  Please install it manually:\n`)
  );

  if (packageManager === "pnpm") {
    console.log(pc.dim("    npm install -g pnpm"));
    console.log(pc.dim("    # or"));
    console.log(pc.dim("    corepack enable pnpm"));
    console.log(pc.dim("    # or"));
    console.log(pc.dim("    curl -fsSL https://get.pnpm.io/install.sh | sh -"));
  } else if (packageManager === "yarn") {
    console.log(pc.dim("    npm install -g yarn"));
    console.log(pc.dim("    # or"));
    console.log(pc.dim("    corepack enable yarn"));
  }
  console.log();

  return false;
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

function getTemplateDir(): string {
  // In development, templates are relative to src
  // In production (dist), templates are at the package root
  const devPath = path.resolve(__dirname, "..", "templates", "default");
  const prodPath = path.resolve(__dirname, "..", "..", "templates", "default");

  if (fs.existsSync(devPath)) return devPath;
  if (fs.existsSync(prodPath)) return prodPath;

  throw new Error("Template not found");
}

function updatePackageJson(projectPath: string, projectName: string): void {
  const pkgPath = path.join(projectPath, "package.json");
  const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
  pkg.name = projectName;
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");
}

function updateSubPackageNames(projectPath: string, projectName: string): void {
  // Update apps/web package.json
  const webPkgPath = path.join(projectPath, "apps", "web", "package.json");
  if (fs.existsSync(webPkgPath)) {
    const pkg = JSON.parse(fs.readFileSync(webPkgPath, "utf-8"));
    pkg.name = `@${projectName}/web`;
    // Update shared package reference
    if (pkg.dependencies?.["@app/shared"]) {
      pkg.dependencies[`@${projectName}/shared`] = pkg.dependencies["@app/shared"];
      delete pkg.dependencies["@app/shared"];
    }
    fs.writeFileSync(webPkgPath, JSON.stringify(pkg, null, 2) + "\n");
  }

  // Update apps/api package.json
  const apiPkgPath = path.join(projectPath, "apps", "api", "package.json");
  if (fs.existsSync(apiPkgPath)) {
    const pkg = JSON.parse(fs.readFileSync(apiPkgPath, "utf-8"));
    pkg.name = `@${projectName}/api`;
    // Update shared package reference
    if (pkg.dependencies?.["@app/shared"]) {
      pkg.dependencies[`@${projectName}/shared`] = pkg.dependencies["@app/shared"];
      delete pkg.dependencies["@app/shared"];
    }
    fs.writeFileSync(apiPkgPath, JSON.stringify(pkg, null, 2) + "\n");
  }

  // Update packages/shared package.json
  const sharedPkgPath = path.join(projectPath, "packages", "shared", "package.json");
  if (fs.existsSync(sharedPkgPath)) {
    const pkg = JSON.parse(fs.readFileSync(sharedPkgPath, "utf-8"));
    pkg.name = `@${projectName}/shared`;
    fs.writeFileSync(sharedPkgPath, JSON.stringify(pkg, null, 2) + "\n");
  }

  // Update import statements in apps/web/src/app/page.tsx
  const pagePath = path.join(projectPath, "apps", "web", "src", "app", "page.tsx");
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, "utf-8");
    content = content.replace(/@app\/shared/g, `@${projectName}/shared`);
    fs.writeFileSync(pagePath, content);
  }

  // Update cursor rules to use correct package names
  const cursorRulesDir = path.join(projectPath, ".cursor", "rules");
  if (fs.existsSync(cursorRulesDir)) {
    const ruleFiles = fs.readdirSync(cursorRulesDir);
    for (const file of ruleFiles) {
      const filePath = path.join(cursorRulesDir, file);
      let content = fs.readFileSync(filePath, "utf-8");
      content = content.replace(/@app\/shared/g, `@${projectName}/shared`);
      fs.writeFileSync(filePath, content);
    }
  }

  // Update turbo.json filter names
  const rootPkgPath = path.join(projectPath, "package.json");
  if (fs.existsSync(rootPkgPath)) {
    let content = fs.readFileSync(rootPkgPath, "utf-8");
    content = content.replace(/@app\/web/g, `@${projectName}/web`);
    content = content.replace(/@app\/api/g, `@${projectName}/api`);
    fs.writeFileSync(rootPkgPath, content);
  }
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
        name: "packageManager",
        message: "Select a package manager:",
        choices: [
          {
            title: isCommandAvailable("pnpm")
              ? "pnpm (recommended)"
              : "pnpm (recommended, will be installed)",
            value: "pnpm",
          },
          {
            title: isCommandAvailable("npm")
              ? "npm"
              : "npm (not found)",
            value: "npm",
          },
          {
            title: isCommandAvailable("yarn")
              ? "yarn"
              : "yarn (will be installed)",
            value: "yarn",
          },
        ],
        initial: 0,
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
    packageManager: response.packageManager,
  };
}

async function createProject(options: ProjectOptions): Promise<void> {
  const { projectName, packageManager } = options;
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
    pc.cyan(`Creating a new nene.js monorepo in ${pc.bold(projectPath)}`)
  );
  console.log();

  // Copy template
  const templateDir = getTemplateDir();
  copyDir(templateDir, projectPath);

  // Rename _gitignore to .gitignore
  renameGitignore(projectPath);

  // Update package.json with project name
  updatePackageJson(projectPath, projectName);

  // Update sub-package names
  updateSubPackageNames(projectPath, projectName);

  // Ensure package manager is available
  const pmReady = ensurePackageManager(packageManager);

  if (!pmReady) {
    console.log(
      pc.yellow(
        `Skipping dependency installation. After installing ${packageManager}, run:`
      )
    );
    console.log(pc.dim(`  cd ${projectName}`));
    console.log(pc.dim(`  ${packageManager === "npm" ? "npm install" : packageManager === "yarn" ? "yarn" : "pnpm install"}`));
    console.log(pc.dim(`  cd packages/shared && ${packageManager === "npm" ? "npm run build" : `${packageManager} build`}`));
    console.log();
  } else {
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

    // Build shared package first
    console.log();
    console.log(pc.cyan("Building shared package..."));

    try {
      const buildCmd = packageManager === "npm" ? "npm run build" : `${packageManager} build`;
      execSync(buildCmd, {
        cwd: path.join(projectPath, "packages", "shared"),
        stdio: "inherit",
      });
    } catch {
      console.log(
        pc.yellow(
          `\nFailed to build shared package. Run '${packageManager === "npm" ? "npm run build" : `${packageManager} build`}' in packages/shared manually.`
        )
      );
    }
  }

  // Success message
  console.log();
  console.log(
    pc.green("Success!") + ` Created ${pc.bold(projectName)} at ${projectPath}`
  );
  console.log();
  console.log("Project structure:");
  console.log();
  console.log(`  ${pc.cyan("apps/web")}      - Next.js frontend (port 3000)`);
  console.log(`  ${pc.cyan("apps/api")}      - NestJS backend (port 4000)`);
  console.log(`  ${pc.cyan("packages/shared")} - Shared types and constants`);
  console.log(`  ${pc.cyan("docs/")}         - Project documentation`);
  console.log(`  ${pc.cyan(".cursor/rules/")} - Cursor AI agent rules`);
  console.log();
  console.log("Next steps:");
  console.log();
  console.log(`  ${pc.cyan("cd")} ${projectName}`);
  console.log(
    `  ${pc.cyan(packageManager === "npm" ? "npm run" : packageManager)} dev`
  );
  console.log();
  console.log("This will start both the frontend (port 3000) and backend (port 4000).");
  console.log();
  console.log("Happy coding!");
  console.log();
}

export async function main(): Promise<void> {
  program
    .name("create-nene")
    .description("Create a new nene.js monorepo with Next.js and NestJS")
    .version("0.2.0")
    .argument("[project-name]", "Name of the project")
    .action(async (projectName: string | undefined) => {
      console.log();
      console.log(
        pc.bold(pc.cyan("  nene.js ") + "- The AI-native full-stack framework")
      );
      console.log(pc.dim("  Next.js + NestJS monorepo for AI-assisted development"));
      console.log();

      const options = await promptForOptions(projectName);
      await createProject(options);
    });

  await program.parseAsync(process.argv);
}
