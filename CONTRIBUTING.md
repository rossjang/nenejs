# Contributing to nene.js

Thank you for your interest in contributing to nene.js! This document provides guidelines and instructions for contributing.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Please be respectful and constructive in all interactions.

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in [Issues](https://github.com/rossjang/nenejs/issues)
2. If not, create a new issue with:
   - A clear, descriptive title
   - Steps to reproduce the bug
   - Expected vs actual behavior
   - Your environment (OS, Node.js version, etc.)

### Suggesting Features

1. Check existing issues for similar suggestions
2. Create a new issue with the `enhancement` label
3. Describe the feature and its use case

### Pull Requests

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Run tests and linting
5. Commit with a clear message
6. Push to your fork
7. Open a Pull Request

## Development Setup

```bash
# Clone the repository
git clone https://github.com/rossjang/nenejs.git
cd nenejs

# Install dependencies
npm install

# Run development server
npm run dev
```

## Project Structure

```
nenejs/
├── packages/
│   └── create-nene/     # CLI tool
├── src/                 # Website source
├── content/             # Documentation
└── docs/                # Internal docs
```

## Commit Message Guidelines

Use clear, descriptive commit messages:

- `feat: add new feature`
- `fix: resolve bug in component`
- `docs: update documentation`
- `refactor: improve code structure`
- `test: add tests`
- `chore: update dependencies`

## Questions?

Feel free to open an issue or reach out to the maintainers.

Thank you for contributing!
