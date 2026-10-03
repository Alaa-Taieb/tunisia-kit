import { toArabicDigits } from '../internal/digits.js';
import { localPhoneNumber } from '../internal/phone.js';

/** Format eight-digit numeric input, preserving malformed strings. */
export function formatPhone(phone: unknown): string {
  const number = localPhoneNumber(phone);
  if (number === null) return typeof phone === 'string' ? phone : '';
  return `${number.slice(0, 2)} ${number.slice(2, 5)} ${number.slice(5)}`;
}

/** Format numeric phone input with Arabic-Indic digits. */
export function formatPhoneAr(phone: unknown): string {
  if (localPhoneNumber(phone) === null) return typeof phone === 'string' ? phone : '';
  return toArabicDigits(formatPhone(phone));
}

/** Format numeric phone input with +216; malformed strings are preserved. */
export function formatPhoneIntl(phone: unknown): string {
  if (localPhoneNumber(phone) === null) return typeof phone === 'string' ? phone : '';
  return `+216 ${formatPhone(phone)}`;
}

export const formatLandline = formatPhone;
export const formatLandlineIntl = formatPhoneIntl;
