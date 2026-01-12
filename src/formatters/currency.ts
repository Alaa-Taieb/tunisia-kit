/**
 * Formats a number as Tunisian currency (TND).
 * - Uses space as thousands separator
 * - Uses comma as decimal separator
 * - Shows 3 decimal places (millimes)
 * 
 * Example: 1250.5 → "1 250,500 TND"
 */
export function formatCurrency(amount: number): string {
    if (typeof amount !== 'number' || isNaN(amount)) {
        return '0,000 TND';
    }

    // Round to 3 decimal places (millimes)
    const fixed = amount.toFixed(3);

    // Split integer and decimal parts
    const [intPart, decPart] = fixed.split('.');

    // Add thousands separator (space)
    const withSeparator = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

    return `${withSeparator},${decPart} TND`;
}
