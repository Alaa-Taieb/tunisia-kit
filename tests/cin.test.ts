import { describe, it, expect } from 'vitest';
import { isValidCIN } from '../src/validators/cin';

describe('isValidCIN', () => {
    describe('valid CINs', () => {
        it('accepts exactly 8 digits', () => {
            expect(isValidCIN('12345678')).toBe(true);
            expect(isValidCIN('00000000')).toBe(true);
            expect(isValidCIN('99999999')).toBe(true);
        });
    });

    describe('invalid CINs', () => {
        it('rejects less than 8 digits', () => {
            expect(isValidCIN('1234567')).toBe(false);
            expect(isValidCIN('1')).toBe(false);
            expect(isValidCIN('')).toBe(false);
        });

        it('rejects more than 8 digits', () => {
            expect(isValidCIN('123456789')).toBe(false);
        });

        it('rejects non-numeric characters', () => {
            expect(isValidCIN('1234567a')).toBe(false);
            expect(isValidCIN('abcdefgh')).toBe(false);
            expect(isValidCIN('1234-5678')).toBe(false);
        });

        it('rejects non-string input', () => {
            expect(isValidCIN(12345678 as any)).toBe(false);
            expect(isValidCIN(null as any)).toBe(false);
            expect(isValidCIN(undefined as any)).toBe(false);
        });
    });
});
