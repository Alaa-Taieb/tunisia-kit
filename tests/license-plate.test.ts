import { describe, it, expect } from 'vitest';
import { isValidLicensePlate } from '../src/validators/license-plate';

describe('isValidLicensePlate', () => {
    describe('valid license plates', () => {
        it('accepts Arabic format with spaces', () => {
            expect(isValidLicensePlate('123 تونس 4567')).toBe(true);
            expect(isValidLicensePlate('001 تونس 0001')).toBe(true);
            expect(isValidLicensePlate('999 تونس 9999')).toBe(true);
        });

        it('accepts Arabic format without spaces', () => {
            expect(isValidLicensePlate('123تونس4567')).toBe(true);
        });

        it('accepts Latin format (TU)', () => {
            expect(isValidLicensePlate('123 TU 4567')).toBe(true);
            expect(isValidLicensePlate('123TU4567')).toBe(true);
        });

        it('is case-insensitive for Latin format', () => {
            expect(isValidLicensePlate('123tu4567')).toBe(true);
            expect(isValidLicensePlate('123Tu4567')).toBe(true);
        });
    });

    describe('invalid license plates', () => {
        it('rejects wrong digit count', () => {
            expect(isValidLicensePlate('12 تونس 4567')).toBe(false);   // 2 digits before
            expect(isValidLicensePlate('1234 تونس 4567')).toBe(false); // 4 digits before
            expect(isValidLicensePlate('123 تونس 456')).toBe(false);   // 3 digits after
            expect(isValidLicensePlate('123 تونس 45678')).toBe(false); // 5 digits after
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
