#!/usr/bin/env node
import { Command } from "commander";
import { generateHooks } from "./codegen/hook-generator";

const program = new Command();

program
  .name("nene")
  .description("nene.js CLI tool")
  .version("0.0.1");

program
  .command("generate")
  .description("Generate React hooks from NestJS controllers")
  .option("--prefix <prefix>", "API global prefix", "/api")
  .option("--src <dir>", "Source directory to scan for controllers", "./src")
  .option("--output <dir>", "Output directory for generated hooks", "./src/hooks")
  .option("--shared <pkg>", "Shared package name for type imports", "@nene/shared")
  .action(async (opts) => {
    try {
      console.log("Generating hooks from NestJS controllers...");
      console.log(`  Source: ${opts.src}`);
      console.log(`  Output: ${opts.output}`);
      console.log(`  Prefix: ${opts.prefix}`);
      console.log(`  Shared: ${opts.shared}`);
      console.log();

      await generateHooks(process.cwd(), {
        prefix: opts.prefix,
        srcDir: opts.src,
        outputDir: opts.output,
        sharedPkg: opts.shared,
      });

      console.log("Done!");
    } catch (err) {
      console.error("Error generating hooks:", err);
      process.exit(1);
    }
  });

program.parse();
