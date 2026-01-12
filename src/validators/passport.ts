/**
 * Validates a Tunisian Passport number.
 * Format: 1 letter followed by 7 digits
 * Example: A1234567
 */
export function isValidPassport(pass: string): boolean {
    if (typeof pass !== 'string') return false;

    const cleaned = pass.replace(/\s/g, '').toUpperCase();

    // Pattern: 1 letter + 7 digits
    return /^[A-Z]\d{7}$/.test(cleaned);
}
