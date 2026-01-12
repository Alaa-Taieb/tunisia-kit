/**
 * Formats a phone number in local Tunisian format.
 * Example: 22555111 → "22 555 111"
 */
export function formatPhone(phone: string): string {
    const cleaned = extractLocalNumber(phone);
    if (cleaned.length !== 8) return phone;

    return `${cleaned.slice(0, 2)} ${cleaned.slice(2, 5)} ${cleaned.slice(5)}`;
}

/**
 * Formats a phone number in international format.
 * Example: 22555111 → "+216 22 555 111"
 */
export function formatPhoneIntl(phone: string): string {
    const cleaned = extractLocalNumber(phone);
    if (cleaned.length !== 8) return phone;

    return `+216 ${cleaned.slice(0, 2)} ${cleaned.slice(2, 5)} ${cleaned.slice(5)}`;
}

/**
 * Formats a landline number in local Tunisian format.
 * Example: 71234567 → "71 234 567"
 */
export function formatLandline(phone: string): string {
    const cleaned = extractLocalNumber(phone);
    if (cleaned.length !== 8) return phone;

    return `${cleaned.slice(0, 2)} ${cleaned.slice(2, 5)} ${cleaned.slice(5)}`;
}

/**
 * Formats a landline number in international format.
 * Example: 71234567 → "+216 71 234 567"
 */
export function formatLandlineIntl(phone: string): string {
    const cleaned = extractLocalNumber(phone);
    if (cleaned.length !== 8) return phone;

    return `+216 ${cleaned.slice(0, 2)} ${cleaned.slice(2, 5)} ${cleaned.slice(5)}`;
}

/**
 * Extract the 8-digit local number from various formats
 */
function extractLocalNumber(phone: string): string {
    const cleaned = phone.replace(/[\s-]/g, '');

    if (cleaned.startsWith('+216')) {
        return cleaned.slice(4);
    } else if (cleaned.startsWith('00216')) {
        return cleaned.slice(5);
    }
    return cleaned;
}

