import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      // Barrel/index re-export files and stray scripts are not real code;
      // excluding them lets the 100% gate reflect actual implementation coverage.
      exclude: [
        'src/index.ts',
        'src/**/index.ts',
        '*.mjs',
        'verify.mjs',
        'vitest.config.ts',
        '*.config.ts',
        'eslint.config.js',
        '*.config.js',
        'coverage/**',
        'tests/**',
        'dist/**'
      ],
      thresholds: {
        lines: 100,
        functions: 100,
        branches: 100,
        statements: 100
      }
    }
  }
});
