import { normalizeDigits } from './digits.js';

export function postalCodeNumber(code: unknown): number | null {
  if (typeof code !== 'string' && typeof code !== 'number') return null;
  const normalized = normalizeDigits(String(code)).replace(/\s/g, '');
  if (!/^\d{4}$/.test(normalized)) return null;
  const value = Number(normalized);
  return value >= 1000 && value <= 9299 ? value : null;
}
