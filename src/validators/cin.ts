/**
 * Validates a Tunisian National ID (CIN).
 * - Must be exactly 8 digits
 * - Must contain only numbers
 * - Must not be the all-zero placeholder
 *
 * NOTE: This validator performs format-only validation (8 digits, not all
 * zeros). It does not verify issuance or identity, and no checksum verification is
 * provided. See docs/DATA_SOURCES.md for the validation scope.
 */
export function isValidCIN(cin: unknown): boolean {
  if (typeof cin !== 'string') return false;
  if (!/^\d{8}$/.test(cin)) return false;

  // An all-zero value is a placeholder, not a valid issued identifier.
  if (cin === '00000000') return false;

  return true;
}
