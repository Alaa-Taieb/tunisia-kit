import { GOVERNORATES, type Governorate } from './governorates.js';
import { freezeRecords } from '../internal/freeze.js';
import { postalCodeNumber } from '../internal/postal-code.js';

/** Approximate unambiguous postal blocks, not an authoritative address registry.
 * Shared 11xx/20xx blocks are exposed as candidates instead of assigned a winner.
 * See docs/DATA_SOURCES.md; format validity does not imply an assigned code.
 */
export const POSTAL_CODE_RANGES = freezeRecords<[number, number, number]>([
  [1000, 1099, 1], // Tunis
  [1200, 1299, 17], // Kasserine
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
]);

/** Possible governorates for approximate grouping, never exact address resolution. */
export function getGovernorateCandidatesFromPostalCode(code: unknown): readonly Governorate[] {
  const value = postalCodeNumber(code);
  if (value === null) return Object.freeze([]);
  let ids: readonly number[];
  if (value >= 1100 && value <= 1199) ids = [3, 4, 6];
  else if (value >= 2000 && value <= 2099) ids = [1, 2, 3, 4];
  else {
    const range = POSTAL_CODE_RANGES.find(([min, max]) => value >= min && value <= max);
    ids = range ? [range[2]] : [];
  }
  return Object.freeze(GOVERNORATES.filter((g) => ids.includes(g.id)));
}

/** Unique approximate governorate, or null for ambiguous/invalid/unmapped input. */
export function getGovernorateFromPostalCode(code: unknown): Governorate | null {
  const candidates = getGovernorateCandidatesFromPostalCode(code);
  return candidates.length === 1 ? candidates[0] : null;
}
