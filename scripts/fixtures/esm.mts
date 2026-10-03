import assert from 'node:assert/strict';
import { isValidPhone, getDelegationByName, type Governorate } from 'tunisia-kit';
import { isValidCIN } from 'tunisia-kit/validators';
import { formatCurrency } from 'tunisia-kit/formatters';
import { GOVERNORATES } from 'tunisia-kit/data';

const governorate: Governorate = GOVERNORATES[0];
assert.equal(governorate.id, 1);
assert.equal(isValidPhone('22555111'), true);
assert.equal(isValidCIN('12345678'), true);
assert.equal(formatCurrency(1), '1,000 TND');
assert.equal(getDelegationByName('الزهور'), null);
const checkReadonly = (record: Governorate): void => {
  // @ts-expect-error Reference records must be readonly to consumers.
  record.id = 99;
};
void checkReadonly;
