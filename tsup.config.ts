import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [
    'src/index.ts',
    'src/validators/index.ts',
    'src/formatters/index.ts',
    'src/data/index.ts'
  ],
  format: ['esm', 'cjs'],
  dts: { resolve: true },
  clean: true,
  target: 'es2020',
  sourcemap: true,
  treeshake: true
});
