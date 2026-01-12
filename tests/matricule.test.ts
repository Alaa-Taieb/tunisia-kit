import { describe, it, expect } from 'vitest';
import { isValidMatricule } from '../src/validators/matricule';

describe('isValidMatricule', () => {
    describe('valid matricules', () => {
        it('accepts standard format with slashes', () => {
            expect(isValidMatricule('1234567/A/A/M/000')).toBe(true);
            expect(isValidMatricule('0000001/Z/P/S/999')).toBe(true);
        });

        it('accepts format without separators', () => {
            expect(isValidMatricule('1234567AAM000')).toBe(true);
        });

        it('accepts lowercase letters', () => {
            expect(isValidMatricule('1234567aam000')).toBe(true);
        });

        it('accepts different type letters (A, B, P, D, N)', () => {
            expect(isValidMatricule('1234567XAM000')).toBe(true);
            expect(isValidMatricule('1234567XBM000')).toBe(true);
            expect(isValidMatricule('1234567XPM000')).toBe(true);
            expect(isValidMatricule('1234567XDM000')).toBe(true);
            expect(isValidMatricule('1234567XNM000')).toBe(true);
        });

        it('accepts M (main) and S (secondary)', () => {
            expect(isValidMatricule('1234567XAM000')).toBe(true);
            expect(isValidMatricule('1234567XAS000')).toBe(true);
        });
    });

    describe('invalid matricules', () => {
        it('rejects wrong number of digits', () => {
            expect(isValidMatricule('123456AAM000')).toBe(false);  // 6 digits
            expect(isValidMatricule('12345678AAM000')).toBe(false); // 8 digits
        });

        it('rejects invalid type letters', () => {
            expect(isValidMatricule('1234567XZM000')).toBe(false); // Z is invalid
        });

        it('rejects invalid main/secondary indicator', () => {
            expect(isValidMatricule('1234567XAX000')).toBe(false); // X is invalid
        });

        it('rejects non-string input', () => {
            expect(isValidMatricule(1234567 as any)).toBe(false);
        });
    });
});
