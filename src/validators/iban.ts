/**
 * Validates a Tunisian IBAN (International Bank Account Number).
 * 
 * Format: TN59 1234 5678 9012 3456 7890 (24 characters)
 * - TN: Country code
 * - 59: Check digits (calculated using ISO 7064 Modulo 97-10)
 * - Remaining 20 digits: RIB (bank account number)
 * 
 * @param iban - The IBAN string to validate
 * @returns true if the IBAN is valid, false otherwise
 */
export function isValidIBAN(iban: string): boolean {
    if (typeof iban !== 'string') return false;

    // Remove spaces and convert to uppercase
    const cleaned = iban.replace(/\s/g, '').toUpperCase();

    // Must be exactly 24 characters
    if (cleaned.length !== 24) return false;

    // Must start with TN
    if (!cleaned.startsWith('TN')) return false;

    // Remaining characters after TN must be digits
    if (!/^TN\d{22}$/.test(cleaned)) return false;

    // ISO 7064 Modulo 97-10 validation
    // Move first 4 characters to end and convert letters to numbers (A=10, B=11, ..., Z=35)
    const rearranged = cleaned.slice(4) + cleaned.slice(0, 4);
    const numericString = rearranged.replace(/[A-Z]/g, (char) => 
        (char.charCodeAt(0) - 55).toString()
    );

    // Calculate modulo 97
    const remainder = mod97(numericString);

    return remainder === 1;
}

/**
 * Converts a Tunisian RIB (20 digits) to a full IBAN (24 characters).
 * 
 * @param rib - The 20-digit RIB to convert
 * @returns The full IBAN string, or null if the RIB is invalid
 */
export function ribToIBAN(rib: string): string | null {
    if (typeof rib !== 'string') return null;

    // Remove spaces
    const cleaned = rib.replace(/\s/g, '');

    // Must be exactly 20 digits
    if (!/^\d{20}$/.test(cleaned)) return null;

    // Calculate check digits
    // Formula: 98 - ((RIB * 100 + TN_numeric) mod 97)
    // TN = 29 14 (T=29, N=23) → "2923"
    const checkBase = cleaned + '292300';
    const checkDigits = 98 - mod97(checkBase);

    // Format check digits with leading zero if needed
    const formattedCheck = checkDigits.toString().padStart(2, '0');

    return `TN${formattedCheck}${cleaned}`;
}

/**
 * Calculate modulo 97 for a large number string.
 * Processes in chunks to avoid BigInt issues.
 */
function mod97(numStr: string): number {
    let remainder = 0;
    for (const char of numStr) {
        remainder = (remainder * 10 + parseInt(char, 10)) % 97;
    }
    return remainder;
}
