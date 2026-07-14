/**
 * Validates a Tunisian passport number.
 *
 * Two formats are accepted:
 * - 1 letter followed by 7 digits (legacy / machine-readable format)
 *   e.g. `A1234567`
 * - 2 letters followed by 6 digits (newer biometric format)
 *   e.g. `AB123456`
 */
export function isValidPassport(pass: string): boolean {
  if (typeof pass !== 'string') return false;

  const cleaned = pass.replace(/\s/g, '').toUpperCase();

  // 1 letter + 7 digits  OR  2 letters + 6 digits
  return /^[A-Z]\d{7}$/.test(cleaned) || /^[A-Z]{2}\d{6}$/.test(cleaned);
}
