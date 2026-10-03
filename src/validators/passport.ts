/**
 * Checks the supported historical passport formats, not issuance.
 * See docs/DATA_SOURCES.md for provenance limitations.
 *
 * Two formats are accepted:
 * - 1 letter followed by 7 digits
 *   e.g. `A1234567`
 * - 2 letters followed by 6 digits
 *   e.g. `AB123456`
 */
export function isValidPassport(pass: unknown): boolean {
  if (typeof pass !== 'string') return false;

  const cleaned = pass.replace(/\s/g, '').toUpperCase();

  // 1 letter + 7 digits  OR  2 letters + 6 digits
  return /^[A-Z]\d{7}$/.test(cleaned) || /^[A-Z]{2}\d{6}$/.test(cleaned);
}
