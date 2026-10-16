const STANDARD_PATTERN = /^\d{1,3}(?:تونس|TU)\d{1,4}$/i;

const RUNNING_NUMBER_PATTERN = /^\d{1,6}(?:ن\.?ت|RS|د\.?ن|MOTO|ج\.?ف|TRAC)$/i;

const LEGACY_RS_PATTERN = /^RS\d{1,6}$/i;

const DIPLOMATIC_SERIES: readonly (readonly [string, string])[] = [
  ['CD', 'سد'],
  ['CMD', 'ربد'],
  ['MD', 'بد'],
  ['MC', 'ثق'],
  ['CC', 'سق'],
  ['PAT', 'م[أا]ف']
];

const DIPLOMATIC_PATTERN = new RegExp(
  `^\\d{2}(?:${DIPLOMATIC_SERIES.map(([latin, arabic]) => `${latin}(?:${arabic})?|${arabic}`).join('|')})\\d{2}$`,
  'i'
);

/**
 * Checks documented Tunisian license-plate layouts, not issuance.
 * See docs/DATA_SOURCES.md for sources and limitations.
 *
 * Standard series: 1–3 digit series, تونس, 1–4 digit number
 * - "123 تونس 4567", "76 تونس 472"
 * - "123 TU 4567" (conventional Latin transliteration, case-insensitive)
 *
 * Running-number series (number, then series letters):
 * - Régime suspensif (RS): "62180 ن ت", "62180 RS"; legacy "RS 66232"
 * - Motorcycle: "5624 د ن", "5624 MOTO"
 * - Tractor: "1234 ج ف", "1234 TRAC"
 *
 * Diplomatic and consular series (2-digit mission code, series, 2-digit number),
 * written with the Latin code, the Arabic letters, or both:
 * - CD — Corps Diplomatique: "73 CD 06", "73 CD س د 06"
 * - CMD — Chef de Mission Diplomatique: "12 CMD ر ب د 01"
 * - MD — Mission Diplomatique: "12 MD ب د 34"
 * - MC — Mission Consulaire: "12 MC ث ق 34"
 * - CC — Corps Consulaire: "12 CC س ق 34"
 * - PAT — Personnel Administratif et Technique: "12 PAT م أ ف 34"
 *
 * @see https://fr.wikipedia.org/wiki/Plaque_d%27immatriculation_tunisienne
 */
export function isValidLicensePlate(plate: unknown): boolean {
  if (typeof plate !== 'string') return false;

  const cleaned = plate.replace(/\s/g, '');

  return (
    STANDARD_PATTERN.test(cleaned) ||
    RUNNING_NUMBER_PATTERN.test(cleaned) ||
    LEGACY_RS_PATTERN.test(cleaned) ||
    DIPLOMATIC_PATTERN.test(cleaned)
  );
}
