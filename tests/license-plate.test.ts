import { describe, it, expect } from 'vitest';
import { isValidLicensePlate } from '../src/validators/license-plate';

describe('isValidLicensePlate', () => {
  describe('valid license plates', () => {
    it('accepts Arabic format with spaces', () => {
      expect(isValidLicensePlate('123 تونس 4567')).toBe(true);
      expect(isValidLicensePlate('265 تونس 4796')).toBe(true);
      expect(isValidLicensePlate('999 تونس 9999')).toBe(true);
    });

    it('accepts older series and unpadded numbers', () => {
      expect(isValidLicensePlate('76 تونس 472')).toBe(true);
      expect(isValidLicensePlate('12 تونس 4567')).toBe(true);
      expect(isValidLicensePlate('1 تونس 1')).toBe(true);
    });

    it('accepts Arabic format without spaces', () => {
      expect(isValidLicensePlate('123تونس4567')).toBe(true);
    });

    it('accepts Latin transliteration (TU)', () => {
      expect(isValidLicensePlate('123 TU 4567')).toBe(true);
      expect(isValidLicensePlate('123TU4567')).toBe(true);
      expect(isValidLicensePlate('123tu4567')).toBe(true);
      expect(isValidLicensePlate('123Tu4567')).toBe(true);
    });

    it('accepts régime suspensif (RS / ن ت) plates', () => {
      expect(isValidLicensePlate('62180 ن ت')).toBe(true);
      expect(isValidLicensePlate('151696 ن ت')).toBe(true);
      expect(isValidLicensePlate('305653 ن.ت')).toBe(true);
      expect(isValidLicensePlate('62180 RS')).toBe(true);
      expect(isValidLicensePlate('RS 66232')).toBe(true);
      expect(isValidLicensePlate('rs66232')).toBe(true);
    });

    it('accepts motorcycle (د ن / MOTO) plates', () => {
      expect(isValidLicensePlate('5624 د ن')).toBe(true);
      expect(isValidLicensePlate('134243 MOTO')).toBe(true);
    });

    it('accepts tractor (ج ف / TRAC) plates', () => {
      expect(isValidLicensePlate('146294 ج ف')).toBe(true);
      expect(isValidLicensePlate('1234 TRAC')).toBe(true);
    });

    it('accepts diplomatic and consular plates in Latin, Arabic, or both', () => {
      expect(isValidLicensePlate('73 CD 06')).toBe(true);
      expect(isValidLicensePlate('12CD34')).toBe(true);
      expect(isValidLicensePlate('73 CD س د 06')).toBe(true);
      expect(isValidLicensePlate('73 س د 06')).toBe(true);
      expect(isValidLicensePlate('12 CMD ر ب د 01')).toBe(true);
      expect(isValidLicensePlate('12 MD ب د 34')).toBe(true);
      expect(isValidLicensePlate('12 MC ث ق 34')).toBe(true);
      expect(isValidLicensePlate('12 CC س ق 34')).toBe(true);
      expect(isValidLicensePlate('12 PAT م أ ف 34')).toBe(true);
      expect(isValidLicensePlate('12 pat 34')).toBe(true);
    });
  });

  describe('invalid license plates', () => {
    it('rejects wrong digit count', () => {
      expect(isValidLicensePlate('1234 تونس 4567')).toBe(false); // 4 digits before
      expect(isValidLicensePlate('123 تونس 45678')).toBe(false); // 5 digits after
      expect(isValidLicensePlate('تونس 4567')).toBe(false); // missing series
      expect(isValidLicensePlate('1234567 ن ت')).toBe(false); // 7-digit running number
      expect(isValidLicensePlate('123 CD 45')).toBe(false); // 3-digit mission code
    });

    it('rejects unsourced series codes', () => {
      expect(isValidLicensePlate('RS12345AB')).toBe(false);
      expect(isValidLicensePlate('01 MN 1234')).toBe(false);
      expect(isValidLicensePlate('01 TRAC 1234')).toBe(false);
      expect(isValidLicensePlate('01 MF 01')).toBe(false);
      expect(isValidLicensePlate('01 RB 01')).toBe(false);
      expect(isValidLicensePlate('01 SD 01')).toBe(false);
      expect(isValidLicensePlate('01 TQ 01')).toBe(false);
    });

    it('rejects mismatched Latin and Arabic diplomatic series', () => {
      expect(isValidLicensePlate('12 MD س د 34')).toBe(false);
      expect(isValidLicensePlate('12 CD ب د 34')).toBe(false);
    });

    it('rejects wrong country word', () => {
      expect(isValidLicensePlate('123 FRANCE 4567')).toBe(false);
      expect(isValidLicensePlate('123 FR 4567')).toBe(false);
    });

    it('rejects letters where digits expected', () => {
      expect(isValidLicensePlate('ABC تونس 4567')).toBe(false);
      expect(isValidLicensePlate('123 تونس DEFG')).toBe(false);
    });

    it('rejects non-string input', () => {
      expect(isValidLicensePlate(1234567 as any)).toBe(false);
      expect(isValidLicensePlate(null as any)).toBe(false);
    });
  });
});
