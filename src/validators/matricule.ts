/**
 * Checks the supported Tunisian tax-ID format (Matricule Fiscale), not issuance
 * or the control-letter checksum. Historical rules: see docs/DATA_SOURCES.md.
 * Format: 1234567/X/A/M/000
 * - 7 digits
 * - 1 letter: control letter (Latin letter except I, O, U)
 * - 1 letter: type (A, B, P, D, N)
 * - 1 letter: category (M, C, P, E, N)
 * - 3 digits (establishment number)
 *
 * Accepts formats with or without separators (/, spaces)
 */
export function isValidMatricule(mat: unknown): boolean {
  if (typeof mat !== 'string') return false;

  // Remove common separators
  const cleaned = mat.replace(/[\s/\\-]/g, '').toUpperCase();

  // Pattern: 7 digits + 1 control letter (not I/O/U) + 1 letter (A,B,P,D,N)
  // + 1 category letter (M,C,P,E,N) + 3 digits.
  const pattern = /^\d{7}[A-HJ-NP-TV-Z][ABPDN][MCPEN]\d{3}$/;

  return pattern.test(cleaned);
}
