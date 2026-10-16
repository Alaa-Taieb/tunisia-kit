import { toArabicDigits } from '../internal/digits.js';

// Intl expands large finite numbers without toFixed's exponential notation.
const currencyNumber = new Intl.NumberFormat('en-US', {
  useGrouping: false,
  minimumFractionDigits: 3,
  maximumFractionDigits: 3
});

/** Display TND with three millime digits; invalid/non-finite amounts return ''.
 * Uses Intl's decimal rounding. This is a display helper, not money arithmetic.
 */
export function formatCurrency(amount: unknown): string {
  if (typeof amount !== 'number' || !Number.isFinite(amount)) return '';
  // Intl keeps the sign of -0 and of negatives that round to zero ("-0.000").
  const [integer, fraction] = currencyNumber
    .format(amount)
    .replace(/^-(?=0\.0+$)/, '')
    .split('.');
  const grouped = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return `${grouped},${fraction} TND`;
}

/** Arabic-Indic TND display with the Arabic decimal separator (U+066B).
 * The invalid-input policy matches formatCurrency.
 */
export function formatCurrencyAr(amount: unknown): string {
  const formatted = formatCurrency(amount);
  return formatted === '' ? '' : toArabicDigits(formatted.replace(',', '٫').replace('TND', 'د.ت'));
}
