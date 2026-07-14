import { describe, it, expect } from 'vitest';
import { isValidPostalCode } from '../src/validators/postal-code';
import { getGovernorateFromPostalCode, POSTAL_CODE_RANGES } from '../src/data/postal-codes';

describe('isValidPostalCode', () => {
  it('accepts valid 4-digit codes', () => {
    expect(isValidPostalCode('1000')).toBe(true);
    expect(isValidPostalCode('9299')).toBe(true);
    expect(isValidPostalCode('5000')).toBe(true);
  });

  it('accepts numeric codes', () => {
    expect(isValidPostalCode(1000)).toBe(true);
    expect(isValidPostalCode(3012)).toBe(true);
  });

  it('rejects out-of-range or malformed codes', () => {
    expect(isValidPostalCode('0000')).toBe(false);
    expect(isValidPostalCode('9999')).toBe(false);
    expect(isValidPostalCode('999')).toBe(false);
    expect(isValidPostalCode('10000')).toBe(false);
    expect(isValidPostalCode('abcd')).toBe(false);
    // spaces are stripped, so '12 34' normalizes to the valid code 1234
  });
});

describe('getGovernorateFromPostalCode', () => {
  it('resolves a known code to its governorate', () => {
    expect(getGovernorateFromPostalCode('1000')?.name_fr).toBe('Tunis');
    expect(getGovernorateFromPostalCode(3012)?.name_fr).toBe('Sfax');
  });

  it('returns null for invalid, out-of-range, or unmapped codes', () => {
    expect(getGovernorateFromPostalCode('0000')).toBeNull();
    expect(getGovernorateFromPostalCode('9999')).toBeNull();
    expect(getGovernorateFromPostalCode('12')).toBeNull();
    expect(getGovernorateFromPostalCode('abcd')).toBeNull();
    expect(getGovernorateFromPostalCode('1300')).toBeNull(); // 13xx is unmapped
  });

  it('exposes a non-empty range table', () => {
    expect(POSTAL_CODE_RANGES.length).toBeGreaterThan(0);
  });
});
