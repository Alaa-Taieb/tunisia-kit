/**
 * Validates a Tunisian Company Tax ID (Matricule Fiscale).
 * Format: 1234567/X/A/M/000
 * - 7 digits
 * - 1 letter (category)
 * - 1 letter (type: A, B, P, D, N)
 * - 1 letter (M for main, S for secondary)
 * - 3 digits (establishment number)
 *
 * Accepts formats with or without separators (/, spaces)
 */
export function isValidMatricule(mat: string): boolean {
  if (typeof mat !== 'string') return false;

  // Remove common separators
  const cleaned = mat.replace(/[\s/\\-]/g, '').toUpperCase();

  // Pattern: 7 digits + 1 letter (legal-form category) + 1 letter (A,B,P,D,N)
  // + 1 letter (M,S) + 3 digits.
  // NOTE: the first letter denotes the company's legal-form category. The full
  // official set of category letters was not verified against an authoritative
  // source, so it is intentionally left open as [A-Z] to avoid rejecting valid
  // matricules. Tighten this once the canonical category list is confirmed.
  const pattern = /^\d{7}[A-Z][ABPDN][MS]\d{3}$/;

  return pattern.test(cleaned);
}
