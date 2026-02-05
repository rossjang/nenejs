# create-nene

Create a new [nene.js](https://github.com/rossjang/nenejs) project with a single command.

## Usage

```bash
# npm
npm create nene@latest

# yarn
yarn create nene

# pnpm
pnpm create nene
```

### With project name

```bash
npm create nene@latest my-app
```

## Templates

- **default** - Full-stack setup with frontend and backend
- **minimal** - Minimal setup for quick prototyping

## Options

```
Usage: create-nene [project-name] [options]

Options:
  -t, --template <template>  Template to use (default, minimal)
  --typescript               Use TypeScript (default: true)
  --no-typescript            Do not use TypeScript
  --eslint                   Use ESLint (default: true)
  --no-eslint                Do not use ESLint
  -V, --version              Output the version number
  -h, --help                 Display help for command
```

## What's Inside

A newly created project includes:

```
my-app/
├── src/
│   ├── app/           # Frontend pages and layouts
│   └── server/        # Backend API and services
├── public/            # Static assets
├── package.json
├── tsconfig.json
└── README.md
```

## License

MIT
