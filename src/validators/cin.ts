/**
 * Validates a Tunisian National ID (CIN).
 * - Must be exactly 8 digits
 * - Must contain only numbers
 */
export function isValidCIN(cin: string): boolean {
    if (typeof cin !== 'string') return false;
    return /^\d{8}$/.test(cin);
}
