import { isValidIBAN } from '../validators/iban.js';
import { isValidRIB } from '../validators/rib.js';
import { freezeRecords } from '../internal/freeze.js';
/**
 * Tunisian bank codes (first 2 digits of a RIB), per the Banque Centrale de
 * Tunisie "Structure du système financier tunisien" (code banque), plus La
 * Poste Tunisienne (CCP, 17). Offshore branches have their own codes.
 */
export interface Bank {
  readonly code: string;
  readonly name: string;
  readonly abbrev: string;
}

export const BANKS = freezeRecords<Bank>([
  { code: '01', name: 'Arab Tunisian Bank', abbrev: 'ATB' },
  { code: '02', name: 'Banque Franco-Tunisienne', abbrev: 'BFT' },
  { code: '03', name: 'Banque Nationale Agricole', abbrev: 'BNA' },
  { code: '04', name: 'Attijari Bank', abbrev: 'ATT' },
  { code: '05', name: 'Banque de Tunisie', abbrev: 'BT' },
  { code: '07', name: 'Amen Bank', abbrev: 'AB' },
  { code: '08', name: 'Banque Internationale Arabe de Tunisie', abbrev: 'BIAT' },
  { code: '10', name: 'Société Tunisienne de Banque', abbrev: 'STB' },
  { code: '11', name: "Union Bancaire pour le Commerce et l'Industrie", abbrev: 'UBCI' },
  { code: '12', name: 'Union Internationale de Banques', abbrev: 'UIB' },
  { code: '14', name: 'BH Bank', abbrev: 'BH' },
  { code: '16', name: 'Citibank Tunisia', abbrev: 'CITI' },
  { code: '17', name: 'La Poste Tunisienne', abbrev: 'CCP' },
  { code: '20', name: 'Banque Tuniso-Koweitienne', abbrev: 'BTK' },
  { code: '21', name: 'Tunisian Saudi Bank', abbrev: 'TSB' },
  { code: '23', name: 'QNB Tunisia', abbrev: 'QNB' },
  { code: '24', name: 'Banque de Tunisie et des Emirats', abbrev: 'BTE' },
  { code: '25', name: 'Banque Zitouna', abbrev: 'BZ' },
  { code: '26', name: 'Banque Tuniso-Libyenne', abbrev: 'BTL' },
  { code: '27', name: 'Banque Tunisienne de Solidarité', abbrev: 'BTS' },
  { code: '28', name: 'Arab Banking Corporation Tunisie', abbrev: 'ABC' },
  { code: '29', name: 'Banque de Financement des PME', abbrev: 'BFPME' },
  { code: '32', name: 'Al Baraka Bank Tunisia', abbrev: 'ABT' },
  { code: '33', name: 'North Africa International Bank', abbrev: 'NAIB' },
  { code: '35', name: 'Alubaf International Bank Tunis', abbrev: 'ALUBAF' },
  { code: '45', name: 'International Maghreb Merchant Bank', abbrev: 'IMBank' },
  { code: '46', name: 'Capital African Partners Bank', abbrev: 'CAP Bank' },
  { code: '47', name: 'Wifak International Bank', abbrev: 'WIB' },
  { code: '72', name: 'Tunisian Foreign Bank', abbrev: 'TFB' },
  { code: '73', name: 'Tunis International Bank', abbrev: 'TIB' },
  { code: '74', name: 'Loan and Investment Company', abbrev: 'LINC' },
  { code: '75', name: 'Citibank Tunisia (offshore)', abbrev: 'CITI' },
  { code: '78', name: 'Arab Banking Corporation Tunisie (offshore)', abbrev: 'ABC' }
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
