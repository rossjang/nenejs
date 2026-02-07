# Create-Nene NPM Package

- **Status**: ✅ Done
- **Priority**: 🔥 High
- **Labels**: `infrastructure` `launch` `phase-1` `validation`

## Description

Publish the `create-nene` package to npm so that the `npm create nene@latest` command works.

The landing page shows `npm create nene@latest`, but the package was not published to npm, so users got a 404 when running the command.

```bash
$ npm create nene@latest
npm error 404 Not Found - GET https://registry.npmjs.org/create-nene - Not found
```

## Tasks

### Phase 1: Package creation

- [ ] Create `create-nene` package project
- [ ] Implement CLI entrypoint (`bin/create-nene.js`)
- [ ] Define project template structure
- [ ] Implement interactive prompts
- [ ] Implement template copy logic
- [ ] Implement dependency install logic

### Phase 2: Template preparation

- [ ] Create default nene.js project template
- [ ] Include TypeScript setup
- [ ] Include ESLint/Prettier setup
- [ ] Define default folder structure

### Phase 3: Publish

- [ ] Set up npm account (npm login)
- [ ] Verify package name availability
- [ ] Run `npm publish`
- [ ] Define versioning strategy

### Phase 4: Verification

- [ ] Test `npm create nene@latest` command
- [ ] Verify generated project runs
- [ ] Update documentation

## Package Structure

```
create-nene/
├── package.json
├── bin/
│   └── create-nene.js      # CLI entrypoint
├── src/
│   ├── index.ts            # Main logic
│   ├── prompts.ts          # Interactive prompts
│   ├── template.ts         # Template copy logic
│   └── utils.ts            # Utility functions
├── templates/
│   └── default/            # Default template
│       ├── package.json
│       ├── tsconfig.json
│       ├── src/
│       │   ├── app/
│       │   └── server/
│       └── ...
├── README.md
└── LICENSE
```

## package.json example

```json
{
  "name": "create-nene",
  "version": "0.1.0",
  "description": "Create a new nene.js project",
  "bin": {
    "create-nene": "./bin/create-nene.js"
  },
  "files": ["bin", "dist", "templates"],
  "keywords": ["nene", "nenejs", "create", "scaffold", "cli"],
  "author": "nene.js Team",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/nene-js/create-nene"
  }
}
```

## CLI entrypoint example

```javascript
#!/usr/bin/env node

import { create } from "../dist/index.js";

create().catch((err) => {
  console.error(err);
  process.exit(1);
});
```

## User experience (UX) example

```bash
$ npm create nene@latest my-app

🚀 Creating a new nene.js project in ./my-app

? Select a template:
  ❯ default - Full-stack with Next.js + NestJS patterns
    minimal - Minimal setup
    api-only - API server only

? Would you like to use TypeScript? (Y/n)
? Would you like to use ESLint? (Y/n)

✓ Created project structure
✓ Installed dependencies

🎉 Success! Created my-app at /path/to/my-app

Next steps:
  cd my-app
  npm run dev

Happy coding! 🎨
```

## Dependencies

```json
{
  "dependencies": {
    "commander": "^12.0.0",
    "prompts": "^2.4.2",
    "picocolors": "^1.0.0",
    "fs-extra": "^11.2.0",
    "validate-npm-package-name": "^5.0.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/node": "^20.0.0",
    "@types/prompts": "^2.4.9",
    "@types/fs-extra": "^11.0.4",
    "tsup": "^8.0.0"
  }
}
```

## npm publish commands

```bash
# npm login
npm login

# Check package name availability
npm view create-nene

# Dry-run publish
npm publish --dry-run

# Actual publish
npm publish --access public

# Version bump
npm version patch  # 0.1.0 -> 0.1.1
npm version minor  # 0.1.0 -> 0.2.0
npm version major  # 0.1.0 -> 1.0.0
```

## Alternative: Temporary workaround

Until the package is published, the homepage can guide users to other install methods:

### Option A: Git clone

```bash
git clone https://github.com/nene-js/nene-starter my-app
cd my-app
npm install
```

### Option B: npx degit

```bash
npx degit nene-js/nene-starter my-app
cd my-app
npm install
```

### Option C: "Coming Soon" display

Show Waitlist signup instead of the command on the landing page

## Related Files

- `src/components/landing/hero-section.tsx` - Landing page command display
- `content/docs/*/getting-started/installation.mdx` - Installation docs

## Acceptance Criteria

- [ ] `npm create nene@latest` command works
- [ ] Generated project builds and runs
- [ ] TypeScript support
- [ ] Interactive prompts for options
- [ ] User experience matches documentation
