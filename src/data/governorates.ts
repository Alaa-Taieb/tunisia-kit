/**
 * All 24 Tunisian Governorates with French and Arabic names.
 */
export interface Governorate {
    id: number;
    name_fr: string;
    name_ar: string;
}

export const GOVERNORATES: Governorate[] = [
    { id: 11, name_fr: 'Tunis', name_ar: 'تونس' },
    { id: 12, name_fr: 'Ariana', name_ar: 'أريانة' },
    { id: 13, name_fr: 'Ben Arous', name_ar: 'بن عروس' },
    { id: 14, name_fr: 'Manouba', name_ar: 'منوبة' },
    { id: 21, name_fr: 'Nabeul', name_ar: 'نابل' },
    { id: 22, name_fr: 'Zaghouan', name_ar: 'زغوان' },
    { id: 23, name_fr: 'Bizerte', name_ar: 'بنزرت' },
    { id: 31, name_fr: 'Béja', name_ar: 'باجة' },
    { id: 32, name_fr: 'Jendouba', name_ar: 'جندوبة' },
    { id: 33, name_fr: 'Le Kef', name_ar: 'الكاف' },
    { id: 34, name_fr: 'Siliana', name_ar: 'سليانة' },
    { id: 41, name_fr: 'Sousse', name_ar: 'سوسة' },
    { id: 42, name_fr: 'Monastir', name_ar: 'المنستير' },
    { id: 43, name_fr: 'Mahdia', name_ar: 'المهدية' },
    { id: 51, name_fr: 'Kairouan', name_ar: 'القيروان' },
    { id: 52, name_fr: 'Kasserine', name_ar: 'القصرين' },
    { id: 53, name_fr: 'Sidi Bouzid', name_ar: 'سيدي بوزيد' },
    { id: 61, name_fr: 'Sfax', name_ar: 'صفاقس' },
    { id: 71, name_fr: 'Gafsa', name_ar: 'قفصة' },
    { id: 72, name_fr: 'Tozeur', name_ar: 'توزر' },
    { id: 73, name_fr: 'Kebili', name_ar: 'قبلي' },
    { id: 81, name_fr: 'Gabès', name_ar: 'قابس' },
    { id: 82, name_fr: 'Médenine', name_ar: 'مدنين' },
    { id: 83, name_fr: 'Tataouine', name_ar: 'تطاوين' }
];
