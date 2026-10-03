import assert from 'node:assert/strict';
import { log } from 'node:console';
import { createRequire } from 'node:module';
import { dirname, join, resolve } from 'node:path';
import process from 'node:process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = process.argv[2]
  ? resolve(process.argv[2])
  : resolve(dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(join(root, 'package.json'));
for (const mode of ['import', 'require']) {
  const load = async (entry) =>
    mode === 'import'
      ? import(pathToFileURL(join(root, 'dist', entry, 'index.js')).href)
      : require(entry === '' ? 'tunisia-kit' : `tunisia-kit/${entry}`);
  const kit = await load('');
  assert.equal(kit.isValidPhone('22555111'), true);
  assert.equal(kit.isValidPhone('62345678'), false);
  assert.equal(kit.isValidPhone(kit.formatPhoneAr('22555111')), true);
  assert.equal(kit.isValidIBAN('TN5910006035183598478831'), true);
  assert.equal(kit.ribToIBAN('10005000000000000001'), null);
  assert.equal(kit.formatCIN('123456789'), '123456789');
  assert.equal(kit.formatCurrency(1e21), '1 000 000 000 000 000 000 000,000 TND');
  assert.equal(kit.GOVERNORATES.length, 24);
  assert.equal(kit.getDelegationByName('الزهور'), null);
  assert.equal(kit.getDelegationByName('الزهور', 17).governorate_id, 17);
  assert.equal(kit.getGovernorateFromPostalCode('2080'), null);
  assert.equal((await load('validators')).isValidCIN('12345678'), true);
  assert.equal((await load('formatters')).formatPhone('22555111'), '22 555 111');
  assert.equal((await load('data')).GOVERNORATES.length, 24);
  assert.throws(() => Object.assign(kit.GOVERNORATES[0], { id: 99 }), TypeError);
}
log(`Packed/runtime checks passed on ${process.version}: ESM, CommonJS, and all subpaths.`);
