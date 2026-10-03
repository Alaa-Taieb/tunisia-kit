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
export function formatIBAN(iban: unknown): string {
  if (typeof iban !== 'string') return '';

  // Remove existing spaces and convert to uppercase
  const cleaned = iban.replace(/\s/g, '').toUpperCase();

  if (!/^TN\d{22}$/.test(cleaned)) return iban;

  // Format in groups of 4 characters
  return [
    cleaned.slice(0, 4),
    cleaned.slice(4, 8),
    cleaned.slice(8, 12),
    cleaned.slice(12, 16),
    cleaned.slice(16, 20),
    cleaned.slice(20)
  ].join(' ');
}
