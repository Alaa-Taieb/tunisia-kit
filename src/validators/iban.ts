import { mod97 } from '../internal/checksum.js';
import { isValidRIB } from './rib.js';

/** Validate Tunisian IBAN syntax, canonical ISO check digits, and domestic RIB.
 * This does not establish that the account exists or is active.
 */
export function isValidIBAN(iban: unknown): boolean {
  if (typeof iban !== 'string') return false;
  const cleaned = iban.replace(/\s/g, '').toUpperCase();
  if (!/^TN\d{22}$/.test(cleaned)) return false;
  const check = Number(cleaned.slice(2, 4));
  if (check < 2 || check > 98) return false;
  return (
    mod97(cleaned.slice(4) + '2923' + cleaned.slice(2, 4)) === 1 && isValidRIB(cleaned.slice(4))
  );
}

/** Convert a checksum-valid domestic RIB; return null for invalid input. */
export function ribToIBAN(rib: unknown): string | null {
  if (typeof rib !== 'string' || !isValidRIB(rib)) return null;
  const cleaned = rib.replace(/\s/g, '');
  // T = 29, N = 23; append country numbers and zero check digits.
  const check = String(98 - mod97(cleaned + '292300')).padStart(2, '0');
  return `TN${check}${cleaned}`;
}
