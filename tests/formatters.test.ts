import { describe, it, expect } from 'vitest';
import { formatPhone, formatPhoneIntl } from '../src/formatters/phone';
import { formatCurrency } from '../src/formatters/currency';
import { formatCIN } from '../src/formatters/cin';

describe('formatPhone', () => {
    it('formats 8-digit numbers', () => {
        expect(formatPhone('22555111')).toBe('22 555 111');
        expect(formatPhone('98765432')).toBe('98 765 432');
    });

    it('extracts from international format', () => {
        expect(formatPhone('+21622555111')).toBe('22 555 111');
        expect(formatPhone('0021622555111')).toBe('22 555 111');
    });

    it('returns original for invalid length', () => {
        expect(formatPhone('123')).toBe('123');
    });
});

describe('formatPhoneIntl', () => {
    it('adds +216 prefix', () => {
        expect(formatPhoneIntl('22555111')).toBe('+216 22 555 111');
    });

    it('reformats existing international', () => {
        expect(formatPhoneIntl('+21622555111')).toBe('+216 22 555 111');
    });
});

describe('formatCurrency', () => {
    it('formats with millimes', () => {
        expect(formatCurrency(1250.5)).toBe('1 250,500 TND');
        expect(formatCurrency(0)).toBe('0,000 TND');
        expect(formatCurrency(1000000)).toBe('1 000 000,000 TND');
    });

    it('handles decimals correctly', () => {
        expect(formatCurrency(99.999)).toBe('99,999 TND');
        expect(formatCurrency(0.001)).toBe('0,001 TND');
    });

    it('handles invalid input', () => {
        expect(formatCurrency(NaN)).toBe('0,000 TND');
        expect(formatCurrency('invalid' as any)).toBe('0,000 TND');
    });
});

describe('formatCIN', () => {
    it('pads short numbers', () => {
        expect(formatCIN('4555666')).toBe('04555666');
        expect(formatCIN('1')).toBe('00000001');
    });

    it('keeps valid 8-digit CINs', () => {
        expect(formatCIN('12345678')).toBe('12345678');
    });

    it('removes non-digits and pads', () => {
        expect(formatCIN('04-555-666')).toBe('04555666');
    });

    it('truncates long numbers to last 8', () => {
        expect(formatCIN('123456789')).toBe('23456789');
    });
});
