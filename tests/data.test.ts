import { describe, it, expect } from 'vitest';
import { GOVERNORATES, BANKS, getBankFromRIB } from '../src/data/index';

describe('GOVERNORATES', () => {
    it('contains all 24 governorates', () => {
        expect(GOVERNORATES).toHaveLength(24);
    });

    it('has correct structure', () => {
        const tunis = GOVERNORATES.find(g => g.name_fr === 'Tunis');
        expect(tunis).toBeDefined();
        expect(tunis?.id).toBe(1);
        expect(tunis?.name_ar).toBe('تونس');
    });
});

describe('BANKS', () => {
    it('contains known banks', () => {
        expect(BANKS.length).toBeGreaterThan(0);
        const biat = BANKS.find(b => b.abbrev === 'BIAT');
        expect(biat).toBeDefined();
        expect(biat?.code).toBe('10');
    });
});

describe('getBankFromRIB', () => {
    it('returns bank name for valid codes', () => {
        expect(getBankFromRIB('10005000000000000097')).toBe('Banque Internationale Arabe de Tunisie (BIAT)');
        expect(getBankFromRIB('02000000000000000000')).toBe('Société Tunisienne de Banque (STB)');
    });

    it('returns undefined for unknown codes', () => {
        expect(getBankFromRIB('99000000000000000000')).toBeUndefined();
    });

    it('handles short input', () => {
        expect(getBankFromRIB('1')).toBeUndefined();
    });
});
