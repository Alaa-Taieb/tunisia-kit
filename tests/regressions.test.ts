import { describe, expect, it } from 'vitest';
import * as kit from '../src/index';

function validRIB(body: string): string {
  return body + String(97n - (BigInt(body + '00') % 97n)).padStart(2, '0');
}

describe('financial document integrity', () => {
  it('rejects invalid RIBs before generating an IBAN', () => {
    for (const input of ['10005000000000000001', '0'.repeat(20), '0'.repeat(18) + '97']) {
      expect(kit.isValidRIB(input)).toBe(false);
      expect(kit.ribToIBAN(input)).toBeNull();
    }
    expect(kit.isValidIBAN('TN9410005000000000000001')).toBe(false);
  });

  it('rejects noncanonical ISO check digits even when modulo-equivalent', () => {
    for (const input of [
      'TN0010005000000000000044',
      'TN0110005000000000000026',
      'TN9910005000000000000008'
    ])
      expect(kit.isValidIBAN(input)).toBe(false);
  });

  it('agrees with an independent BigInt checksum oracle across diverse payloads', () => {
    for (let i = 0n; i < 1000n; i++) {
      const body = String(100000000000000000n + i * 7919n);
      const rib = validRIB(body);
      const check = String(98n - (BigInt(rib + '292300') % 97n)).padStart(2, '0');
      expect(kit.isValidRIB(rib)).toBe(true);
      expect(kit.ribToIBAN(rib)).toBe('TN' + check + rib);
      expect(kit.isValidIBAN('TN' + check + rib)).toBe(true);
      const changed = rib.slice(0, -1) + ((Number(rib[rib.length - 1]) + 1) % 10);
      expect(kit.isValidRIB(changed)).toBe(false);
    }
    // Independently published registry example, not produced by the package.
    expect(kit.isValidIBAN('TN5910006035183598478831')).toBe(true);
  });

  it('rejects modulo-equivalent domestic keys outside the canonical range', () => {
    for (let i = 0n; i < 200n; i++) {
      const body = String(100000000000000000n + i);
      const rib = validRIB(body);
      const key = Number(rib.slice(-2));
      if (key <= 2) expect(kit.isValidRIB(body + String(key + 97))).toBe(false);
      if (key === 97) expect(kit.isValidRIB(body + '00')).toBe(false);
    }
  });

  it('checks control letters rather than an unrestricted negated class', () => {
    for (const control of ['1', '!', 'é', 'ع', 'I', 'O', 'U']) {
      expect(kit.isValidMatricule(`1234567${control}AM000`)).toBe(false);
    }
    expect(kit.isValidMatricule('1234567ZAM000')).toBe(true);
  });
});

describe('formatting without data loss', () => {
  it('preserves malformed identifiers and handles non-string input', () => {
    for (const input of ['', 'abc12345678', '123456789', '-', '123/45']) {
      expect(kit.formatCIN(input)).toBe(input);
    }
    expect(kit.formatCIN('٤٥٥٥٦٦٦')).toBe('04555666');
    expect(kit.formatCIN(null)).toBe('');
    expect(kit.formatIBAN('invalidiban')).toBe('invalidiban');
    expect(kit.formatIBAN('TN59')).toBe('TN59');
    for (const format of [
      kit.formatPhone,
      kit.formatPhoneAr,
      kit.formatPhoneIntl,
      kit.formatLandline,
      kit.formatLandlineIntl
    ]) {
      expect(format('abcdefgh')).toBe('abcdefgh');
      expect(format(null)).toBe('');
    }
  });

  it('handles huge, negative, rounded, zero, and invalid currency amounts', () => {
    expect(kit.formatCurrency(1e21)).toBe('1 000 000 000 000 000 000 000,000 TND');
    expect(kit.formatCurrencyAr(1e21)).toBe('١ ٠٠٠ ٠٠٠ ٠٠٠ ٠٠٠ ٠٠٠ ٠٠٠ ٠٠٠،٠٠٠ د.ت');
    for (const amount of [1e22, -1e21, Number.MAX_VALUE]) {
      expect(kit.formatCurrency(amount)).toMatch(/,\d{3} TND$/);
      expect(kit.formatCurrencyAr(amount)).toMatch(/،[٠-٩]{3} د\.ت$/);
    }
    expect(kit.formatCurrency(-1250.5)).toBe('-1 250,500 TND');
    expect(kit.formatCurrency(1.2345)).toBe('1,235 TND');
    expect(kit.formatCurrency(0)).toBe('0,000 TND');
    for (const input of [NaN, Infinity, -Infinity, null, undefined, '1', {}]) {
      expect(kit.formatCurrency(input)).toBe('');
      expect(kit.formatCurrencyAr(input)).toBe('');
    }
  });
});

