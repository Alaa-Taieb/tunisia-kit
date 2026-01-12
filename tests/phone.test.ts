import { describe, it, expect } from 'vitest';
import { isValidPhone } from '../src/validators/phone';

describe('isValidPhone', () => {
    describe('valid phone numbers', () => {
        it('accepts 8-digit numbers with valid prefixes', () => {
            // Ooredoo (2x)
            expect(isValidPhone('22555111')).toBe(true);
            expect(isValidPhone('29999999')).toBe(true);

            // Tunisie Telecom (9x)
            expect(isValidPhone('98765432')).toBe(true);
            expect(isValidPhone('90000000')).toBe(true);

            // Tunisie Telecom (4x)
            expect(isValidPhone('40123456')).toBe(true);

            // Orange (5x)
            expect(isValidPhone('55123456')).toBe(true);
        });

        it('accepts +216 format', () => {
            expect(isValidPhone('+21622555111')).toBe(true);
            expect(isValidPhone('+21698765432')).toBe(true);
        });

        it('accepts 00216 format', () => {
            expect(isValidPhone('0021622555111')).toBe(true);
            expect(isValidPhone('0021698765432')).toBe(true);
        });

        it('accepts numbers with spaces', () => {
            expect(isValidPhone('22 555 111')).toBe(true);
            expect(isValidPhone('+216 22 555 111')).toBe(true);
        });

        it('accepts numbers with dashes', () => {
            expect(isValidPhone('22-555-111')).toBe(true);
        });
    });

    describe('invalid phone numbers', () => {
        it('rejects invalid prefixes', () => {
            expect(isValidPhone('12345678')).toBe(false); // 1x is invalid
            expect(isValidPhone('32345678')).toBe(false); // 3x is invalid
            expect(isValidPhone('62345678')).toBe(false); // 6x is invalid
            expect(isValidPhone('72345678')).toBe(false); // 7x is invalid
            expect(isValidPhone('82345678')).toBe(false); // 8x is invalid
        });

        it('rejects wrong length', () => {
            expect(isValidPhone('2255511')).toBe(false);  // 7 digits
            expect(isValidPhone('225551111')).toBe(false); // 9 digits
        });

        it('rejects non-numeric', () => {
            expect(isValidPhone('2255511a')).toBe(false);
        });

        it('rejects non-string input', () => {
            expect(isValidPhone(22555111 as any)).toBe(false);
        });
    });
});
