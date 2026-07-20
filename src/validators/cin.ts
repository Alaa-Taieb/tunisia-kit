/**
 * Validates a Tunisian National ID (CIN).
 * - Must be exactly 8 digits
 * - Must contain only numbers
 * - Must not be the all-zero placeholder
 *
 * NOTE: This validator performs format-only validation (8 digits, not all
 * zeros). It does NOT validate the official CIN checksum algorithm. Full
 * checksum validation can be added once the canonical algorithm is confirmed
 * against an authoritative source (e.g., Ministry of Interior specifications).
 */
export function isValidCIN(cin: string): boolean {
  if (typeof cin !== 'string') return false;
  if (!/^\d{8}$/.test(cin)) return false;

  // An all-zero value is a placeholder, not a valid issued identifier.
  if (cin === '00000000') return false;

  return true;
}