describe('sourced phone allocations and shared parsing', () => {
  it('matches curated allocation boundaries from the pinned TN metadata', () => {
    for (const phone of [
      '31123456',
      '30011234',
      '31401234',
      '32401234',
      '31512345',
      '36012345',
      '36412345',
      '39112345',
      '48123456'
    ]) {
      expect(kit.isValidPhone(phone), phone).toBe(true);
    }
    for (const phone of ['62345678', '49123456', '36512345', '31012345']) {
      expect(kit.isValidPhone(phone), phone).toBe(false);
      expect(kit.getPhoneProvider(phone)).toBeNull();
    }
    for (const phone of ['30010123', '32123456', '81200123']) {
      expect(kit.isValidLandline(phone)).toBe(true);
      expect(kit.getRegionFromLandline(phone)).toBeNull();
    }
    for (const phone of ['33123456', '81201123', '71abcdef']) {
      expect(kit.isValidLandline(phone)).toBe(false);
      expect(kit.getRegionFromLandline(phone)).toBeNull();
    }
    for (const phone of ['45123456', '46123456', '48123456']) {
      expect(kit.getPhoneProvider(phone)).toBe('Ooredoo');
    }
    expect(kit.getPhoneProvider('31123456')).toBeNull();
    expect(kit.getPhoneProvider('49123456')).toBeNull();
  });

  it('supports Arabic/Persian input and international round trips', () => {
    expect(kit.isValidPhone(kit.formatPhoneAr('22555111'))).toBe(true);
    expect(kit.isValidPhone('۰۰۲۱۶۲۲۵۵۵۱۱۱')).toBe(true);
    expect(kit.formatPhone('۲۲۵۵۵۱۱۱')).toBe('22 555 111');
    expect(kit.formatPhoneAr('0021622555111')).toBe('٢٢ ٥٥٥ ١١١');
    expect(kit.isValidLandline('+٢١٦٧١٢٣٤٥٦٧')).toBe(true);
    expect(kit.isValidPhone('+33 22 555 111')).toBe(false);
  });
});

