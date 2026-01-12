import { describe, it, expect } from 'vitest';
import { isValidPassport } from '../src/validators/passport';

describe('isValidPassport', () => {
    describe('valid passports', () => {
        it('accepts 1 letter + 7 digits', () => {
            expect(isValidPassport('A1234567')).toBe(true);
            expect(isValidPassport('Z9999999')).toBe(true);
        });

        it('accepts lowercase letters', () => {
            expect(isValidPassport('a1234567')).toBe(true);
        });

        it('accepts with spaces', () => {
            expect(isValidPassport('A 1234567')).toBe(true);
        });
    });

    describe('invalid passports', () => {
        it('rejects wrong number of digits', () => {
            expect(isValidPassport('A123456')).toBe(false);  // 6 digits
            expect(isValidPassport('A12345678')).toBe(false); // 8 digits
        });

        it('rejects numbers first', () => {
            expect(isValidPassport('1A234567')).toBe(false);
        });

        it('rejects multiple letters', () => {
            expect(isValidPassport('AB123456')).toBe(false);
        });

        it('rejects non-string input', () => {
            expect(isValidPassport(1234567 as any)).toBe(false);
        });
    });
});
