/**
 * Tunisian administrative delegations (Délégations).
 * Each governorate is divided into multiple delegations.
 */
export interface Delegation {
    governorate_id: number;
    name_fr: string;
    name_ar: string;
}

export const DELEGATIONS: Delegation[] = [
    // Tunis (1)
    { governorate_id: 1, name_fr: 'Tunis Ville', name_ar: 'مدينة تونس' },
    { governorate_id: 1, name_fr: 'Le Bardo', name_ar: 'باردو' },
    { governorate_id: 1, name_fr: 'La Goulette', name_ar: 'حلق الوادي' },
    { governorate_id: 1, name_fr: 'Carthage', name_ar: 'قرطاج' },
    { governorate_id: 1, name_fr: 'La Marsa', name_ar: 'المرسى' },
    { governorate_id: 1, name_fr: 'Sidi Bou Said', name_ar: 'سيدي بوسعيد' },

    // Ariana (2)
    { governorate_id: 2, name_fr: 'Ariana Ville', name_ar: 'أريانة المدينة' },
    { governorate_id: 2, name_fr: 'La Soukra', name_ar: 'السكرة' },
    { governorate_id: 2, name_fr: 'Raoued', name_ar: 'رواد' },
    { governorate_id: 2, name_fr: 'Kalâat el-Andalous', name_ar: 'قلعة الأندلس' },
    { governorate_id: 2, name_fr: 'Sidi Thabet', name_ar: 'سيدي ثابت' },

    // Ben Arous (3)
    { governorate_id: 3, name_fr: 'Ben Arous', name_ar: 'بن عروس' },
    { governorate_id: 3, name_fr: 'Hammam Lif', name_ar: 'حمام الأنف' },
    { governorate_id: 3, name_fr: 'Hammam Chott', name_ar: 'حمام الشط' },
    { governorate_id: 3, name_fr: 'Radès', name_ar: 'رادس' },
    { governorate_id: 3, name_fr: 'Mégrine', name_ar: 'المقرين' },
    { governorate_id: 3, name_fr: 'Mourouj', name_ar: 'المروج' },

    // Manouba (4)
    { governorate_id: 4, name_fr: 'Manouba', name_ar: 'منوبة' },
    { governorate_id: 4, name_fr: 'Den Den', name_ar: 'الدندان' },
    { governorate_id: 4, name_fr: 'Douar Hicher', name_ar: 'دوار هيشر' },
    { governorate_id: 4, name_fr: 'Oued Ellil', name_ar: 'وادي الليل' },
    { governorate_id: 4, name_fr: 'Tebourba', name_ar: 'طبربة' },

    // Nabeul (5)
    { governorate_id: 5, name_fr: 'Nabeul', name_ar: 'نابل' },
    { governorate_id: 5, name_fr: 'Hammamet', name_ar: 'الحمامات' },
    { governorate_id: 5, name_fr: 'Korba', name_ar: 'قربة' },
    { governorate_id: 5, name_fr: 'Kelibia', name_ar: 'قليبية' },
    { governorate_id: 5, name_fr: 'Grombalia', name_ar: 'قرنبالية' },
    { governorate_id: 5, name_fr: 'Soliman', name_ar: 'سليمان' },

    // Sousse (6)
    { governorate_id: 6, name_fr: 'Sousse Ville', name_ar: 'مدينة سوسة' },
    { governorate_id: 6, name_fr: 'Sousse Jawhara', name_ar: 'سوسة الجوهرة' },
    { governorate_id: 6, name_fr: 'Sousse Riadh', name_ar: 'سوسة الرياض' },
    { governorate_id: 6, name_fr: 'Hammam Sousse', name_ar: 'حمام سوسة' },
    { governorate_id: 6, name_fr: 'Msaken', name_ar: 'مساكن' },
    { governorate_id: 6, name_fr: 'Kalâa Kebira', name_ar: 'القلعة الكبرى' },

    // Sfax (7)
    { governorate_id: 7, name_fr: 'Sfax Ville', name_ar: 'مدينة صفاقس' },
    { governorate_id: 7, name_fr: 'Sfax Ouest', name_ar: 'صفاقس الغربية' },
    { governorate_id: 7, name_fr: 'Sfax Sud', name_ar: 'صفاقس الجنوبية' },
    { governorate_id: 7, name_fr: 'Sakiet Ezzit', name_ar: 'ساقية الزيت' },
    { governorate_id: 7, name_fr: 'Mahres', name_ar: 'المحرس' },
    { governorate_id: 7, name_fr: 'Kerkennah', name_ar: 'قرقنة' },

    // Bizerte (8)
    { governorate_id: 8, name_fr: 'Bizerte Nord', name_ar: 'بنزرت الشمالية' },
    { governorate_id: 8, name_fr: 'Bizerte Sud', name_ar: 'بنزرت الجنوبية' },
    { governorate_id: 8, name_fr: 'Menzel Bourguiba', name_ar: 'منزل بورقيبة' },
    { governorate_id: 8, name_fr: 'Mateur', name_ar: 'ماطر' },
    { governorate_id: 8, name_fr: 'Ras Jebel', name_ar: 'رأس الجبل' },

    // Gabès (9)
    { governorate_id: 9, name_fr: 'Gabès Ville', name_ar: 'مدينة قابس' },
    { governorate_id: 9, name_fr: 'Gabès Sud', name_ar: 'قابس الجنوبية' },
    { governorate_id: 9, name_fr: 'Gabès Ouest', name_ar: 'قابس الغربية' },
    { governorate_id: 9, name_fr: 'El Hamma', name_ar: 'الحامة' },
    { governorate_id: 9, name_fr: 'Mareth', name_ar: 'مارث' },

    // Médenine (10)
    { governorate_id: 10, name_fr: 'Médenine Nord', name_ar: 'مدنين الشمالية' },
    { governorate_id: 10, name_fr: 'Médenine Sud', name_ar: 'مدنين الجنوبية' },
    { governorate_id: 10, name_fr: 'Zarzis', name_ar: 'جرجيس' },
    { governorate_id: 10, name_fr: 'Ben Guerdane', name_ar: 'بن قردان' },
    { governorate_id: 10, name_fr: 'Djerba Houmt Souk', name_ar: 'جربة حومة السوق' },
    { governorate_id: 10, name_fr: 'Djerba Midoun', name_ar: 'جربة ميدون' }
];

/**
 * Gets delegations for a specific governorate.
 * 
 * @param governorateId - The governorate ID (1-24)
 * @returns Array of delegations in the governorate
 */
export function getDelegationsByGovernorate(governorateId: number): Delegation[] {
    return DELEGATIONS.filter(d => d.governorate_id === governorateId);
}
