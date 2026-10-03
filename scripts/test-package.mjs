import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { log } from 'node:console';
import { copyFileSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import { gzipSync } from 'node:zlib';
import { buildSync } from 'esbuild';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const temporary = mkdtempSync(join(tmpdir(), 'tunisia-kit-package-'));
const run = (args, cwd = root) =>
  execFileSync(process.execPath, args, {
    cwd,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'inherit'],
    env: { ...process.env, npm_config_cache: join(temporary, 'npm-cache') }
  });
try {
  const [pack] = JSON.parse(
    run([
      process.env.npm_execpath,
      'pack',
      '--ignore-scripts',
      '--json',
      '--pack-destination',
      temporary
    ])
  );
  const files = new Set(pack.files.map((file) => file.path));
  for (const entry of ['', 'validators/', 'formatters/', 'data/']) {
    for (const suffix of ['js', 'cjs', 'd.ts', 'd.cts']) {
      assert.ok(files.has(`dist/${entry}index.${suffix}`));
    }
  }
  assert.ok(files.has('docs/DATA_SOURCES.md'));
  assert.ok(files.has('THIRD_PARTY_NOTICES.md'));
  assert.ok(![...files].some((file) => /^(src|tests|scripts|node_modules)\//.test(file)));

  const consumer = join(temporary, 'consumer');
  mkdirSync(consumer);
  writeFileSync(join(consumer, 'package.json'), '{"name":"package-consumer","private":true}');
  run(
    [
      process.env.npm_execpath,
      'install',
      join(temporary, pack.filename),
      '--offline',
      '--ignore-scripts',
      '--no-audit',
      '--no-fund'
    ],
    consumer
  );
  // Install only the packed library, never link the checkout into the consumer.
  mkdirSync(join(consumer, 'node_modules', '@types'), { recursive: true });
  // tsc needs Node declarations for fixture assertions; resolve these from the
  // contributor toolchain through typeRoots rather than adding consumer deps.
  for (const file of ['commonjs.cts', 'esm.mts']) {
    copyFileSync(join(root, 'scripts', 'fixtures', file), join(consumer, file));
  }
  const compiler = join(root, 'node_modules', 'typescript', 'bin', 'tsc');
  for (const mode of ['node16', 'nodenext', 'bundler']) {
    const fixtures = mode === 'bundler' ? ['esm.mts'] : ['commonjs.cts', 'esm.mts'];
    run(
      [
        compiler,
        '--module',
        mode === 'bundler' ? 'esnext' : mode,
        '--moduleResolution',
        mode,
        '--target',
        'es2020',
        '--strict',
        '--typeRoots',
        join(root, 'node_modules', '@types'),
        '--outDir',
        `build/${mode}`,
        ...fixtures
      ],
      consumer
    );
    for (const fixture of fixtures)
      run([`build/${mode}/${fixture.replace('.cts', '.cjs').replace('.mts', '.mjs')}`], consumer);
  }
  run([join(root, 'scripts', 'test-runtime.mjs'), join(consumer, 'node_modules', 'tunisia-kit')]);

  for (const [entry, limit] of [
    ['index', 16 * 1024],
    ['validators/index', 3 * 1024],
    ['formatters/index', 2 * 1024],
    ['data/index', 14 * 1024]
  ]) {
    const size = gzipSync(readFileSync(join(root, 'dist', `${entry}.cjs`))).length;
    assert.ok(size <= limit, `${entry}: ${size} bytes exceeds ${limit} gzip budget`);
    log(`${entry}: ${size} gzip bytes`);
  }
  const bundle = buildSync({
    stdin: {
      contents: "import { isValidCIN } from 'tunisia-kit'; console.log(isValidCIN('12345678'));",
      resolveDir: consumer
    },
    bundle: true,
    minify: true,
    platform: 'browser',
    format: 'esm',
    write: false
  }).outputFiles[0].contents;
  assert.ok(bundle.length < 1024, `Single-validator bundle grew to ${bundle.length} bytes`);
  log(
    `Packed consumers passed in Node16, NodeNext, and bundler modes; tree-shaken CIN: ${bundle.length} bytes.`
  );
} finally {
  rmSync(temporary, { recursive: true, force: true });
}
