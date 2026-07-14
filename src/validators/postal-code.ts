/**
 * Validates a Tunisian postal code.
 *
 * Postal codes are exactly 4 digits in the range `1000`–`9299`.
 * The all-zero code `0000` is rejected.
 *
 * @param code - The postal code as a string (or number)
 * @returns `true` if the code is a well-formed Tunisian postal code
 */
export function isValidPostalCode(code: string | number): boolean {
  const normalized = typeof code === 'number' ? String(code) : String(code).replace(/\s/g, '');
  if (!/^\d{4}$/.test(normalized)) return false;

  const value = parseInt(normalized, 10);
  if (value < 1000 || value > 9299) return false;

  return true;
}
