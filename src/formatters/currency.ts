const ARABIC_DIGITS = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

/** Convert ASCII digits in a string to Arabic-Indic digits. */
function toArabicDigits(input: string): string {
  return input.replace(/\d/g, (d) => ARABIC_DIGITS[Number(d)]);
}

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

  // Guard against non-finite values (Infinity, -Infinity) which would
  // otherwise produce output like "Infinity,undefined TND".
  if (!Number.isFinite(amount)) return '0,000 TND';

  // Round to 3 decimal places (millimes)
  const fixed = amount.toFixed(3);

  // Split integer and decimal parts
  const [intPart, decPart] = fixed.split('.');

  // Add thousands separator (space)
  const withSeparator = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  return `${withSeparator},${decPart} TND`;
}

/**
 * Formats a number as Tunisian currency using Arabic-Indic digits.
 * - Uses space as thousands separator and Arabic comma (،) as decimal separator
 * - Shows 3 decimal places (millimes)
 * - Uses the Arabic "د.ت" (dinar tunisien) symbol
 *
 * Example: 1250.5 → "١ ٢٥٠،٥٠٠ د.ت"
 */
export function formatCurrencyAr(amount: number): string {
  if (typeof amount !== 'number' || isNaN(amount)) {
    return '٠،٠٠٠ د.ت';
  }

  if (!Number.isFinite(amount)) return '٠،٠٠٠ د.ت';

  // Round to 3 decimal places (millimes)
  const fixed = amount.toFixed(3);

  // Split integer and decimal parts
  const [intPart, decPart] = fixed.split('.');

  // Add thousands separator (space)
  const withSeparator = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  const arInt = toArabicDigits(withSeparator);
  const arDec = toArabicDigits(decPart);

  return `${arInt}،${arDec} د.ت`;
}
