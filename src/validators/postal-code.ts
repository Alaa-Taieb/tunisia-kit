import { postalCodeNumber } from '../internal/postal-code.js';

/** Validate four-digit postal-code syntax/range (1000–9299), not assignment. */
export function isValidPostalCode(code: unknown): boolean {
  return postalCodeNumber(code) !== null;
}
