import { mod97 } from '../internal/checksum.js';

/**
 * Validate a Tunisian RIB's format and domestic check digits.
 * Structure: 2 bank digits + 3 branch digits + 13 account digits + 2 key digits.
 * A checksum does not establish that an account exists or is active.
 */
export function isValidRIB(rib: unknown): boolean {
  if (typeof rib !== 'string') return false;
  const cleaned = rib.replace(/\s/g, '');
  if (!/^\d{20}$/.test(cleaned)) return false;
  const body = cleaned.slice(0, 18);
  if (/^0+$/.test(body)) return false;
  return Number(cleaned.slice(18)) === 97 - mod97(body + '00');
}
