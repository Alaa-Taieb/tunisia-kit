import { describe, it, expect } from 'vitest';
import { isValidIBAN, ribToIBAN } from '../src/validators/iban';
import { formatIBAN } from '../src/formatters/iban';

describe('isValidIBAN', () => {
    describe('valid IBANs', () => {
        it('accepts valid Tunisian IBANs', () => {
            // TN59 + 20-digit RIB that passes mod97 check
            // Generated using ribToIBAN for known valid RIB
            const validRIB = '10005000000000000049';
            const iban = ribToIBAN(validRIB);
            expect(iban).not.toBeNull();
            expect(isValidIBAN(iban!)).toBe(true);
        });

        it('accepts IBANs with spaces', () => {
            const validRIB = '10005000000000000049';
            const iban = ribToIBAN(validRIB);
            const spacedIBAN = iban!.match(/.{1,4}/g)?.join(' ');
            expect(isValidIBAN(spacedIBAN!)).toBe(true);
        });

        it('is case-insensitive', () => {
            const validRIB = '10005000000000000049';
            const iban = ribToIBAN(validRIB)!.toLowerCase();
            expect(isValidIBAN(iban)).toBe(true);
        });
    });

    describe('invalid IBANs', () => {
        it('rejects wrong length', () => {
            expect(isValidIBAN('TN591000500000000000004')).toBe(false); // 23 chars
            expect(isValidIBAN('TN59100050000000000000049')).toBe(false); // 25 chars
        });

        it('rejects wrong country code', () => {
            expect(isValidIBAN('FR5910005000000000000049')).toBe(false);
            expect(isValidIBAN('DE5910005000000000000049')).toBe(false);
        });

        it('rejects invalid check digits', () => {
            expect(isValidIBAN('TN0010005000000000000049')).toBe(false);
            expect(isValidIBAN('TN9910005000000000000049')).toBe(false);
        });

        it('rejects non-string input', () => {
            expect(isValidIBAN(123 as any)).toBe(false);
            expect(isValidIBAN(null as any)).toBe(false);
        });
    });
});

describe('ribToIBAN', () => {
    it('converts valid RIB to IBAN', () => {
        const rib = '10005000000000000049';
        const iban = ribToIBAN(rib);

        expect(iban).not.toBeNull();
        expect(iban!.startsWith('TN')).toBe(true);
        expect(iban!.length).toBe(24);
    });

    it('generates valid IBANs', () => {
        const rib = '10005000000000000049';
        const iban = ribToIBAN(rib);

        expect(isValidIBAN(iban!)).toBe(true);
    });

    it('returns null for invalid RIB', () => {
        expect(ribToIBAN('12345')).toBeNull(); // Too short
        expect(ribToIBAN('123456789012345678901')).toBeNull(); // Too long
        expect(ribToIBAN('1234567890123456789a')).toBeNull(); // Non-numeric
    });

    it('returns null for non-string input', () => {
        expect(ribToIBAN(123 as any)).toBeNull();
        expect(ribToIBAN(null as any)).toBeNull();
    });

    it('handles RIB with spaces', () => {
        const rib = '10 005 00000 00000000 49';
        const iban = ribToIBAN(rib);

        expect(iban).not.toBeNull();
        expect(isValidIBAN(iban!)).toBe(true);
    });
});

describe('formatIBAN', () => {
    it('formats IBAN in groups of 4', () => {
        expect(formatIBAN('TN5910005000000000000049'))
            .toBe('TN59 1000 5000 0000 0000 0049');
    });

    it('converts to uppercase', () => {
        expect(formatIBAN('tn5910005000000000000049'))
            .toBe('TN59 1000 5000 0000 0000 0049');
    });

    it('handles already spaced input', () => {
        expect(formatIBAN('TN59 1000 5000 0000 0000 0049'))
            .toBe('TN59 1000 5000 0000 0000 0049');
    });

    it('returns empty string for non-string', () => {
        expect(formatIBAN(null as any)).toBe('');
    });
});
