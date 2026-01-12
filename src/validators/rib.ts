/**
 * Validates a Tunisian RIB (Relevé d'Identité Bancaire).
 * - Must be exactly 20 digits
 * - Uses Modulo 97 algorithm for check digit validation
 * 
 * RIB Format: BB BBB CCCCC CCCCCCC KK
 * - BB: Bank code (2 digits)
 * - BBB: Branch code (3 digits)
 * - CCCCC CCCCCCC: Account number (12 digits)
 * - KK: Check digits (2 digits)
 */
export function isValidRIB(rib: string): boolean {
    if (typeof rib !== 'string') return false;

    // Remove spaces
    const cleaned = rib.replace(/\s/g, '');

    // Must be exactly 20 digits
    if (!/^\d{20}$/.test(cleaned)) return false;

    // Modulo 97 validation
    // The entire RIB number modulo 97 should equal 97
    // We process in chunks to avoid BigInt issues
    const remainder = mod97(cleaned);

    return remainder === 0;
}

/**
 * Calculate modulo 97 for a large number string
 */
function mod97(numStr: string): number {
    let remainder = 0;
    for (const char of numStr) {
        remainder = (remainder * 10 + parseInt(char, 10)) % 97;
    }
    return remainder;
}
