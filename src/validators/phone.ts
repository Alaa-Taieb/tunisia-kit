import { localPhoneNumber, MOBILE_PATTERN } from '../internal/phone.js';

/** Validate mobile allocations; supports local, +216, 00216, and Arabic digits.
 * This does not establish that a subscriber number is assigned or active.
 */
export function isValidPhone(phone: unknown): boolean {
  const number = localPhoneNumber(phone);
  return number !== null && MOBILE_PATTERN.test(number);
}

export type PhoneProvider = 'Tunisie Telecom' | 'Ooredoo' | 'Orange';

/**
 * Prefix-assigned operator, never the active carrier after number portability.
 * Returns null for malformed/unallocated numbers, allocations without a
 * sourced carrier mapping (supported 3-prefix mobile allocations), and the
 * 45 block assigned to the Watany Ettisalat MVNO.
 */
export function getPhoneProvider(phone: unknown): PhoneProvider | null {
  const number = localPhoneNumber(phone);
  if (number === null || !MOBILE_PATTERN.test(number)) return null;
  if (number.startsWith('45')) return null;
  if (/^(?:2|4[68])/.test(number)) return 'Ooredoo';
  if (number.startsWith('5')) return 'Orange';
  if (/^[49]/.test(number)) return 'Tunisie Telecom';
  return null;
}
