import { defineConfig } from 'tsup';

export default defineConfig([
  // 1. CLI and Core (Node.js environment)
  {
    entry: {
      index: 'src/index.ts',
      cli: 'src/cli.ts',
    },
    format: ['cjs', 'esm'],
    dts: true,
    clean: true,
    platform: 'node',
    target: 'node18',
    external: ['typescript', 'ts-morph'],
  },
  // 2. React Hooks (browser/RSC environment)
  {
    entry: {
      'react/index': 'src/react/hooks.ts',
    },
    format: ['cjs', 'esm'],
    dts: true,
    platform: 'neutral',
    target: 'es2020',
    external: ['react', 'react-dom'],
  },
]);
