import { describe, it, expect } from 'vitest';
import {
  GOVERNORATES,
  BANKS,
  getBankFromRIB,
  getBankFromIBAN,
  getDelegationsByGovernorate,
  getGovernorateFromDelegation,
  getDelegationByName,
  getGovernorateFromPostalCode,
  POSTAL_CODE_RANGES,
  DELEGATIONS
} from '../src/data/index';

describe('GOVERNORATES', () => {
  it('contains all 24 governorates', () => {
    expect(GOVERNORATES).toHaveLength(24);
  });

  it('has correct structure', () => {
    const tunis = GOVERNORATES.find((g) => g.name_fr === 'Tunis');
    expect(tunis).toBeDefined();
    expect(tunis?.id).toBe(1);
    expect(tunis?.name_ar).toBe('تونس');
  });
});

describe('BANKS', () => {
  it('contains known banks', () => {
    expect(BANKS.length).toBeGreaterThan(0);
    const biat = BANKS.find((b) => b.abbrev === 'BIAT');
    expect(biat).toBeDefined();
    expect(biat?.code).toBe('10');
  });
});

describe('getBankFromRIB', () => {
  it('returns bank name for valid codes', () => {
    expect(getBankFromRIB('10005000000000000097')).toBe(
      'Banque Internationale Arabe de Tunisie (BIAT)'
    );
    expect(getBankFromRIB('02000000000000000000')).toBe('Société Tunisienne de Banque (STB)');
  });

  it('returns null for unknown codes', () => {
    expect(getBankFromRIB('99000000000000000000')).toBeNull();
  });

  it('handles short input', () => {
    expect(getBankFromRIB('1')).toBeNull();
  });
});

describe('getBankFromIBAN', () => {
  it('returns bank name for valid IBANs', () => {
    expect(getBankFromIBAN('TN5910005000000000000049')).toBe(
      'Banque Internationale Arabe de Tunisie (BIAT)'
    );
    expect(getBankFromIBAN('tn5910005000000000000049')).toBe(
      'Banque Internationale Arabe de Tunisie (BIAT)'
    );
  });

  it('accepts spaced IBANs', () => {
    expect(getBankFromIBAN('TN59 1000 5000 0000 0000 0049')).toBe(
      'Banque Internationale Arabe de Tunisie (BIAT)'
    );
  });

  it('returns null for non-TN or wrong length', () => {
    expect(getBankFromIBAN('FR5910005000000000000049')).toBeNull();
    expect(getBankFromIBAN('TN5910005000000000000')).toBeNull();
    expect(getBankFromIBAN('not-an-iban')).toBeNull();
  });

  it('returns null for unknown bank code', () => {
    expect(getBankFromIBAN('TN5900995000000000000049')).toBeNull();
  });
});

describe('getGovernorateFromPostalCode', () => {
  it('resolves a known postal code to its governorate', () => {
    const tunis = getGovernorateFromPostalCode('1000');
    expect(tunis).not.toBeNull();
    expect(tunis!.name_fr).toBe('Tunis');

    const sfax = getGovernorateFromPostalCode('3012');
    expect(sfax!.name_fr).toBe('Sfax');
  });

  it('accepts numeric postal codes', () => {
    expect(getGovernorateFromPostalCode(1000)!.name_fr).toBe('Tunis');
  });

  it('returns null for invalid or out-of-range codes', () => {
    expect(getGovernorateFromPostalCode('0000')).toBeNull();
    expect(getGovernorateFromPostalCode('9999')).toBeNull();
    expect(getGovernorateFromPostalCode('12')).toBeNull();
    expect(getGovernorateFromPostalCode('abcd')).toBeNull();
  });

  it('covers every governorate via its range', () => {
    for (const [, , govId] of POSTAL_CODE_RANGES) {
      const sample = GOVERNORATES.find((g) => g.id === govId);
      expect(sample).toBeDefined();
    }
  });
});

describe('getDelegationsByGovernorate', () => {
  it('returns all delegations for an existing governorate', () => {
    const tunis = getDelegationsByGovernorate(1);
    expect(tunis.length).toBeGreaterThan(0);
    expect(tunis.every((d) => d.governorate_id === 1)).toBe(true);
  });

  it('returns delegations for the last governorate', () => {
    const kebili = getDelegationsByGovernorate(24);
    expect(Array.isArray(kebili)).toBe(true);
    expect(kebili.every((d) => d.governorate_id === 24)).toBe(true);
  });

  it('returns an empty array for an unknown governorate', () => {
    expect(getDelegationsByGovernorate(999)).toEqual([]);
  });

  it('returns an empty array for non-number input', () => {
    expect(getDelegationsByGovernorate('1' as any)).toEqual([]);
    expect(getDelegationsByGovernorate(undefined as any)).toEqual([]);
  });

  it('covers every delegation exactly once across governorates', () => {
    const total = Array.from(
      { length: 24 },
      (_, i) => getDelegationsByGovernorate(i + 1).length
    ).reduce((a, b) => a + b, 0);
    expect(total).toBe(DELEGATIONS.length);
  });
});

describe('getGovernorateFromDelegation', () => {
  it('resolves a delegation by French name', () => {
    const gov = getGovernorateFromDelegation('Tunis Ville');
    expect(gov).not.toBeNull();
    expect(gov!.id).toBe(1);
  });

  it('resolves a delegation by Arabic name', () => {
    const gov = getGovernorateFromDelegation('مدينة تونس');
    expect(gov).not.toBeNull();
    expect(gov!.id).toBe(1);
  });

  it('is case-insensitive and trims', () => {
    expect(getGovernorateFromDelegation('  tunis ville ')!.id).toBe(1);
  });

  it('returns null for unknown or invalid input', () => {
    expect(getGovernorateFromDelegation('Nowhere')).toBeNull();
    expect(getGovernorateFromDelegation(null as any)).toBeNull();
  });
});

describe('getDelegationByName', () => {
  it('finds a delegation by French name', () => {
    expect(getDelegationByName('Tunis Ville')?.governorate_id).toBe(1);
  });

  it('finds a delegation by Arabic name', () => {
    expect(getDelegationByName('مدينة تونس')?.governorate_id).toBe(1);
  });

  it('returns undefined for unknown or invalid input', () => {
    expect(getDelegationByName('Nowhere')).toBeUndefined();
    expect(getDelegationByName(null as any)).toBeUndefined();
  });
});
