/**
 * Valid Tunisian mobile phone prefixes by provider:
 * - Tunisie Telecom: 9x, 4x
 * - Ooredoo: 2x
 * - Orange: 5x
 */
const VALID_PREFIXES = ['2', '4', '5', '9'];

/**
 * Validates a Tunisian mobile phone number.
 * Supports formats:
 * - 22555111 (8 digits)
 * - +21622555111 (with country code)
 * - 0021622555111 (with 00 prefix)
 */
export function isValidPhone(phone: string): boolean {
    if (typeof phone !== 'string') return false;

    // Remove spaces and dashes
    const cleaned = phone.replace(/[\s-]/g, '');

    // Extract the 8-digit local number
    let localNumber: string;

    if (cleaned.startsWith('+216')) {
        localNumber = cleaned.slice(4);
    } else if (cleaned.startsWith('00216')) {
        localNumber = cleaned.slice(5);
    } else {
        localNumber = cleaned;
    }

    // Must be exactly 8 digits
    if (!/^\d{8}$/.test(localNumber)) return false;

    // Check valid provider prefix
    const prefix = localNumber.charAt(0);
    return VALID_PREFIXES.includes(prefix);
}
