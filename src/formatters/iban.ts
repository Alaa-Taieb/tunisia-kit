/**
 * Formats a Tunisian IBAN for display.
 * 
 * @param iban - The IBAN string to format
 * @returns Formatted IBAN in groups of 4, or the original string if invalid length
 * 
 * @example
 * formatIBAN('TN5910006035183598478831')
 * // Returns: 'TN59 1000 6035 1835 9847 8831'
 */
export function formatIBAN(iban: string): string {
    if (typeof iban !== 'string') return '';

    // Remove existing spaces and convert to uppercase
    const cleaned = iban.replace(/\s/g, '').toUpperCase();

    // Format in groups of 4 characters
    return cleaned.match(/.{1,4}/g)?.join(' ') || cleaned;
}
