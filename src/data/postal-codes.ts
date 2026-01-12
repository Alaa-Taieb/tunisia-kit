/**
 * Simplified postal codes for major Tunisian cities.
 */
export interface PostalCode {
    city: string;
    code: string;
    governorate: string;
}

export const POSTAL_CODES: PostalCode[] = [
    { city: 'Tunis', code: '1000', governorate: 'Tunis' },
    { city: 'La Marsa', code: '2070', governorate: 'Tunis' },
    { city: 'Carthage', code: '2016', governorate: 'Tunis' },
    { city: 'Sidi Bou Said', code: '2026', governorate: 'Tunis' },
    { city: 'Ariana', code: '2080', governorate: 'Ariana' },
    { city: 'Ben Arous', code: '2013', governorate: 'Ben Arous' },
    { city: 'Manouba', code: '2010', governorate: 'Manouba' },
    { city: 'Sousse', code: '4000', governorate: 'Sousse' },
    { city: 'Monastir', code: '5000', governorate: 'Monastir' },
    { city: 'Sfax', code: '3000', governorate: 'Sfax' },
    { city: 'Kairouan', code: '3100', governorate: 'Kairouan' },
    { city: 'Bizerte', code: '7000', governorate: 'Bizerte' },
    { city: 'Gabès', code: '6000', governorate: 'Gabès' },
    { city: 'Nabeul', code: '8000', governorate: 'Nabeul' },
    { city: 'Hammamet', code: '8050', governorate: 'Nabeul' },
    { city: 'Gafsa', code: '2100', governorate: 'Gafsa' },
    { city: 'Tozeur', code: '2200', governorate: 'Tozeur' },
    { city: 'Djerba', code: '4180', governorate: 'Médenine' },
    { city: 'Médenine', code: '4100', governorate: 'Médenine' },
    { city: 'Tataouine', code: '3200', governorate: 'Tataouine' },
    { city: 'Mahdia', code: '5100', governorate: 'Mahdia' },
    { city: 'Béja', code: '9000', governorate: 'Béja' },
    { city: 'Jendouba', code: '8100', governorate: 'Jendouba' },
    { city: 'Le Kef', code: '7100', governorate: 'Le Kef' }
];
