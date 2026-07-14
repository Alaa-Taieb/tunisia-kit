import { GOVERNORATES, type Governorate } from './governorates.js';

/**
 * Compact, bundle-conscious Tunisian postal-code → governorate mapping.
 *
 * Tunisian postal codes are four digits. The first two digits denote the
 * governorate (see https://en.wikipedia.org/wiki/Postal_codes_in_Tunisia).
 * Because a few prefixes are shared by several governorates (notably `11xx`
 * and `20xx`), this lightweight table maps each 100-block to a
 * *representative* governorate and is intended for approximate grouping, not
 * authoritative address resolution.
 *
 * Tuple shape: `[minCode, maxCode, governorateId]`
 */
export const POSTAL_CODE_RANGES: ReadonlyArray<readonly [number, number, number]> = [
  [1000, 1099, 1], // Tunis
  [1100, 1199, 6], // Zaghouan (also Ben Arous / Manouba)
  [1200, 1299, 17], // Kasserine
  [2000, 2099, 1], // Tunis (also Ariana / Ben Arous / Manouba)
  [2100, 2199, 22], // Gafsa
  [2200, 2299, 23], // Tozeur
  [3000, 3099, 15], // Sfax
  [3100, 3199, 16], // Kairouan
  [3200, 3299, 21], // Tataouine
  [4000, 4099, 12], // Sousse
  [4100, 4199, 20], // Médenine
  [4200, 4299, 24], // Kebili
  [5000, 5099, 13], // Monastir
  [5100, 5199, 14], // Mahdia
  [6000, 6099, 19], // Gabès
  [6100, 6199, 11], // Siliana
  [7000, 7099, 7], // Bizerte
  [7100, 7199, 10], // Le Kef
  [8000, 8099, 5], // Nabeul
  [8100, 8199, 9], // Jendouba
  [9000, 9099, 8], // Béja
  [9100, 9199, 18] // Sidi Bouzid
];

/**
 * Resolve the governorate for a Tunisian postal code.
 *
 * @param code - A 4-digit postal code (string or number)
 * @returns The matching `Governorate`, or `null` if the code is invalid or
 *          falls outside any known range.
 */
export function getGovernorateFromPostalCode(code: string | number): Governorate | null {
  const normalized = typeof code === 'number' ? String(code) : String(code).replace(/\s/g, '');
  if (!/^\d{4}$/.test(normalized)) return null;

  const value = parseInt(normalized, 10);
  if (value < 1000 || value > 9299) return null;

  const match = POSTAL_CODE_RANGES.find(([min, max]) => value >= min && value <= max);
  if (!match) return null;

  const governorateId = match[2];
  // governorateId always maps to a real governorate
  /* v8 ignore next */
  return GOVERNORATES.find((g) => g.id === governorateId) ?? null;
}
