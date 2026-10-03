import { FIXED_LINE_PATTERN, localPhoneNumber } from '../internal/phone.js';
import { freezeRecords } from '../internal/freeze.js';
/**
 * Landline region prefixes for Tunisia.
 * Each prefix (71-78) corresponds to a specific geographic region.
 */
export interface LandlineRegion {
  readonly prefix: string;
  readonly name_fr: string;
  readonly name_ar: string;
  readonly governorates: readonly string[];
}

export const LANDLINE_REGIONS = freezeRecords<LandlineRegion>([
  {
    prefix: '71',
    name_fr: 'Grand Tunis',
    name_ar: 'تونس الكبرى',
    governorates: ['Tunis', 'Ariana', 'Ben Arous', 'Manouba']
  },
  {
    prefix: '72',
    name_fr: 'Nord-Est',
    name_ar: 'الشمال الشرقي',
    governorates: ['Nabeul', 'Zaghouan', 'Bizerte']
  },
  {
    prefix: '73',
    name_fr: 'Sahel',
    name_ar: 'الساحل',
    governorates: ['Sousse', 'Monastir', 'Mahdia']
  },
  {
    prefix: '74',
    name_fr: 'Sfax',
    name_ar: 'صفاقس',
    governorates: ['Sfax']
  },
  {
    prefix: '75',
    name_fr: 'Sud-Ouest',
    name_ar: 'الجنوب الغربي',
    governorates: ['Gafsa', 'Tozeur', 'Kebili']
  },
  {
    prefix: '76',
    name_fr: 'Sud-Est',
    name_ar: 'الجنوب الشرقي',
    governorates: ['Gabès', 'Médenine', 'Tataouine']
  },
  {
    prefix: '77',
    name_fr: 'Centre-Ouest',
    name_ar: 'الوسط الغربي',
    governorates: ['Kairouan', 'Kasserine', 'Sidi Bouzid']
  },
  {
    prefix: '78',
    name_fr: 'Nord-Ouest',
    name_ar: 'الشمال الغربي',
    governorates: ['Béja', 'Jendouba', 'Le Kef', 'Siliana']
  }
]);

/** Return an approximate geographic region for prefixes 71–78 only.
 * Valid fixed-line numbers in other allocations return null; a prefix is not
 * proof of the subscriber's location. See docs/DATA_SOURCES.md.
 */
export function getRegionFromLandline(phone: unknown): LandlineRegion | null {
  const number = localPhoneNumber(phone);
  if (number === null || !FIXED_LINE_PATTERN.test(number)) return null;
  return LANDLINE_REGIONS.find((region) => region.prefix === number.slice(0, 2)) ?? null;
}
