/**
 * Validates a Tunisian landline phone number.
 * 
 * Landlines in Tunisia are 8 digits starting with 7.
 * The second digit indicates the region:
 * - 71: Greater Tunis
 * - 72: Northeast (Cap Bon, Bizerte)
 * - 73: Sahel (Sousse, Monastir, Mahdia)
 * - 74: Sfax region
 * - 75: Gafsa, Tozeur, Kebili
 * - 76: Gabès, Médenine, Tataouine
 * - 77: Kasserine, Sidi Bouzid
 * - 78: Béja, Jendouba, Le Kef, Siliana
 * 
 * Supports formats:
 * - 71234567 (8 digits)
 * - +21671234567 (with country code)
 * - 0021671234567 (with 00 prefix)
 */
export function isValidLandline(phone: string): boolean {
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

    // Must start with 7 and have valid region prefix (71-78)
    const prefix = localNumber.substring(0, 2);
    const validPrefixes = ['71', '72', '73', '74', '75', '76', '77', '78'];

    return validPrefixes.includes(prefix);
}
