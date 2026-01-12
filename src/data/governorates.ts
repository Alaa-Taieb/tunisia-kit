/**
 * All 24 Tunisian Governorates with French and Arabic names.
 * IDs 1-24 match the governorate_id used in DELEGATIONS.
 */
export interface Governorate {
    id: number;
    name_fr: string;
    name_ar: string;
}

export const GOVERNORATES: Governorate[] = [
    { id: 1, name_fr: 'Tunis', name_ar: 'تونس' },
    { id: 2, name_fr: 'Ariana', name_ar: 'أريانة' },
    { id: 3, name_fr: 'Ben Arous', name_ar: 'بن عروس' },
    { id: 4, name_fr: 'Manouba', name_ar: 'منوبة' },
    { id: 5, name_fr: 'Nabeul', name_ar: 'نابل' },
    { id: 6, name_fr: 'Zaghouan', name_ar: 'زغوان' },
    { id: 7, name_fr: 'Bizerte', name_ar: 'بنزرت' },
    { id: 8, name_fr: 'Béja', name_ar: 'باجة' },
    { id: 9, name_fr: 'Jendouba', name_ar: 'جندوبة' },
    { id: 10, name_fr: 'Le Kef', name_ar: 'الكاف' },
    { id: 11, name_fr: 'Siliana', name_ar: 'سليانة' },
    { id: 12, name_fr: 'Sousse', name_ar: 'سوسة' },
    { id: 13, name_fr: 'Monastir', name_ar: 'المنستير' },
    { id: 14, name_fr: 'Mahdia', name_ar: 'المهدية' },
    { id: 15, name_fr: 'Sfax', name_ar: 'صفاقس' },
    { id: 16, name_fr: 'Kairouan', name_ar: 'القيروان' },
    { id: 17, name_fr: 'Kasserine', name_ar: 'القصرين' },
    { id: 18, name_fr: 'Sidi Bouzid', name_ar: 'سيدي بوزيد' },
    { id: 19, name_fr: 'Gabès', name_ar: 'قابس' },
    { id: 20, name_fr: 'Médenine', name_ar: 'مدنين' },
    { id: 21, name_fr: 'Tataouine', name_ar: 'تطاوين' },
    { id: 22, name_fr: 'Gafsa', name_ar: 'قفصة' },
    { id: 23, name_fr: 'Tozeur', name_ar: 'توزر' },
    { id: 24, name_fr: 'Kebili', name_ar: 'قبلي' }
];
