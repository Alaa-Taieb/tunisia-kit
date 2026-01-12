/**
 * Formats a CIN by ensuring it's 8 digits with leading zeros.
 * Example: "4555666" → "04555666"
 */
export function formatCIN(cin: string): string {
    // Remove non-digits
    const digits = cin.replace(/\D/g, '');

    // Pad to 8 digits
    return digits.padStart(8, '0').slice(-8);
}
