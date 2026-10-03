import { FIXED_LINE_PATTERN, localPhoneNumber } from '../internal/phone.js';

/** Validate supported fixed-line allocations, including 3 and 81200 prefixes.
 * Region lookup is separate: some allocations have no sourced region mapping.
 */
export function isValidLandline(phone: unknown): boolean {
  const number = localPhoneNumber(phone);
  return number !== null && FIXED_LINE_PATTERN.test(number);
}
