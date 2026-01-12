/**
 * Tunisian bank codes mapping (first 2 digits of RIB).
 */
export interface Bank {
    code: string;
    name: string;
    abbrev: string;
}

export const BANKS: Bank[] = [
    { code: '01', name: 'Arab Tunisian Bank', abbrev: 'ATB' },
    { code: '02', name: 'Société Tunisienne de Banque', abbrev: 'STB' },
    { code: '03', name: 'Banque Nationale Agricole', abbrev: 'BNA' },
    { code: '04', name: 'Banque de l\'Habitat', abbrev: 'BH' },
    { code: '05', name: 'Banque de Tunisie', abbrev: 'BT' },
    { code: '07', name: 'Amen Bank', abbrev: 'AB' },
    { code: '08', name: 'Union Bancaire pour le Commerce et l\'Industrie', abbrev: 'UBCI' },
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
    { code: '47', name: 'Arab Banking Corporation', abbrev: 'ABC' }
];

/**
 * Bank code to bank info lookup map
 */
const bankMap = new Map<string, Bank>(BANKS.map(b => [b.code, b]));

/**
 * Get bank information from a RIB number.
 * @param rib - The 20-digit RIB number
 * @returns Bank name or undefined if code not found
 */
export function getBankFromRIB(rib: string): string | undefined {
    const cleaned = rib.replace(/\s/g, '');
    if (cleaned.length < 2) return undefined;

    const code = cleaned.slice(0, 2);
    const bank = bankMap.get(code);

    return bank ? `${bank.name} (${bank.abbrev})` : undefined;
}
