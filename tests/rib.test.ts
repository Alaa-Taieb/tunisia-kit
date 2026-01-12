import { describe, it, expect } from 'vitest';
import { isValidRIB } from '../src/validators/rib';

describe('isValidRIB', () => {
    describe('valid RIBs', () => {
        it('accepts valid RIBs with correct check digits', () => {
            // These RIBs pass the Modulo 97 check (divisible by 97)
            // 10005000000000000049 % 97 = 0
            expect(isValidRIB('10005000000000000049')).toBe(true);
        });

        it('accepts RIBs with spaces', () => {
            expect(isValidRIB('10 005 00000 00000000 49')).toBe(true);
        });
    });

    describe('invalid RIBs', () => {
        it('rejects wrong length', () => {
            expect(isValidRIB('1234567890123456789')).toBe(false);  // 19 digits
            expect(isValidRIB('123456789012345678901')).toBe(false); // 21 digits
        });

        it('rejects invalid check digits', () => {
            expect(isValidRIB('10005000000000000001')).toBe(false);
            expect(isValidRIB('12345678901234567890')).toBe(false);
        });

        it('rejects non-numeric characters', () => {
            expect(isValidRIB('1234567890123456789a')).toBe(false);
        });

        it('rejects non-string input', () => {
            expect(isValidRIB(10005000000000000097 as any)).toBe(false);
            expect(isValidRIB(null as any)).toBe(false);
        });
    });
});
