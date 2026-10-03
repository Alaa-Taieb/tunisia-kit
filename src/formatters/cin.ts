import { normalizeDigits } from '../internal/digits.js';

/** Pad nonempty CIN inputs to eight digits without truncating identifiers.
 * Spaces/dashes and Arabic digits are accepted. Other strings are preserved;
 * non-string inputs return an empty string. Formatting does not validate a CIN.
 */
export function formatCIN(cin: unknown): string {
  if (typeof cin !== 'string') return '';
  const digits = normalizeDigits(cin).replace(/[\s-]/g, '');
  return /^\d{1,8}$/.test(digits) ? digits.padStart(8, '0') : cin;
}
