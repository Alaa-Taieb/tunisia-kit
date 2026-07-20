/**
 * Validates a Tunisian Company Tax ID (Matricule Fiscale).
 * Format: 1234567/X/A/M/000
 * - 7 digits
 * - 1 letter: control letter (any Latin letter except I, O, U, which are
 *   excluded to avoid confusion with digits 1, 0)
 * - 1 letter: type (A, B, P, D, N)
 * - 1 letter: category (M, C, P, E, N)
 * - 3 digits (establishment number)
 *
 * Accepts formats with or without separators (/, spaces)
 */
export function isValidMatricule(mat: string): boolean {
  if (typeof mat !== 'string') return false;

  // Remove common separators
  const cleaned = mat.replace(/[\s/\\-]/g, '').toUpperCase();

  // Pattern: 7 digits + 1 control letter (not I/O/U) + 1 letter (A,B,P,D,N)
  // + 1 category letter (M,C,P,E,N) + 3 digits.
  const pattern = /^\d{7}[^IOU][ABPDN][MCPEN]\d{3}$/;

  return pattern.test(cleaned);
}
