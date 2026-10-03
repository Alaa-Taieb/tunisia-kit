import { normalizeDigits } from './digits.js';

/** Normalize local/international inputs without accepting non-digits. */
export function localPhoneNumber(input: unknown): string | null {
  if (typeof input !== 'string') return null;
  let number = normalizeDigits(input).replace(/[\s-]/g, '');
  if (number.startsWith('+216')) number = number.slice(4);
  else if (number.startsWith('00216')) number = number.slice(5);
  return /^\d{8}$/.test(number) ? number : null;
}

// Allocation patterns from Google libphonenumber's TN metadata, pinned in
// docs/DATA_SOURCES.md. These validate allocations, not assigned subscribers.
export const MOBILE_PATTERN =
  /^(?:3(?:001|[12]40)\d{4}|(?:(?:[259]\d|4[0-8])\d|3(?:1[1-35]|6[0-4]|91))\d{5})$/;
export const FIXED_LINE_PATTERN = /^(?:81200\d{3}|(?:3[0-2]|7\d)\d{6})$/;
