import { describe, it, expect } from 'vitest';
import { ribToIBAN } from '../src/validators/iban';

function validRIB(body: string): string {
  return body + String(97n - (BigInt(body + '00') % 97n)).padStart(2, '0');
}
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
    expect(biat?.code).toBe('08');
  });

  it('matches Banque Centrale de Tunisie bank codes for major banks', () => {
    const expected: Record<string, string> = {
      '01': 'ATB',
      '03': 'BNA',
      '04': 'ATT',
      '07': 'AB',
      '08': 'BIAT',
      '10': 'STB',
      '11': 'UBCI',
      '12': 'UIB',
      '14': 'BH',
      '17': 'CCP',
      '20': 'BTK',
      '25': 'BZ',
      '32': 'ABT',
      '47': 'WIB'
    };
    for (const [code, abbrev] of Object.entries(expected)) {
      expect(BANKS.find((b) => b.code === code)?.abbrev, code).toBe(abbrev);
    }
  });

  it('includes newly added banks', () => {
    const abbrevs = ['BTS', 'TFB', 'TIB', 'NAIB', 'TSB', 'BH'];
    abbrevs.forEach((abbr) => {
      const bank = BANKS.find((b) => b.abbrev === abbr);
      expect(bank).toBeDefined();
      expect(bank?.code).toBeDefined();
      expect(bank?.name).toBeDefined();
    });
  });
});

describe('getBankFromRIB', () => {
  it('returns bank name for valid codes', () => {
    expect(getBankFromRIB(validRIB('080050000000000000'))).toBe(
      'Banque Internationale Arabe de Tunisie (BIAT)'
    );
    expect(getBankFromRIB(validRIB('100050000000000000'))).toBe(
      'Société Tunisienne de Banque (STB)'
    );
  });

  it('returns null for unknown codes', () => {
    expect(getBankFromRIB(validRIB('990000000000000000'))).toBeNull();
  });

  it('recognizes newly added banks', () => {
    expect(getBankFromRIB(validRIB('270000000000000000'))).toBe(
      'Banque Tunisienne de Solidarité (BTS)'
    );
  });

  it('handles short input', () => {
    expect(getBankFromRIB('1')).toBeNull();
  });
});

describe('getBankFromIBAN', () => {
  it('returns bank name for valid IBANs', () => {
    expect(getBankFromIBAN('TN5910005000000000000049')).toBe('Société Tunisienne de Banque (STB)');
    expect(getBankFromIBAN('tn5910005000000000000049')).toBe('Société Tunisienne de Banque (STB)');
  });

  it('accepts spaced IBANs', () => {
    expect(getBankFromIBAN('TN59 1000 5000 0000 0000 0049')).toBe(
      'Société Tunisienne de Banque (STB)'
    );
  });

  it('returns null for non-TN or wrong length', () => {
    expect(getBankFromIBAN('FR5910005000000000000049')).toBeNull();
    expect(getBankFromIBAN('TN5910005000000000000')).toBeNull();
    expect(getBankFromIBAN('not-an-iban')).toBeNull();
  });

  it('returns null for unknown bank code', () => {
    expect(getBankFromIBAN(ribToIBAN(validRIB('990000000000000000')))).toBeNull();
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

  it('contains valid governorate foreign keys', () => {
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

  it('matches the INS 2024 census delegation count per governorate', () => {
    // Institut National de la Statistique, RGPH 2024: 279 delegations.
    const expected = [
      21, 7, 12, 8, 16, 6, 14, 9, 9, 12, 11, 16, 13, 13, 16, 13, 13, 14, 13, 9, 8, 13, 6, 7
    ];
    expect(expected.map((_, i) => getDelegationsByGovernorate(i + 1).length)).toEqual(expected);
    expect(DELEGATIONS).toHaveLength(279);
  });

  it('keeps former sector records as aliases of their delegation', () => {
    expect(getDelegationByName('Sidi Bou Said')?.id).toBe('tn-01-carthage');
    expect(getDelegationByName('Den Den')?.id).toBe('tn-04-manouba');
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

  it('returns null for unknown or invalid input', () => {
    expect(getDelegationByName('Nowhere')).toBeNull();
    expect(getDelegationByName(null)).toBeNull();
  });
});
