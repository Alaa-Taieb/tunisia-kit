import { describe, it, expect } from 'vitest';
import { isValidLandline } from '../src/validators/landline';
import { formatLandline, formatLandlineIntl } from '../src/formatters/phone';
import { getRegionFromLandline, LANDLINE_REGIONS } from '../src/data/landline';

describe('isValidLandline', () => {
    describe('valid landline numbers', () => {
        it('accepts 8-digit numbers with valid prefixes', () => {
            // All valid region prefixes 71-78
            expect(isValidLandline('71234567')).toBe(true); // Tunis
            expect(isValidLandline('72345678')).toBe(true); // Northeast
            expect(isValidLandline('73456789')).toBe(true); // Sahel
            expect(isValidLandline('74567890')).toBe(true); // Sfax
            expect(isValidLandline('75678901')).toBe(true); // Southwest
            expect(isValidLandline('76789012')).toBe(true); // Southeast
            expect(isValidLandline('77890123')).toBe(true); // Center-West
            expect(isValidLandline('78901234')).toBe(true); // Northwest
        });

        it('accepts +216 format', () => {
            expect(isValidLandline('+21671234567')).toBe(true);
            expect(isValidLandline('+21673456789')).toBe(true);
        });

        it('accepts 00216 format', () => {
            expect(isValidLandline('0021671234567')).toBe(true);
            expect(isValidLandline('0021674567890')).toBe(true);
        });

        it('accepts numbers with spaces and dashes', () => {
            expect(isValidLandline('71 234 567')).toBe(true);
            expect(isValidLandline('71-234-567')).toBe(true);
            expect(isValidLandline('+216 71 234 567')).toBe(true);
        });
    });

    describe('invalid landline numbers', () => {
        it('rejects invalid prefixes', () => {
            expect(isValidLandline('70123456')).toBe(false); // 70 not valid
            expect(isValidLandline('79123456')).toBe(false); // 79 not valid
            expect(isValidLandline('22555111')).toBe(false); // Mobile prefix
            expect(isValidLandline('98765432')).toBe(false); // Mobile prefix
        });

        it('rejects wrong length', () => {
            expect(isValidLandline('7123456')).toBe(false);  // 7 digits
            expect(isValidLandline('712345678')).toBe(false); // 9 digits
        });

        it('rejects non-numeric', () => {
            expect(isValidLandline('7123456a')).toBe(false);
        });

        it('rejects non-string input', () => {
            expect(isValidLandline(71234567 as any)).toBe(false);
            expect(isValidLandline(null as any)).toBe(false);
        });
    });
});

describe('formatLandline', () => {
    it('formats in local format', () => {
        expect(formatLandline('71234567')).toBe('71 234 567');
    });

    it('handles +216 prefix', () => {
        expect(formatLandline('+21671234567')).toBe('71 234 567');
    });

    it('returns original for invalid length', () => {
        expect(formatLandline('123')).toBe('123');
    });
});

describe('formatLandlineIntl', () => {
    it('formats in international format', () => {
        expect(formatLandlineIntl('71234567')).toBe('+216 71 234 567');
    });

    it('handles already prefixed numbers', () => {
        expect(formatLandlineIntl('+21671234567')).toBe('+216 71 234 567');
    });
});

describe('getRegionFromLandline', () => {
    it('returns region for valid landlines', () => {
        const region = getRegionFromLandline('71234567');
        expect(region).not.toBeNull();
        expect(region!.prefix).toBe('71');
        expect(region!.name_fr).toBe('Grand Tunis');
    });

    it('works with country code', () => {
        const region = getRegionFromLandline('+21673456789');
        expect(region).not.toBeNull();
        expect(region!.prefix).toBe('73');
        expect(region!.name_fr).toBe('Sahel');
    });

    it('returns null for invalid prefix', () => {
        expect(getRegionFromLandline('70123456')).toBeNull();
        expect(getRegionFromLandline('79123456')).toBeNull();
    });

    it('returns null for invalid input', () => {
        expect(getRegionFromLandline('123')).toBeNull();
        expect(getRegionFromLandline(null as any)).toBeNull();
    });
});

describe('LANDLINE_REGIONS', () => {
    it('contains all 8 regions', () => {
        expect(LANDLINE_REGIONS.length).toBe(8);
    });

    it('has correct prefixes 71-78', () => {
        const prefixes = LANDLINE_REGIONS.map(r => r.prefix).sort();
        expect(prefixes).toEqual(['71', '72', '73', '74', '75', '76', '77', '78']);
    });

    it('each region has French and Arabic names', () => {
        LANDLINE_REGIONS.forEach(region => {
            expect(region.name_fr).toBeTruthy();
            expect(region.name_ar).toBeTruthy();
            expect(region.governorates.length).toBeGreaterThan(0);
        });
    });
});
