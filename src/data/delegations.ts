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
    { governorate_id: 1, name_fr: 'El Omrane', name_ar: 'العمران' },
    { governorate_id: 1, name_fr: 'El Omrane Supérieur', name_ar: 'العمران الأعلى' },
    { governorate_id: 1, name_fr: 'Ettahrir', name_ar: 'التحرير' },
    { governorate_id: 1, name_fr: 'El Menzah', name_ar: 'المنزه' },
    { governorate_id: 1, name_fr: 'Cité El Khadra', name_ar: 'حي الخضراء' },
    { governorate_id: 1, name_fr: 'El Ouardia', name_ar: 'الوردية' },
    { governorate_id: 1, name_fr: 'El Kabaria', name_ar: 'الكبارية' },
    { governorate_id: 1, name_fr: 'Sidi Hassine', name_ar: 'سيدي حسين' },
    { governorate_id: 1, name_fr: 'Ezzouhour', name_ar: 'الزهور' },
    { governorate_id: 1, name_fr: 'El Hrairia', name_ar: 'الحرايرية' },
    { governorate_id: 1, name_fr: 'Séjoumi', name_ar: 'سيجومي' },
    { governorate_id: 1, name_fr: 'Jebel Jelloud', name_ar: 'جبل الجلود' },
    { governorate_id: 1, name_fr: 'Sidi El Béchir', name_ar: 'سيدي البشير' },
    { governorate_id: 1, name_fr: 'Bab El Bhar', name_ar: 'باب البحر' },
    { governorate_id: 1, name_fr: 'Bab Souika', name_ar: 'باب سويقة' },

    // Ariana (2)
    { governorate_id: 2, name_fr: 'Ariana Ville', name_ar: 'أريانة المدينة' },
    { governorate_id: 2, name_fr: 'La Soukra', name_ar: 'السكرة' },
    { governorate_id: 2, name_fr: 'Raoued', name_ar: 'رواد' },
    { governorate_id: 2, name_fr: 'Kalâat el-Andalous', name_ar: 'قلعة الأندلس' },
    { governorate_id: 2, name_fr: 'Sidi Thabet', name_ar: 'سيدي ثابت' },
    { governorate_id: 2, name_fr: 'Ettadhamen', name_ar: 'التضامن' },
    { governorate_id: 2, name_fr: 'Mnihla', name_ar: 'المنيهلة' },

    // Ben Arous (3)
    { governorate_id: 3, name_fr: 'Ben Arous', name_ar: 'بن عروس' },
    { governorate_id: 3, name_fr: 'Hammam Lif', name_ar: 'حمام الأنف' },
    { governorate_id: 3, name_fr: 'Hammam Chott', name_ar: 'حمام الشط' },
    { governorate_id: 3, name_fr: 'Radès', name_ar: 'رادس' },
    { governorate_id: 3, name_fr: 'Mégrine', name_ar: 'المقرين' },
    { governorate_id: 3, name_fr: 'Mourouj', name_ar: 'المروج' },
    { governorate_id: 3, name_fr: 'Ezzahra', name_ar: 'الزهراء' },
    { governorate_id: 3, name_fr: 'Bou Mhel El Bassatine', name_ar: 'بومهل البساتين' },
    { governorate_id: 3, name_fr: 'Fouchana', name_ar: 'فوشانة' },
    { governorate_id: 3, name_fr: 'Mornag', name_ar: 'مرناق' },
    { governorate_id: 3, name_fr: 'Nouvelle Medina', name_ar: 'المدينة الجديدة' },
    { governorate_id: 3, name_fr: 'El Mourouj', name_ar: 'المروج' },

    // Manouba (4)
    { governorate_id: 4, name_fr: 'Manouba', name_ar: 'منوبة' },
    { governorate_id: 4, name_fr: 'Den Den', name_ar: 'الدندان' },
    { governorate_id: 4, name_fr: 'Douar Hicher', name_ar: 'دوار هيشر' },
    { governorate_id: 4, name_fr: 'Oued Ellil', name_ar: 'وادي الليل' },
    { governorate_id: 4, name_fr: 'Tebourba', name_ar: 'طبربة' },
    { governorate_id: 4, name_fr: 'El Battan', name_ar: 'البطان' },
    { governorate_id: 4, name_fr: 'Jedaida', name_ar: 'الجديدة' },
    { governorate_id: 4, name_fr: 'Mornaguia', name_ar: 'مرناقية' },
    { governorate_id: 4, name_fr: 'Borj El Amri', name_ar: 'برج العامري' },

    // Nabeul (5)
    { governorate_id: 5, name_fr: 'Nabeul', name_ar: 'نابل' },
    { governorate_id: 5, name_fr: 'Hammamet', name_ar: 'الحمامات' },
    { governorate_id: 5, name_fr: 'Korba', name_ar: 'قربة' },
    { governorate_id: 5, name_fr: 'Kelibia', name_ar: 'قليبية' },
    { governorate_id: 5, name_fr: 'Grombalia', name_ar: 'قرنبالية' },
    { governorate_id: 5, name_fr: 'Soliman', name_ar: 'سليمان' },
    { governorate_id: 5, name_fr: 'Menzel Temime', name_ar: 'منزل تميم' },
    { governorate_id: 5, name_fr: 'Dar Chaabane El Fehri', name_ar: 'دار شعبان الفهري' },
    { governorate_id: 5, name_fr: 'Beni Khiar', name_ar: 'بني خيار' },
    { governorate_id: 5, name_fr: 'El Haouaria', name_ar: 'الهوارية' },
    { governorate_id: 5, name_fr: 'Takelsa', name_ar: 'تاكلسة' },
    { governorate_id: 5, name_fr: 'Bou Argoub', name_ar: 'بوعرقوب' },
    { governorate_id: 5, name_fr: 'El Mida', name_ar: 'الميدة' },
    { governorate_id: 5, name_fr: 'Menzel Bouzelfa', name_ar: 'منزل بوزلفة' },
    { governorate_id: 5, name_fr: 'Beni Khalled', name_ar: 'بني خلاد' },
    { governorate_id: 5, name_fr: 'Hammam Ghezaz', name_ar: 'حمام الغزاز' },

    // Zaghouan (6)
    { governorate_id: 6, name_fr: 'Zaghouan', name_ar: 'زغوان' },
    { governorate_id: 6, name_fr: 'Zriba', name_ar: 'الزريبة' },
    { governorate_id: 6, name_fr: 'Bir Mcherga', name_ar: 'بئر مشارقة' },
    { governorate_id: 6, name_fr: 'El Fahs', name_ar: 'الفحص' },
    { governorate_id: 6, name_fr: 'Nadhour', name_ar: 'الناظور' },
    { governorate_id: 6, name_fr: 'Saouaf', name_ar: 'الصواف' },

    // Bizerte (7)
    { governorate_id: 7, name_fr: 'Bizerte Nord', name_ar: 'بنزرت الشمالية' },
    { governorate_id: 7, name_fr: 'Bizerte Sud', name_ar: 'بنزرت الجنوبية' },
    { governorate_id: 7, name_fr: 'Menzel Bourguiba', name_ar: 'منزل بورقيبة' },
    { governorate_id: 7, name_fr: 'Mateur', name_ar: 'ماطر' },
    { governorate_id: 7, name_fr: 'Ras Jebel', name_ar: 'رأس الجبل' },
    { governorate_id: 7, name_fr: 'Sejnane', name_ar: 'سجنان' },
    { governorate_id: 7, name_fr: 'Joumine', name_ar: 'جومين' },
    { governorate_id: 7, name_fr: 'Ghezala', name_ar: 'غزالة' },
    { governorate_id: 7, name_fr: 'Menzel Jemil', name_ar: 'منزل جميل' },
    { governorate_id: 7, name_fr: 'Tinja', name_ar: 'تينجة' },
    { governorate_id: 7, name_fr: 'Utique', name_ar: 'أوتيك' },
    { governorate_id: 7, name_fr: 'Ghar El Melh', name_ar: 'غار الملح' },
    { governorate_id: 7, name_fr: 'El Alia', name_ar: 'العالية' },

    // Béja (8)
    { governorate_id: 8, name_fr: 'Béja Nord', name_ar: 'باجة الشمالية' },
    { governorate_id: 8, name_fr: 'Béja Sud', name_ar: 'باجة الجنوبية' },
    { governorate_id: 8, name_fr: 'Nefza', name_ar: 'نفزة' },
    { governorate_id: 8, name_fr: 'Medjez El Bab', name_ar: 'مجاز الباب' },
    { governorate_id: 8, name_fr: 'Testour', name_ar: 'تستور' },
    { governorate_id: 8, name_fr: 'Teboursouk', name_ar: 'تبرسق' },
    { governorate_id: 8, name_fr: 'Amdoun', name_ar: 'عمدون' },
    { governorate_id: 8, name_fr: 'Goubellat', name_ar: 'قبلاط' },
    { governorate_id: 8, name_fr: 'Thibar', name_ar: 'تيبار' },

    // Jendouba (9)
    { governorate_id: 9, name_fr: 'Jendouba', name_ar: 'جندوبة' },
    { governorate_id: 9, name_fr: 'Jendouba Nord', name_ar: 'جندوبة الشمالية' },
    { governorate_id: 9, name_fr: 'Bou Salem', name_ar: 'بوسالم' },
    { governorate_id: 9, name_fr: 'Tabarka', name_ar: 'طبرقة' },
    { governorate_id: 9, name_fr: 'Ain Draham', name_ar: 'عين دراهم' },
    { governorate_id: 9, name_fr: 'Fernana', name_ar: 'فرنانة' },
    { governorate_id: 9, name_fr: 'Ghardimaou', name_ar: 'غار الدماء' },
    { governorate_id: 9, name_fr: 'Oued Meliz', name_ar: 'وادي مليز' },
    { governorate_id: 9, name_fr: 'Balta Bou Aouane', name_ar: 'بلطة بوعوان' },

    // Le Kef (10)
    { governorate_id: 10, name_fr: 'Le Kef Ouest', name_ar: 'الكاف الغربية' },
    { governorate_id: 10, name_fr: 'Le Kef Est', name_ar: 'الكاف الشرقية' },
    { governorate_id: 10, name_fr: 'Nebeur', name_ar: 'نبر' },
    { governorate_id: 10, name_fr: 'Sakiet Sidi Youssef', name_ar: 'ساقية سيدي يوسف' },
    { governorate_id: 10, name_fr: 'Tajerouine', name_ar: 'تاجروين' },
    { governorate_id: 10, name_fr: 'Kalaat Senan', name_ar: 'قلعة سنان' },
    { governorate_id: 10, name_fr: 'Kalaat Khasba', name_ar: 'قلعة خصبة' },
    { governorate_id: 10, name_fr: 'Jerissa', name_ar: 'الجريصة' },
    { governorate_id: 10, name_fr: 'Ksour', name_ar: 'القصور' },
    { governorate_id: 10, name_fr: 'Dahmani', name_ar: 'الدهماني' },
    { governorate_id: 10, name_fr: 'Sers', name_ar: 'السرس' },

    // Siliana (11)
    { governorate_id: 11, name_fr: 'Siliana Nord', name_ar: 'سليانة الشمالية' },
    { governorate_id: 11, name_fr: 'Siliana Sud', name_ar: 'سليانة الجنوبية' },
    { governorate_id: 11, name_fr: 'Bou Arada', name_ar: 'بوعرادة' },
    { governorate_id: 11, name_fr: 'Gaafour', name_ar: 'قعفور' },
    { governorate_id: 11, name_fr: 'El Krib', name_ar: 'الكريب' },
    { governorate_id: 11, name_fr: 'Sidi Bou Rouis', name_ar: 'سيدي بورويس' },
    { governorate_id: 11, name_fr: 'Makthar', name_ar: 'مكثر' },
    { governorate_id: 11, name_fr: 'Rouhia', name_ar: 'الروحية' },
    { governorate_id: 11, name_fr: 'Kesra', name_ar: 'كسرى' },
    { governorate_id: 11, name_fr: 'Bargou', name_ar: 'برقو' },
    { governorate_id: 11, name_fr: 'El Aroussa', name_ar: 'العروسة' },

    // Sousse (12)
    { governorate_id: 12, name_fr: 'Sousse Ville', name_ar: 'مدينة سوسة' },
    { governorate_id: 12, name_fr: 'Sousse Jawhara', name_ar: 'سوسة الجوهرة' },
    { governorate_id: 12, name_fr: 'Sousse Riadh', name_ar: 'سوسة الرياض' },
    { governorate_id: 12, name_fr: 'Sousse Sidi Abdelhamid', name_ar: 'سوسة سيدي عبد الحميد' },
    { governorate_id: 12, name_fr: 'Hammam Sousse', name_ar: 'حمام سوسة' },
    { governorate_id: 12, name_fr: 'Akouda', name_ar: 'عكودة' },
    { governorate_id: 12, name_fr: 'Kalâa Kebira', name_ar: 'القلعة الكبرى' },
    { governorate_id: 12, name_fr: 'Kalâa Seghira', name_ar: 'القلعة الصغرى' },
    { governorate_id: 12, name_fr: 'Sidi Bou Ali', name_ar: 'سيدي بوعلي' },
    { governorate_id: 12, name_fr: 'Hergla', name_ar: 'هرقلة' },
    { governorate_id: 12, name_fr: 'Enfida', name_ar: 'النفيضة' },
    { governorate_id: 12, name_fr: 'Bouficha', name_ar: 'بوفيشة' },
    { governorate_id: 12, name_fr: 'Kondar', name_ar: 'كندار' },
    { governorate_id: 12, name_fr: 'Sidi El Hani', name_ar: 'سيدي الهاني' },
    { governorate_id: 12, name_fr: 'Msaken', name_ar: 'مساكن' },
    { governorate_id: 12, name_fr: 'Zaouia Ksiba Thrayet', name_ar: 'الزاوية قصيبة الثريات' },

    // Monastir (13)
    { governorate_id: 13, name_fr: 'Monastir', name_ar: 'المنستير' },
    { governorate_id: 13, name_fr: 'Ouerdanine', name_ar: 'الوردانين' },
    { governorate_id: 13, name_fr: 'Sahline', name_ar: 'ساحلين' },
    { governorate_id: 13, name_fr: 'Zeramdine', name_ar: 'زرمدين' },
    { governorate_id: 13, name_fr: 'Beni Hassen', name_ar: 'بني حسان' },
    { governorate_id: 13, name_fr: 'Jemmal', name_ar: 'جمال' },
    { governorate_id: 13, name_fr: 'Bembla', name_ar: 'بنبلة' },
    { governorate_id: 13, name_fr: 'Moknine', name_ar: 'المكنين' },
    { governorate_id: 13, name_fr: 'Bekalta', name_ar: 'البقالطة' },
    { governorate_id: 13, name_fr: 'Teboulba', name_ar: 'طبلبة' },
    { governorate_id: 13, name_fr: 'Ksar Hellal', name_ar: 'قصر هلال' },
    { governorate_id: 13, name_fr: 'Ksibet El Mediouni', name_ar: 'قصيبة المديوني' },
    { governorate_id: 13, name_fr: 'Sayada Lamta Bou Hajar', name_ar: 'صيادة لمطة بوحجر' },

    // Mahdia (14)
    { governorate_id: 14, name_fr: 'Mahdia', name_ar: 'المهدية' },
    { governorate_id: 14, name_fr: 'Bou Merdes', name_ar: 'بومرداس' },
    { governorate_id: 14, name_fr: 'Ouled Chamekh', name_ar: 'أولاد الشامخ' },
    { governorate_id: 14, name_fr: 'Chorbane', name_ar: 'شربان' },
    { governorate_id: 14, name_fr: 'Hebira', name_ar: 'هبيرة' },
    { governorate_id: 14, name_fr: 'Essouassi', name_ar: 'السواسي' },
    { governorate_id: 14, name_fr: 'El Jem', name_ar: 'الجم' },
    { governorate_id: 14, name_fr: 'Chebba', name_ar: 'الشابة' },
    { governorate_id: 14, name_fr: 'Melloulèche', name_ar: 'ملولش' },
    { governorate_id: 14, name_fr: 'Sidi Alouane', name_ar: 'سيدي علوان' },
    { governorate_id: 14, name_fr: 'Ksour Essef', name_ar: 'قصور الساف' },

    // Sfax (15)
    { governorate_id: 15, name_fr: 'Sfax Ville', name_ar: 'مدينة صفاقس' },
    { governorate_id: 15, name_fr: 'Sfax Ouest', name_ar: 'صفاقس الغربية' },
    { governorate_id: 15, name_fr: 'Sfax Sud', name_ar: 'صفاقس الجنوبية' },
    { governorate_id: 15, name_fr: 'Sakiet Ezzit', name_ar: 'ساقية الزيت' },
    { governorate_id: 15, name_fr: 'Sakiet Eddaier', name_ar: 'ساقية الداير' },
    { governorate_id: 15, name_fr: 'Thyna', name_ar: 'طينة' },
    { governorate_id: 15, name_fr: 'Agareb', name_ar: 'العقارب' },
    { governorate_id: 15, name_fr: 'Jebiniana', name_ar: 'جبنيانة' },
    { governorate_id: 15, name_fr: 'El Amra', name_ar: 'العامرة' },
    { governorate_id: 15, name_fr: 'El Hencha', name_ar: 'الحنشة' },
    { governorate_id: 15, name_fr: 'Menzel Chaker', name_ar: 'منزل شاكر' },
    { governorate_id: 15, name_fr: 'Ghraiba', name_ar: 'الغريبة' },
    { governorate_id: 15, name_fr: 'Bir Ali Ben Khalifa', name_ar: 'بئر علي بن خليفة' },
    { governorate_id: 15, name_fr: 'Skhira', name_ar: 'الصخيرة' },
    { governorate_id: 15, name_fr: 'Mahres', name_ar: 'المحرس' },
    { governorate_id: 15, name_fr: 'Kerkennah', name_ar: 'قرقنة' },

    // Kairouan (16)
    { governorate_id: 16, name_fr: 'Kairouan Nord', name_ar: 'القيروان الشمالية' },
    { governorate_id: 16, name_fr: 'Kairouan Sud', name_ar: 'القيروان الجنوبية' },
    { governorate_id: 16, name_fr: 'Echebika', name_ar: 'الشبيكة' },
    { governorate_id: 16, name_fr: 'Sbikha', name_ar: 'السبيخة' },
    { governorate_id: 16, name_fr: 'Oueslatia', name_ar: 'الوسلاتية' },
    { governorate_id: 16, name_fr: 'Haffouz', name_ar: 'حفوز' },
    { governorate_id: 16, name_fr: 'Ala', name_ar: 'العلا' },
    { governorate_id: 16, name_fr: 'Hajeb El Ayoun', name_ar: 'حاجب العيون' },
    { governorate_id: 16, name_fr: 'Nasrallah', name_ar: 'نصر الله' },
    { governorate_id: 16, name_fr: 'Cherarda', name_ar: 'الشراردة' },
    { governorate_id: 16, name_fr: 'Bou Hajla', name_ar: 'بوحجلة' },

    // Kasserine (17)
    { governorate_id: 17, name_fr: 'Kasserine Nord', name_ar: 'القصرين الشمالية' },
    { governorate_id: 17, name_fr: 'Kasserine Sud', name_ar: 'القصرين الجنوبية' },
    { governorate_id: 17, name_fr: 'Ezzouhour', name_ar: 'الزهور' },
    { governorate_id: 17, name_fr: 'Hassi El Ferid', name_ar: 'حاسي الفريد' },
    { governorate_id: 17, name_fr: 'Sbeitla', name_ar: 'سبيطلة' },
    { governorate_id: 17, name_fr: 'Sbiba', name_ar: 'سبيبة' },
    { governorate_id: 17, name_fr: 'Jedeliane', name_ar: 'جدليان' },
    { governorate_id: 17, name_fr: 'El Ayoun', name_ar: 'العيون' },
    { governorate_id: 17, name_fr: 'Thala', name_ar: 'تالة' },
    { governorate_id: 17, name_fr: 'Hidra', name_ar: 'هيدرة' },
    { governorate_id: 17, name_fr: 'Foussana', name_ar: 'فوسانة' },
    { governorate_id: 17, name_fr: 'Feriana', name_ar: 'فريانة' },
    { governorate_id: 17, name_fr: 'Majel Bel Abbes', name_ar: 'ماجل بلعباس' },

    // Sidi Bouzid (18)
    { governorate_id: 18, name_fr: 'Sidi Bouzid Ouest', name_ar: 'سيدي بوزيد الغربية' },
    { governorate_id: 18, name_fr: 'Sidi Bouzid Est', name_ar: 'سيدي بوزيد الشرقية' },
    { governorate_id: 18, name_fr: 'Jilma', name_ar: 'جلمة' },
    { governorate_id: 18, name_fr: 'Cebalet Ouled Asker', name_ar: 'السبالة أولاد عسكر' },
    { governorate_id: 18, name_fr: 'Bir El Hafey', name_ar: 'بئر الحفي' },
    { governorate_id: 18, name_fr: 'Sidi Ali Ben Aoun', name_ar: 'سيدي علي بن عون' },
    { governorate_id: 18, name_fr: 'Menzel Bouzaiane', name_ar: 'منزل بوزيان' },
    { governorate_id: 18, name_fr: 'Meknassy', name_ar: 'المكناسي' },
    { governorate_id: 18, name_fr: 'Souk Jedid', name_ar: 'سوق الجديد' },
    { governorate_id: 18, name_fr: 'Mezzouna', name_ar: 'المزونة' },
    { governorate_id: 18, name_fr: 'Regueb', name_ar: 'الرقاب' },
    { governorate_id: 18, name_fr: 'Ouled Haffouz', name_ar: 'أولاد حفوز' },

    // Gabès (19)
    { governorate_id: 19, name_fr: 'Gabès Ville', name_ar: 'مدينة قابس' },
    { governorate_id: 19, name_fr: 'Gabès Sud', name_ar: 'قابس الجنوبية' },
    { governorate_id: 19, name_fr: 'Gabès Ouest', name_ar: 'قابس الغربية' },
    { governorate_id: 19, name_fr: 'El Hamma', name_ar: 'الحامة' },
    { governorate_id: 19, name_fr: 'Matmata', name_ar: 'مطماطة' },
    { governorate_id: 19, name_fr: 'Nouvelle Matmata', name_ar: 'مطماطة الجديدة' },
    { governorate_id: 19, name_fr: 'Mareth', name_ar: 'مارث' },
    { governorate_id: 19, name_fr: 'Ghanouch', name_ar: 'غنوش' },
    { governorate_id: 19, name_fr: 'Metouia', name_ar: 'المطوية' },
    { governorate_id: 19, name_fr: 'Menzel El Habib', name_ar: 'منزل الحبيب' },

    // Médenine (20)
    { governorate_id: 20, name_fr: 'Médenine Nord', name_ar: 'مدنين الشمالية' },
    { governorate_id: 20, name_fr: 'Médenine Sud', name_ar: 'مدنين الجنوبية' },
    { governorate_id: 20, name_fr: 'Beni Khedache', name_ar: 'بني خداش' },
    { governorate_id: 20, name_fr: 'Ben Guerdane', name_ar: 'بن قردان' },
    { governorate_id: 20, name_fr: 'Zarzis', name_ar: 'جرجيس' },
    { governorate_id: 20, name_fr: 'Djerba Houmt Souk', name_ar: 'جربة حومة السوق' },
    { governorate_id: 20, name_fr: 'Djerba Midoun', name_ar: 'جربة ميدون' },
    { governorate_id: 20, name_fr: 'Djerba Ajim', name_ar: 'جربة أجيم' },
    { governorate_id: 20, name_fr: 'Sidi Makhlouf', name_ar: 'سيدي مخلوف' },

    // Tataouine (21)
    { governorate_id: 21, name_fr: 'Tataouine Nord', name_ar: 'تطاوين الشمالية' },
    { governorate_id: 21, name_fr: 'Tataouine Sud', name_ar: 'تطاوين الجنوبية' },
    { governorate_id: 21, name_fr: 'Smar', name_ar: 'الصمار' },
    { governorate_id: 21, name_fr: 'Bir Lahmar', name_ar: 'بئر الأحمر' },
    { governorate_id: 21, name_fr: 'Ghomrassen', name_ar: 'غمراسن' },
    { governorate_id: 21, name_fr: 'Dhehiba', name_ar: 'ذهيبة' },
    { governorate_id: 21, name_fr: 'Remada', name_ar: 'رمادة' },

    // Gafsa (22)
    { governorate_id: 22, name_fr: 'Gafsa Nord', name_ar: 'قفصة الشمالية' },
    { governorate_id: 22, name_fr: 'Gafsa Sud', name_ar: 'قفصة الجنوبية' },
    { governorate_id: 22, name_fr: 'Sidi Aich', name_ar: 'سيدي عيش' },
    { governorate_id: 22, name_fr: 'El Ksar', name_ar: 'القصر' },
    { governorate_id: 22, name_fr: 'Oum El Araies', name_ar: 'أم العرائس' },
    { governorate_id: 22, name_fr: 'Redeyef', name_ar: 'الرديف' },
    { governorate_id: 22, name_fr: 'Metlaoui', name_ar: 'المتلوي' },
    { governorate_id: 22, name_fr: 'Mdhilla', name_ar: 'المظيلة' },
    { governorate_id: 22, name_fr: 'El Guettar', name_ar: 'القطار' },
    { governorate_id: 22, name_fr: 'Belkhir', name_ar: 'بلخير' },
    { governorate_id: 22, name_fr: 'Sned', name_ar: 'السند' },

    // Tozeur (23)
    { governorate_id: 23, name_fr: 'Tozeur', name_ar: 'توزر' },
    { governorate_id: 23, name_fr: 'Degache', name_ar: 'دقاش' },
    { governorate_id: 23, name_fr: 'Tameghza', name_ar: 'تمغزة' },
    { governorate_id: 23, name_fr: 'Nefta', name_ar: 'نفطة' },
    { governorate_id: 23, name_fr: 'Hazoua', name_ar: 'حزوة' },

    // Kebili (24)
    { governorate_id: 24, name_fr: 'Kebili Nord', name_ar: 'قبلي الشمالية' },
    { governorate_id: 24, name_fr: 'Kebili Sud', name_ar: 'قبلي الجنوبية' },
    { governorate_id: 24, name_fr: 'Souk Lahad', name_ar: 'سوق الأحد' },
    { governorate_id: 24, name_fr: 'Douz Nord', name_ar: 'دوز الشمالية' },
    { governorate_id: 24, name_fr: 'Douz Sud', name_ar: 'دوز الجنوبية' },
    { governorate_id: 24, name_fr: 'Faouar', name_ar: 'الفوار' }
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
