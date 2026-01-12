/**
 * Landline region prefixes for Tunisia.
 * Each prefix (71-78) corresponds to a specific geographic region.
 */
export interface LandlineRegion {
    prefix: string;
    name_fr: string;
    name_ar: string;
    governorates: string[];
}

export const LANDLINE_REGIONS: LandlineRegion[] = [
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
];

/**
 * Gets the region information from a landline phone number.
 * 
 * @param phone - The landline phone number (8 digits or with country code)
 * @returns The region information, or null if not found
 * 
 * @example
 * getRegionFromLandline('71234567')
 * // Returns: { prefix: '71', name_fr: 'Grand Tunis', name_ar: 'تونس الكبرى', governorates: [...] }
 */
export function getRegionFromLandline(phone: string): LandlineRegion | null {
    if (typeof phone !== 'string') return null;

    // Remove spaces, dashes, and extract local number
    let cleaned = phone.replace(/[\s-]/g, '');

    if (cleaned.startsWith('+216')) {
        cleaned = cleaned.slice(4);
    } else if (cleaned.startsWith('00216')) {
        cleaned = cleaned.slice(5);
    }

    if (cleaned.length !== 8) return null;

    const prefix = cleaned.substring(0, 2);
    return LANDLINE_REGIONS.find(region => region.prefix === prefix) || null;
}
