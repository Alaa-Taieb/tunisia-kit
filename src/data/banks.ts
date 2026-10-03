import { isValidIBAN } from '../validators/iban.js';
import { isValidRIB } from '../validators/rib.js';
import { freezeRecords } from '../internal/freeze.js';
/**
 * Tunisian bank codes mapping (first 2 digits of RIB).
 */
export interface Bank {
  readonly code: string;
  readonly name: string;
  readonly abbrev: string;
}

export const BANKS = freezeRecords<Bank>([
  { code: '01', name: 'Arab Tunisian Bank', abbrev: 'ATB' },
  { code: '02', name: 'Société Tunisienne de Banque', abbrev: 'STB' },
  { code: '03', name: 'Banque Nationale Agricole', abbrev: 'BNA' },
  { code: '04', name: "Banque de l'Habitat", abbrev: 'BH' },
  { code: '05', name: 'Banque de Tunisie', abbrev: 'BT' },
  { code: '07', name: 'Amen Bank', abbrev: 'AB' },
  { code: '08', name: "Union Bancaire pour le Commerce et l'Industrie", abbrev: 'UBCI' },
  { code: '10', name: 'Banque Internationale Arabe de Tunisie', abbrev: 'BIAT' },
  { code: '11', name: 'Attijari Bank', abbrev: 'ATT' },
  { code: '12', name: 'Union Internationale de Banques', abbrev: 'UIB' },
  { code: '14', name: 'Banque de Tunisie et des Emirats', abbrev: 'BTE' },
  { code: '16', name: 'Banque Tuniso-Koweitienne', abbrev: 'BTK' },
  { code: '17', name: 'Banque de Financement des PME', abbrev: 'BFPME' },
  { code: '20', name: 'La Poste Tunisienne', abbrev: 'LP' },
  { code: '21', name: 'Banque Zitouna', abbrev: 'BZ' },
  { code: '23', name: 'QNB Tunisia', abbrev: 'QNB' },
  { code: '24', name: 'Al Baraka Bank Tunisia', abbrev: 'ABT' },
  { code: '25', name: 'Wifak International Bank', abbrev: 'WIB' },
  { code: '26', name: 'Banque Tuniso-Libyenne', abbrev: 'BTL' },
  { code: '32', name: 'Citibank Tunisia', abbrev: 'CITI' },
  { code: '47', name: 'Arab Banking Corporation', abbrev: 'ABC' },
  { code: '48', name: 'Banque Tunisienne de Solidarité', abbrev: 'BTS' },
  { code: '49', name: 'Tunisian Foreign Bank', abbrev: 'TFB' },
  { code: '50', name: 'Tunis International Bank', abbrev: 'TIB' },
  { code: '51', name: 'North Africa International Bank', abbrev: 'NAIB' },
  { code: '52', name: 'Tunisian Saudi Bank', abbrev: 'TSB' },
  { code: '53', name: 'BH Bank Tunisia', abbrev: 'BH' }
]);

/**
 * Bank code to bank info lookup map
 */
const bankMap = new Map<string, Bank>(BANKS.map((b) => [b.code, b]));

/** Return an immutable reference record for a known two-digit bank code. */
export function getBankByCode(code: unknown): Bank | null {
  return typeof code === 'string' ? (bankMap.get(code) ?? null) : null;
}

/** Bank name from a checksum-valid RIB, or null for invalid/unknown input. */
export function getBankFromRIB(rib: unknown): string | null {
  if (typeof rib !== 'string' || !isValidRIB(rib)) return null;
  const bank = getBankByCode(rib.replace(/\s/g, '').slice(0, 2));
  return bank ? `${bank.name} (${bank.abbrev})` : null;
}

/** Bank name from a checksum-valid Tunisian IBAN, or null. */
export function getBankFromIBAN(iban: unknown): string | null {
  if (typeof iban !== 'string' || !isValidIBAN(iban)) return null;
  const bank = getBankByCode(iban.replace(/\s/g, '').slice(4, 6));
  return bank ? `${bank.name} (${bank.abbrev})` : null;
}
