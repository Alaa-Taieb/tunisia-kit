/** Normalize Arabic-Indic and Persian digits for user input. */
export function normalizeDigits(input: string): string {
  return input.replace(/[٠-٩۰-۹]/g, (digit) =>
    String(digit.charCodeAt(0) - (digit <= '٩' ? 0x660 : 0x6f0))
  );
}

export function toArabicDigits(input: string): string {
  return input.replace(/\d/g, (digit) => String.fromCharCode(0x660 + Number(digit)));
}