describe('reference lookup integrity', () => {
  it('rejects malformed documents and provides a separate bank-code lookup', () => {
    for (const input of [null, 10, '10', '10abcdefgh', '10005000000000000001']) {
      expect(kit.getBankFromRIB(input)).toBeNull();
    }
    for (const input of [null, 10, 'TNXX10' + 'x'.repeat(18), 'TN0010005000000000000049']) {
      expect(kit.getBankFromIBAN(input)).toBeNull();
    }
    expect(kit.getBankByCode('10')?.code).toBe('10');
    expect(kit.getBankByCode('00')).toBeNull();
    expect(kit.getBankByCode(null)).toBeNull();
  });

  it('resolves delegation ambiguity only with a scope and preserves aliases', () => {
    expect(kit.getDelegationsByName('Ezzouhour')).toHaveLength(2);
    expect(kit.getDelegationByName('الزهور')).toBeNull();
    expect(kit.getGovernorateFromDelegation('الزهور')).toBeNull();
    expect(kit.getGovernorateFromDelegation('الزهور', 17)?.name_fr).toBe('Kasserine');
    expect(kit.getDelegationByName('Ezzouhour', 1)?.governorate_id).toBe(1);
    expect(kit.getDelegationByName('Ezzouhour', 2)).toBeNull();
    expect(kit.getDelegationsByName(null)).toEqual([]);
    expect(kit.getDelegationByName('Mourouj')?.id).toBe(kit.getDelegationByName('El Mourouj')?.id);
    expect(kit.getDelegationsByName('المروج')).toHaveLength(1);
    expect(kit.getDelegationByName('Mégrine')?.name_fr).toBe('Mégrine');
  });

  it('returns candidate governorates instead of guessing for shared postal blocks', () => {
    expect(kit.getGovernorateFromPostalCode('2080')).toBeNull();
    expect(kit.getGovernorateCandidatesFromPostalCode('2080').map((g) => g.id)).toEqual([
      1, 2, 3, 4
    ]);
    expect(kit.getGovernorateFromPostalCode('1110')).toBeNull();
    expect(kit.getGovernorateCandidatesFromPostalCode('1110').map((g) => g.id)).toEqual([3, 4, 6]);
    expect(kit.getGovernorateCandidatesFromPostalCode('1300')).toEqual([]);
    expect(kit.getGovernorateCandidatesFromPostalCode('1000').map((g) => g.id)).toEqual([1]);
    expect(kit.getGovernorateCandidatesFromPostalCode(null)).toEqual([]);
    expect(kit.isValidPostalCode({ toString: () => '1000' })).toBe(false);
    expect(kit.getGovernorateFromPostalCode({ toString: () => '1000' })).toBeNull();
    expect(kit.isValidPostalCode('١٠٠٠')).toBe(true);
    expect(kit.isValidPostalCode('۱۲۳۴')).toBe(true);
    for (const input of [999, 9300, NaN, 1000.5, true])
      expect(kit.isValidPostalCode(input)).toBe(false);
  });

  it('has unique IDs, valid foreign keys, and unique canonical names within each governorate', () => {
    expect(new Set(kit.GOVERNORATES.map((g) => g.id)).size).toBe(24);
    expect(new Set(kit.DELEGATIONS.map((d) => d.id)).size).toBe(kit.DELEGATIONS.length);
    const names = new Set<string>();
    for (const d of kit.DELEGATIONS) {
      expect(kit.GOVERNORATES.some((g) => g.id === d.governorate_id)).toBe(true);
      for (const name of [d.name_fr, d.name_ar, ...(d.aliases ?? [])]) {
        const key = `${d.governorate_id}:${name.normalize('NFC').toLowerCase()}`;
        expect(names.has(key), key).toBe(false);
        names.add(key);
      }
    }
    expect(new Set(kit.BANKS.map((b) => b.code)).size).toBe(kit.BANKS.length);
  });

  it('prevents callers from mutating reference data or returned records', () => {
    for (const records of [
      kit.GOVERNORATES,
      kit.BANKS,
      kit.DELEGATIONS,
      kit.LANDLINE_REGIONS,
      kit.POSTAL_CODE_RANGES
    ]) {
      expect(Object.isFrozen(records)).toBe(true);
      expect(records.every((record) => Object.isFrozen(record))).toBe(true);
    }
    expect(() =>
      Object.assign(kit.getDelegationByName('Tunis Ville')!, { governorate_id: 17 })
    ).toThrow(TypeError);
    expect(() => Object.assign(kit.getBankByCode('10')!, { name: 'Changed' })).toThrow(TypeError);
    expect(Object.isFrozen(kit.LANDLINE_REGIONS[0].governorates)).toBe(true);
    expect(Object.isFrozen(kit.getDelegationByName('Mourouj')!.aliases)).toBe(true);
    expect(Object.isFrozen(kit.getDelegationsByGovernorate(1))).toBe(true);
    expect(kit.getGovernorateFromDelegation('Tunis Ville')?.id).toBe(1);
  });
});
