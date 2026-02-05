# GitHub Repository Setup

- **Status**: 📋 Todo
- **Priority**: 🔥 High
- **Labels**: `infrastructure` `launch` `phase-1`

## Description

Create and configure the GitHub repository at `https://github.com/rossjang/nenejs`.

Currently, the `create-nene` npm package references this repository, but it returns 404 because the repository does not exist yet.

## Tasks

### Phase 1: Repository Creation

- [x] Create `rossjang/nenejs` repository on GitHub
- [x] Set repository visibility (public)
- [ ] Add repository description
- [ ] Add topics/tags (nene, nenejs, fullstack, typescript, framework)

### Phase 2: Initial Push

- [x] Initialize git in nene-web project
- [x] Add remote origin (`git remote add origin git@github.com:rossjang/nenejs.git`)
- [x] Push initial commit to main branch

### Phase 3: Repository Configuration

- [ ] Add LICENSE file (MIT)
- [ ] Configure branch protection rules for main
- [ ] Set up issue templates
- [ ] Set up PR templates
- [ ] Add CONTRIBUTING.md
- [ ] Add CODE_OF_CONDUCT.md

### Phase 4: GitHub Actions (Optional)

- [ ] Set up CI/CD workflow for nene-web
- [ ] Set up auto-publish workflow for create-nene package
- [ ] Add build status badge to README

## Repository Structure

```
rossjang/nenejs/
├── packages/
│   └── create-nene/     # CLI package (npm: create-nene)
├── src/                 # nene-web source
├── content/             # Documentation content
├── docs/                # Internal docs and planning
├── public/
├── package.json
├── README.md
├── LICENSE
├── CONTRIBUTING.md
└── CODE_OF_CONDUCT.md
```

## Commands

```bash
# Initialize git (if not already)
git init

# Add remote
git remote add origin git@github.com:rossjang/nenejs.git

# Initial commit and push
git add .
git commit -m "Initial commit: nene.js website and create-nene CLI"
git push -u origin main
```

## Related Links

- npm package: https://www.npmjs.com/package/create-nene
- Repository URL: https://github.com/rossjang/nenejs

## Acceptance Criteria

- [ ] Repository accessible at https://github.com/rossjang/nenejs
- [ ] All project files pushed to main branch
- [ ] README visible on repository homepage
- [ ] LICENSE file present
- [ ] npm package links correctly to repository
