/**
 * Validates a Tunisian National ID (CIN).
 * - Must be exactly 8 digits
 * - Must contain only numbers
 * - Must not be the all-zero placeholder
 */
export function isValidCIN(cin: string): boolean {
  if (typeof cin !== 'string') return false;
  if (!/^\d{8}$/.test(cin)) return false;

  // An all-zero value is a placeholder, not a valid issued identifier.
  if (cin === '00000000') return false;

  return true;
}
