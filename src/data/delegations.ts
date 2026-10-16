import { freezeRecords } from '../internal/freeze.js';
/**
 * Tunisian administrative delegations (Délégations), checked against the
 * Institut National de la Statistique 2024 census list (279 delegations).
 * Each governorate is divided into multiple delegations.
 */
import { GOVERNORATES, type Governorate } from './governorates.js';

export interface Delegation {
  readonly id: string;
  readonly governorate_id: number;
  readonly name_fr: string;
  readonly name_ar: string;
  readonly aliases?: readonly string[];
}

export const DELEGATIONS = freezeRecords<Delegation>([
  // Tunis (1)
  { id: 'tn-01-tunis-ville', governorate_id: 1, name_fr: 'Tunis Ville', name_ar: 'مدينة تونس' },
  { id: 'tn-01-le-bardo', governorate_id: 1, name_fr: 'Le Bardo', name_ar: 'باردو' },
  { id: 'tn-01-la-goulette', governorate_id: 1, name_fr: 'La Goulette', name_ar: 'حلق الوادي' },
  {
    id: 'tn-01-carthage',
    governorate_id: 1,
    name_fr: 'Carthage',
    name_ar: 'قرطاج',
    // Sidi Bou Said is a sector (imada) of Carthage, not a delegation.
    aliases: ['Sidi Bou Said', 'سيدي بوسعيد']
  },
  { id: 'tn-01-la-marsa', governorate_id: 1, name_fr: 'La Marsa', name_ar: 'المرسى' },
  { id: 'tn-01-el-omrane', governorate_id: 1, name_fr: 'El Omrane', name_ar: 'العمران' },
  {
    id: 'tn-01-el-omrane-superieur',
    governorate_id: 1,
    name_fr: 'El Omrane Supérieur',
    name_ar: 'العمران الأعلى'
  },
  { id: 'tn-01-ettahrir', governorate_id: 1, name_fr: 'Ettahrir', name_ar: 'التحرير' },
  { id: 'tn-01-el-menzah', governorate_id: 1, name_fr: 'El Menzah', name_ar: 'المنزه' },
  {
    id: 'tn-01-cite-el-khadra',
    governorate_id: 1,
    name_fr: 'Cité El Khadra',
    name_ar: 'حي الخضراء'
  },
  { id: 'tn-01-el-ouardia', governorate_id: 1, name_fr: 'El Ouardia', name_ar: 'الوردية' },
  { id: 'tn-01-el-kabaria', governorate_id: 1, name_fr: 'El Kabaria', name_ar: 'الكبارية' },
  { id: 'tn-01-sidi-hassine', governorate_id: 1, name_fr: 'Sidi Hassine', name_ar: 'سيدي حسين' },
  { id: 'tn-01-ezzouhour', governorate_id: 1, name_fr: 'Ezzouhour', name_ar: 'الزهور' },
  { id: 'tn-01-el-hrairia', governorate_id: 1, name_fr: 'El Hrairia', name_ar: 'الحرايرية' },
  { id: 'tn-01-sejoumi', governorate_id: 1, name_fr: 'Séjoumi', name_ar: 'سيجومي' },
  { id: 'tn-01-jebel-jelloud', governorate_id: 1, name_fr: 'Jebel Jelloud', name_ar: 'جبل الجلود' },
  {
    id: 'tn-01-sidi-el-bechir',
    governorate_id: 1,
    name_fr: 'Sidi El Béchir',
    name_ar: 'سيدي البشير'
  },
  { id: 'tn-01-bab-el-bhar', governorate_id: 1, name_fr: 'Bab El Bhar', name_ar: 'باب البحر' },
  { id: 'tn-01-bab-souika', governorate_id: 1, name_fr: 'Bab Souika', name_ar: 'باب سويقة' },
  { id: 'tn-01-le-kram', governorate_id: 1, name_fr: 'Le Kram', name_ar: 'الكرم' },

  // Ariana (2)
  {
    id: 'tn-02-ariana-ville',
    governorate_id: 2,
    name_fr: 'Ariana Ville',
    name_ar: 'أريانة المدينة'
  },
  { id: 'tn-02-la-soukra', governorate_id: 2, name_fr: 'La Soukra', name_ar: 'السكرة' },
  { id: 'tn-02-raoued', governorate_id: 2, name_fr: 'Raoued', name_ar: 'رواد' },
  {
    id: 'tn-02-kalaat-el-andalous',
    governorate_id: 2,
    name_fr: 'Kalâat el-Andalous',
    name_ar: 'قلعة الأندلس'
  },
  { id: 'tn-02-sidi-thabet', governorate_id: 2, name_fr: 'Sidi Thabet', name_ar: 'سيدي ثابت' },
  { id: 'tn-02-ettadhamen', governorate_id: 2, name_fr: 'Ettadhamen', name_ar: 'التضامن' },
  { id: 'tn-02-mnihla', governorate_id: 2, name_fr: 'Mnihla', name_ar: 'المنيهلة' },

  // Ben Arous (3)
  { id: 'tn-03-ben-arous', governorate_id: 3, name_fr: 'Ben Arous', name_ar: 'بن عروس' },
  { id: 'tn-03-hammam-lif', governorate_id: 3, name_fr: 'Hammam Lif', name_ar: 'حمام الأنف' },
  { id: 'tn-03-hammam-chott', governorate_id: 3, name_fr: 'Hammam Chott', name_ar: 'حمام الشط' },
  { id: 'tn-03-rades', governorate_id: 3, name_fr: 'Radès', name_ar: 'رادس' },
  { id: 'tn-03-megrine', governorate_id: 3, name_fr: 'Mégrine', name_ar: 'المقرين' },
  { id: 'tn-03-ezzahra', governorate_id: 3, name_fr: 'Ezzahra', name_ar: 'الزهراء' },
  {
    id: 'tn-03-bou-mhel-el-bassatine',
    governorate_id: 3,
    name_fr: 'Bou Mhel El Bassatine',
    name_ar: 'بومهل البساتين'
  },
  { id: 'tn-03-fouchana', governorate_id: 3, name_fr: 'Fouchana', name_ar: 'فوشانة' },
  { id: 'tn-03-mornag', governorate_id: 3, name_fr: 'Mornag', name_ar: 'مرناق' },
  {
    id: 'tn-03-nouvelle-medina',
    governorate_id: 3,
    name_fr: 'Nouvelle Medina',
    name_ar: 'المدينة الجديدة'
  },
  {
    id: 'tn-03-el-mourouj',
    governorate_id: 3,
    name_fr: 'El Mourouj',
    name_ar: 'المروج',
    aliases: ['Mourouj']
  },
  { id: 'tn-03-mohamedia', governorate_id: 3, name_fr: 'Mohamedia', name_ar: 'المحمدية' },

  // Manouba (4)
  {
    id: 'tn-04-manouba',
    governorate_id: 4,
    name_fr: 'Manouba',
    name_ar: 'منوبة',
    // Den Den is a sector (imada) of Manouba, not a delegation.
    aliases: ['Den Den', 'الدندان']
  },
  { id: 'tn-04-douar-hicher', governorate_id: 4, name_fr: 'Douar Hicher', name_ar: 'دوار هيشر' },
  { id: 'tn-04-oued-ellil', governorate_id: 4, name_fr: 'Oued Ellil', name_ar: 'وادي الليل' },
  { id: 'tn-04-tebourba', governorate_id: 4, name_fr: 'Tebourba', name_ar: 'طبربة' },
  { id: 'tn-04-el-battan', governorate_id: 4, name_fr: 'El Battan', name_ar: 'البطان' },
  { id: 'tn-04-jedaida', governorate_id: 4, name_fr: 'Jedaida', name_ar: 'الجديدة' },
  { id: 'tn-04-mornaguia', governorate_id: 4, name_fr: 'Mornaguia', name_ar: 'مرناقية' },
  { id: 'tn-04-borj-el-amri', governorate_id: 4, name_fr: 'Borj El Amri', name_ar: 'برج العامري' },

  // Nabeul (5)
  { id: 'tn-05-nabeul', governorate_id: 5, name_fr: 'Nabeul', name_ar: 'نابل' },
  { id: 'tn-05-hammamet', governorate_id: 5, name_fr: 'Hammamet', name_ar: 'الحمامات' },
  { id: 'tn-05-korba', governorate_id: 5, name_fr: 'Korba', name_ar: 'قربة' },
  { id: 'tn-05-kelibia', governorate_id: 5, name_fr: 'Kelibia', name_ar: 'قليبية' },
  { id: 'tn-05-grombalia', governorate_id: 5, name_fr: 'Grombalia', name_ar: 'قرنبالية' },
  { id: 'tn-05-soliman', governorate_id: 5, name_fr: 'Soliman', name_ar: 'سليمان' },
  { id: 'tn-05-menzel-temime', governorate_id: 5, name_fr: 'Menzel Temime', name_ar: 'منزل تميم' },
  {
    id: 'tn-05-dar-chaabane-el-fehri',
    governorate_id: 5,
    name_fr: 'Dar Chaabane El Fehri',
    name_ar: 'دار شعبان الفهري'
  },
  { id: 'tn-05-beni-khiar', governorate_id: 5, name_fr: 'Beni Khiar', name_ar: 'بني خيار' },
  { id: 'tn-05-el-haouaria', governorate_id: 5, name_fr: 'El Haouaria', name_ar: 'الهوارية' },
  { id: 'tn-05-takelsa', governorate_id: 5, name_fr: 'Takelsa', name_ar: 'تاكلسة' },
  { id: 'tn-05-bou-argoub', governorate_id: 5, name_fr: 'Bou Argoub', name_ar: 'بوعرقوب' },
  { id: 'tn-05-el-mida', governorate_id: 5, name_fr: 'El Mida', name_ar: 'الميدة' },
  {
    id: 'tn-05-menzel-bouzelfa',
    governorate_id: 5,
    name_fr: 'Menzel Bouzelfa',
    name_ar: 'منزل بوزلفة'
  },
  { id: 'tn-05-beni-khalled', governorate_id: 5, name_fr: 'Beni Khalled', name_ar: 'بني خلاد' },
  {
    id: 'tn-05-hammam-ghezaz',
    governorate_id: 5,
    name_fr: 'Hammam Ghezaz',
    name_ar: 'حمام الأغزاز'
  },

  // Zaghouan (6)
  { id: 'tn-06-zaghouan', governorate_id: 6, name_fr: 'Zaghouan', name_ar: 'زغوان' },
  { id: 'tn-06-zriba', governorate_id: 6, name_fr: 'Zriba', name_ar: 'الزريبة' },
  { id: 'tn-06-bir-mcherga', governorate_id: 6, name_fr: 'Bir Mcherga', name_ar: 'بئر مشارقة' },
  { id: 'tn-06-el-fahs', governorate_id: 6, name_fr: 'El Fahs', name_ar: 'الفحص' },
  { id: 'tn-06-nadhour', governorate_id: 6, name_fr: 'Nadhour', name_ar: 'الناظور' },
  { id: 'tn-06-saouaf', governorate_id: 6, name_fr: 'Saouaf', name_ar: 'الصواف' },

  // Bizerte (7)
  {
    id: 'tn-07-bizerte-nord',
    governorate_id: 7,
    name_fr: 'Bizerte Nord',
    name_ar: 'بنزرت الشمالية'
  },
  { id: 'tn-07-bizerte-sud', governorate_id: 7, name_fr: 'Bizerte Sud', name_ar: 'بنزرت الجنوبية' },
  {
    id: 'tn-07-menzel-bourguiba',
    governorate_id: 7,
    name_fr: 'Menzel Bourguiba',
    name_ar: 'منزل بورقيبة'
  },
  { id: 'tn-07-mateur', governorate_id: 7, name_fr: 'Mateur', name_ar: 'ماطر' },
  { id: 'tn-07-ras-jebel', governorate_id: 7, name_fr: 'Ras Jebel', name_ar: 'رأس الجبل' },
  { id: 'tn-07-sejnane', governorate_id: 7, name_fr: 'Sejnane', name_ar: 'سجنان' },
  { id: 'tn-07-joumine', governorate_id: 7, name_fr: 'Joumine', name_ar: 'جومين' },
  { id: 'tn-07-ghezala', governorate_id: 7, name_fr: 'Ghezala', name_ar: 'غزالة' },
  { id: 'tn-07-menzel-jemil', governorate_id: 7, name_fr: 'Menzel Jemil', name_ar: 'منزل جميل' },
  { id: 'tn-07-tinja', governorate_id: 7, name_fr: 'Tinja', name_ar: 'تينجة' },
  { id: 'tn-07-utique', governorate_id: 7, name_fr: 'Utique', name_ar: 'أوتيك' },
  { id: 'tn-07-ghar-el-melh', governorate_id: 7, name_fr: 'Ghar El Melh', name_ar: 'غار الملح' },
  { id: 'tn-07-el-alia', governorate_id: 7, name_fr: 'El Alia', name_ar: 'العالية' },
  { id: 'tn-07-zarzouna', governorate_id: 7, name_fr: 'Zarzouna', name_ar: 'جرزونة' },

  // Béja (8)
  { id: 'tn-08-beja-nord', governorate_id: 8, name_fr: 'Béja Nord', name_ar: 'باجة الشمالية' },
  { id: 'tn-08-beja-sud', governorate_id: 8, name_fr: 'Béja Sud', name_ar: 'باجة الجنوبية' },
  { id: 'tn-08-nefza', governorate_id: 8, name_fr: 'Nefza', name_ar: 'نفزة' },
  { id: 'tn-08-medjez-el-bab', governorate_id: 8, name_fr: 'Medjez El Bab', name_ar: 'مجاز الباب' },
  { id: 'tn-08-testour', governorate_id: 8, name_fr: 'Testour', name_ar: 'تستور' },
  { id: 'tn-08-teboursouk', governorate_id: 8, name_fr: 'Teboursouk', name_ar: 'تبرسق' },
  { id: 'tn-08-amdoun', governorate_id: 8, name_fr: 'Amdoun', name_ar: 'عمدون' },
  { id: 'tn-08-goubellat', governorate_id: 8, name_fr: 'Goubellat', name_ar: 'قبلاط' },
  { id: 'tn-08-thibar', governorate_id: 8, name_fr: 'Thibar', name_ar: 'تيبار' },

  // Jendouba (9)
  { id: 'tn-09-jendouba', governorate_id: 9, name_fr: 'Jendouba', name_ar: 'جندوبة' },
  {
    id: 'tn-09-jendouba-nord',
    governorate_id: 9,
    name_fr: 'Jendouba Nord',
    name_ar: 'جندوبة الشمالية'
  },
  { id: 'tn-09-bou-salem', governorate_id: 9, name_fr: 'Bou Salem', name_ar: 'بوسالم' },
  { id: 'tn-09-tabarka', governorate_id: 9, name_fr: 'Tabarka', name_ar: 'طبرقة' },
  { id: 'tn-09-ain-draham', governorate_id: 9, name_fr: 'Ain Draham', name_ar: 'عين دراهم' },
  { id: 'tn-09-fernana', governorate_id: 9, name_fr: 'Fernana', name_ar: 'فرنانة' },
  { id: 'tn-09-ghardimaou', governorate_id: 9, name_fr: 'Ghardimaou', name_ar: 'غار الدماء' },
  { id: 'tn-09-oued-meliz', governorate_id: 9, name_fr: 'Oued Meliz', name_ar: 'وادي مليز' },
  {
    id: 'tn-09-balta-bou-aouane',
    governorate_id: 9,
    name_fr: 'Balta Bou Aouane',
    name_ar: 'بلطة بوعوان'
  },

  // Le Kef (10)
  {
    id: 'tn-10-le-kef-ouest',
    governorate_id: 10,
    name_fr: 'Le Kef Ouest',
    name_ar: 'الكاف الغربية'
  },
  { id: 'tn-10-le-kef-est', governorate_id: 10, name_fr: 'Le Kef Est', name_ar: 'الكاف الشرقية' },
  { id: 'tn-10-nebeur', governorate_id: 10, name_fr: 'Nebeur', name_ar: 'نبر' },
  {
    id: 'tn-10-sakiet-sidi-youssef',
    governorate_id: 10,
    name_fr: 'Sakiet Sidi Youssef',
    name_ar: 'ساقية سيدي يوسف'
  },
  { id: 'tn-10-tajerouine', governorate_id: 10, name_fr: 'Tajerouine', name_ar: 'تاجروين' },
  { id: 'tn-10-kalaat-senan', governorate_id: 10, name_fr: 'Kalaat Senan', name_ar: 'قلعة سنان' },
  { id: 'tn-10-kalaat-khasba', governorate_id: 10, name_fr: 'Kalaat Khasba', name_ar: 'قلعة خصبة' },
  { id: 'tn-10-jerissa', governorate_id: 10, name_fr: 'Jerissa', name_ar: 'الجريصة' },
  { id: 'tn-10-ksour', governorate_id: 10, name_fr: 'Ksour', name_ar: 'القصور' },
  { id: 'tn-10-dahmani', governorate_id: 10, name_fr: 'Dahmani', name_ar: 'الدهماني' },
  { id: 'tn-10-sers', governorate_id: 10, name_fr: 'Sers', name_ar: 'السرس' },
  { id: 'tn-10-touiref', governorate_id: 10, name_fr: 'Touiref', name_ar: 'الطويرف' },

  // Siliana (11)
  {
    id: 'tn-11-siliana-nord',
    governorate_id: 11,
    name_fr: 'Siliana Nord',
    name_ar: 'سليانة الشمالية'
  },
  {
    id: 'tn-11-siliana-sud',
    governorate_id: 11,
    name_fr: 'Siliana Sud',
    name_ar: 'سليانة الجنوبية'
  },
  { id: 'tn-11-bou-arada', governorate_id: 11, name_fr: 'Bou Arada', name_ar: 'بوعرادة' },
  { id: 'tn-11-gaafour', governorate_id: 11, name_fr: 'Gaafour', name_ar: 'قعفور' },
  { id: 'tn-11-el-krib', governorate_id: 11, name_fr: 'El Krib', name_ar: 'الكريب' },
  {
    id: 'tn-11-sidi-bou-rouis',
    governorate_id: 11,
    name_fr: 'Sidi Bou Rouis',
    name_ar: 'سيدي بورويس'
  },
  { id: 'tn-11-makthar', governorate_id: 11, name_fr: 'Makthar', name_ar: 'مكثر' },
  { id: 'tn-11-rouhia', governorate_id: 11, name_fr: 'Rouhia', name_ar: 'الروحية' },
  { id: 'tn-11-kesra', governorate_id: 11, name_fr: 'Kesra', name_ar: 'كسرى' },
  { id: 'tn-11-bargou', governorate_id: 11, name_fr: 'Bargou', name_ar: 'برقو' },
  { id: 'tn-11-el-aroussa', governorate_id: 11, name_fr: 'El Aroussa', name_ar: 'العروسة' },

  // Sousse (12)
  { id: 'tn-12-sousse-ville', governorate_id: 12, name_fr: 'Sousse Ville', name_ar: 'مدينة سوسة' },
  {
    id: 'tn-12-sousse-jawhara',
    governorate_id: 12,
    name_fr: 'Sousse Jawhara',
    name_ar: 'سوسة الجوهرة'
  },
  { id: 'tn-12-sousse-riadh', governorate_id: 12, name_fr: 'Sousse Riadh', name_ar: 'سوسة الرياض' },
  {
    id: 'tn-12-sousse-sidi-abdelhamid',
    governorate_id: 12,
    name_fr: 'Sousse Sidi Abdelhamid',
    name_ar: 'سوسة سيدي عبد الحميد'
  },
  { id: 'tn-12-hammam-sousse', governorate_id: 12, name_fr: 'Hammam Sousse', name_ar: 'حمام سوسة' },
  { id: 'tn-12-akouda', governorate_id: 12, name_fr: 'Akouda', name_ar: 'أكودة' },
  {
    id: 'tn-12-kalaa-kebira',
    governorate_id: 12,
    name_fr: 'Kalâa Kebira',
    name_ar: 'القلعة الكبرى'
  },
  {
    id: 'tn-12-kalaa-seghira',
    governorate_id: 12,
    name_fr: 'Kalâa Seghira',
    name_ar: 'القلعة الصغرى'
  },
  { id: 'tn-12-sidi-bou-ali', governorate_id: 12, name_fr: 'Sidi Bou Ali', name_ar: 'سيدي بوعلي' },
  { id: 'tn-12-hergla', governorate_id: 12, name_fr: 'Hergla', name_ar: 'هرقلة' },
  { id: 'tn-12-enfida', governorate_id: 12, name_fr: 'Enfida', name_ar: 'النفيضة' },
  { id: 'tn-12-bouficha', governorate_id: 12, name_fr: 'Bouficha', name_ar: 'بوفيشة' },
  { id: 'tn-12-kondar', governorate_id: 12, name_fr: 'Kondar', name_ar: 'كندار' },
  { id: 'tn-12-sidi-el-hani', governorate_id: 12, name_fr: 'Sidi El Hani', name_ar: 'سيدي الهاني' },
  { id: 'tn-12-msaken', governorate_id: 12, name_fr: 'Msaken', name_ar: 'مساكن' },
  {
    id: 'tn-12-zaouia-ksiba-thrayet',
    governorate_id: 12,
    name_fr: 'Zaouia Ksiba Thrayet',
    name_ar: 'الزاوية قصيبة الثريات'
  },

  // Monastir (13)
  { id: 'tn-13-monastir', governorate_id: 13, name_fr: 'Monastir', name_ar: 'المنستير' },
  { id: 'tn-13-ouerdanine', governorate_id: 13, name_fr: 'Ouerdanine', name_ar: 'الوردانين' },
  { id: 'tn-13-sahline', governorate_id: 13, name_fr: 'Sahline', name_ar: 'ساحلين' },
  { id: 'tn-13-zeramdine', governorate_id: 13, name_fr: 'Zeramdine', name_ar: 'زرمدين' },
  { id: 'tn-13-beni-hassen', governorate_id: 13, name_fr: 'Beni Hassen', name_ar: 'بني حسان' },
  { id: 'tn-13-jemmal', governorate_id: 13, name_fr: 'Jemmal', name_ar: 'جمال' },
  { id: 'tn-13-bembla', governorate_id: 13, name_fr: 'Bembla', name_ar: 'بنبلة' },
  { id: 'tn-13-moknine', governorate_id: 13, name_fr: 'Moknine', name_ar: 'المكنين' },
  { id: 'tn-13-bekalta', governorate_id: 13, name_fr: 'Bekalta', name_ar: 'البقالطة' },
  { id: 'tn-13-teboulba', governorate_id: 13, name_fr: 'Teboulba', name_ar: 'طبلبة' },
  { id: 'tn-13-ksar-hellal', governorate_id: 13, name_fr: 'Ksar Hellal', name_ar: 'قصر هلال' },
  {
    id: 'tn-13-ksibet-el-mediouni',
    governorate_id: 13,
    name_fr: 'Ksibet El Mediouni',
    name_ar: 'قصيبة المديوني'
  },
  {
    id: 'tn-13-sayada-lamta-bou-hajar',
    governorate_id: 13,
    name_fr: 'Sayada Lamta Bou Hajar',
    name_ar: 'صيادة لمطة بوحجر'
  },

  // Mahdia (14)
  { id: 'tn-14-mahdia', governorate_id: 14, name_fr: 'Mahdia', name_ar: 'المهدية' },
  { id: 'tn-14-bou-merdes', governorate_id: 14, name_fr: 'Bou Merdes', name_ar: 'بومرداس' },
  {
    id: 'tn-14-ouled-chamekh',
    governorate_id: 14,
    name_fr: 'Ouled Chamekh',
    name_ar: 'أولاد الشامخ'
  },
  { id: 'tn-14-chorbane', governorate_id: 14, name_fr: 'Chorbane', name_ar: 'شربان' },
  { id: 'tn-14-hebira', governorate_id: 14, name_fr: 'Hebira', name_ar: 'هبيرة' },
  { id: 'tn-14-essouassi', governorate_id: 14, name_fr: 'Essouassi', name_ar: 'السواسي' },
  { id: 'tn-14-el-jem', governorate_id: 14, name_fr: 'El Jem', name_ar: 'الجم' },
  { id: 'tn-14-chebba', governorate_id: 14, name_fr: 'Chebba', name_ar: 'الشابة' },
  { id: 'tn-14-mellouleche', governorate_id: 14, name_fr: 'Melloulèche', name_ar: 'ملولش' },
  { id: 'tn-14-sidi-alouane', governorate_id: 14, name_fr: 'Sidi Alouane', name_ar: 'سيدي علوان' },
  { id: 'tn-14-ksour-essef', governorate_id: 14, name_fr: 'Ksour Essef', name_ar: 'قصور الساف' },
  { id: 'tn-14-rejiche', governorate_id: 14, name_fr: 'Rejiche', name_ar: 'رجيش' },
  { id: 'tn-14-el-bradaa', governorate_id: 14, name_fr: 'El Bradaa', name_ar: 'البرادعة' },

  // Sfax (15)
  { id: 'tn-15-sfax-ville', governorate_id: 15, name_fr: 'Sfax Ville', name_ar: 'مدينة صفاقس' },
  { id: 'tn-15-sfax-ouest', governorate_id: 15, name_fr: 'Sfax Ouest', name_ar: 'صفاقس الغربية' },
  { id: 'tn-15-sfax-sud', governorate_id: 15, name_fr: 'Sfax Sud', name_ar: 'صفاقس الجنوبية' },
  { id: 'tn-15-sakiet-ezzit', governorate_id: 15, name_fr: 'Sakiet Ezzit', name_ar: 'ساقية الزيت' },
  {
    id: 'tn-15-sakiet-eddaier',
    governorate_id: 15,
    name_fr: 'Sakiet Eddaier',
    name_ar: 'ساقية الداير'
  },
  { id: 'tn-15-thyna', governorate_id: 15, name_fr: 'Thyna', name_ar: 'طينة' },
  { id: 'tn-15-agareb', governorate_id: 15, name_fr: 'Agareb', name_ar: 'العقارب' },
  { id: 'tn-15-jebiniana', governorate_id: 15, name_fr: 'Jebiniana', name_ar: 'جبنيانة' },
  { id: 'tn-15-el-amra', governorate_id: 15, name_fr: 'El Amra', name_ar: 'العامرة' },
  { id: 'tn-15-el-hencha', governorate_id: 15, name_fr: 'El Hencha', name_ar: 'الحنشة' },
  { id: 'tn-15-menzel-chaker', governorate_id: 15, name_fr: 'Menzel Chaker', name_ar: 'منزل شاكر' },
  { id: 'tn-15-ghraiba', governorate_id: 15, name_fr: 'Ghraiba', name_ar: 'الغريبة' },
  {
    id: 'tn-15-bir-ali-ben-khalifa',
    governorate_id: 15,
    name_fr: 'Bir Ali Ben Khalifa',
    name_ar: 'بئر علي بن خليفة'
  },
  { id: 'tn-15-skhira', governorate_id: 15, name_fr: 'Skhira', name_ar: 'الصخيرة' },
  { id: 'tn-15-mahres', governorate_id: 15, name_fr: 'Mahres', name_ar: 'المحرس' },
  { id: 'tn-15-kerkennah', governorate_id: 15, name_fr: 'Kerkennah', name_ar: 'قرقنة' },

  // Kairouan (16)
  {
    id: 'tn-16-kairouan-nord',
    governorate_id: 16,
    name_fr: 'Kairouan Nord',
    name_ar: 'القيروان الشمالية'
  },
  {
    id: 'tn-16-kairouan-sud',
    governorate_id: 16,
    name_fr: 'Kairouan Sud',
    name_ar: 'القيروان الجنوبية'
  },
  { id: 'tn-16-echebika', governorate_id: 16, name_fr: 'Echebika', name_ar: 'الشبيكة' },
  { id: 'tn-16-sbikha', governorate_id: 16, name_fr: 'Sbikha', name_ar: 'السبيخة' },
  { id: 'tn-16-oueslatia', governorate_id: 16, name_fr: 'Oueslatia', name_ar: 'الوسلاتية' },
  { id: 'tn-16-haffouz', governorate_id: 16, name_fr: 'Haffouz', name_ar: 'حفوز' },
  { id: 'tn-16-ala', governorate_id: 16, name_fr: 'Ala', name_ar: 'العلا' },
  {
    id: 'tn-16-hajeb-el-ayoun',
    governorate_id: 16,
    name_fr: 'Hajeb El Ayoun',
    name_ar: 'حاجب العيون'
  },
  { id: 'tn-16-nasrallah', governorate_id: 16, name_fr: 'Nasrallah', name_ar: 'نصر الله' },
  { id: 'tn-16-cherarda', governorate_id: 16, name_fr: 'Cherarda', name_ar: 'الشراردة' },
  { id: 'tn-16-bou-hajla', governorate_id: 16, name_fr: 'Bou Hajla', name_ar: 'بوحجلة' },
  { id: 'tn-16-ain-jeloula', governorate_id: 16, name_fr: 'Ain Jeloula', name_ar: 'عين جلولة' },
  {
    id: 'tn-16-menzel-mhiri',
    governorate_id: 16,
    name_fr: 'Menzel Mhiri',
    name_ar: 'منزل المهيري'
  },

  // Kasserine (17)
  {
    id: 'tn-17-kasserine-nord',
    governorate_id: 17,
    name_fr: 'Kasserine Nord',
    name_ar: 'القصرين الشمالية'
  },
  {
    id: 'tn-17-kasserine-sud',
    governorate_id: 17,
    name_fr: 'Kasserine Sud',
    name_ar: 'القصرين الجنوبية'
  },
  { id: 'tn-17-ezzouhour', governorate_id: 17, name_fr: 'Ezzouhour', name_ar: 'الزهور' },
  {
    id: 'tn-17-hassi-el-ferid',
    governorate_id: 17,
    name_fr: 'Hassi El Ferid',
    name_ar: 'حاسي الفريد'
  },
  { id: 'tn-17-sbeitla', governorate_id: 17, name_fr: 'Sbeitla', name_ar: 'سبيطلة' },
  { id: 'tn-17-sbiba', governorate_id: 17, name_fr: 'Sbiba', name_ar: 'سبيبة' },
  { id: 'tn-17-jedeliane', governorate_id: 17, name_fr: 'Jedeliane', name_ar: 'جدليان' },
  { id: 'tn-17-el-ayoun', governorate_id: 17, name_fr: 'El Ayoun', name_ar: 'العيون' },
  { id: 'tn-17-thala', governorate_id: 17, name_fr: 'Thala', name_ar: 'تالة' },
  { id: 'tn-17-hidra', governorate_id: 17, name_fr: 'Hidra', name_ar: 'حيدرة' },
  { id: 'tn-17-foussana', governorate_id: 17, name_fr: 'Foussana', name_ar: 'فوسانة' },
  { id: 'tn-17-feriana', governorate_id: 17, name_fr: 'Feriana', name_ar: 'فريانة' },
  {
    id: 'tn-17-majel-bel-abbes',
    governorate_id: 17,
    name_fr: 'Majel Bel Abbes',
    name_ar: 'ماجل بلعباس'
  },

  // Sidi Bouzid (18)
  {
    id: 'tn-18-sidi-bouzid-ouest',
    governorate_id: 18,
    name_fr: 'Sidi Bouzid Ouest',
    name_ar: 'سيدي بوزيد الغربية'
  },
  {
    id: 'tn-18-sidi-bouzid-est',
    governorate_id: 18,
    name_fr: 'Sidi Bouzid Est',
    name_ar: 'سيدي بوزيد الشرقية'
  },
  { id: 'tn-18-jilma', governorate_id: 18, name_fr: 'Jilma', name_ar: 'جلمة' },
  {
    id: 'tn-18-cebalet-ouled-asker',
    governorate_id: 18,
    name_fr: 'Cebalet Ouled Asker',
    name_ar: 'السبالة أولاد عسكر'
  },
  { id: 'tn-18-bir-el-hafey', governorate_id: 18, name_fr: 'Bir El Hafey', name_ar: 'بئر الحفي' },
  {
    id: 'tn-18-sidi-ali-ben-aoun',
    governorate_id: 18,
    name_fr: 'Sidi Ali Ben Aoun',
    name_ar: 'سيدي علي بن عون'
  },
  {
    id: 'tn-18-menzel-bouzaiane',
    governorate_id: 18,
    name_fr: 'Menzel Bouzaiane',
    name_ar: 'منزل بوزيان'
  },
  { id: 'tn-18-meknassy', governorate_id: 18, name_fr: 'Meknassy', name_ar: 'المكناسي' },
  { id: 'tn-18-souk-jedid', governorate_id: 18, name_fr: 'Souk Jedid', name_ar: 'سوق الجديد' },
  { id: 'tn-18-mezzouna', governorate_id: 18, name_fr: 'Mezzouna', name_ar: 'المزونة' },
  { id: 'tn-18-regueb', governorate_id: 18, name_fr: 'Regueb', name_ar: 'الرقاب' },
  {
    id: 'tn-18-ouled-haffouz',
    governorate_id: 18,
    name_fr: 'Ouled Haffouz',
    name_ar: 'أولاد حفوز'
  },
  { id: 'tn-18-essaida', governorate_id: 18, name_fr: 'Essaida', name_ar: 'السعيدة' },
  { id: 'tn-18-el-hichria', governorate_id: 18, name_fr: 'El Hichria', name_ar: 'الهيشرية' },

  // Gabès (19)
  { id: 'tn-19-gabes-ville', governorate_id: 19, name_fr: 'Gabès Ville', name_ar: 'مدينة قابس' },
  { id: 'tn-19-gabes-sud', governorate_id: 19, name_fr: 'Gabès Sud', name_ar: 'قابس الجنوبية' },
  { id: 'tn-19-gabes-ouest', governorate_id: 19, name_fr: 'Gabès Ouest', name_ar: 'قابس الغربية' },
  { id: 'tn-19-el-hamma', governorate_id: 19, name_fr: 'El Hamma', name_ar: 'الحامة' },
  { id: 'tn-19-matmata', governorate_id: 19, name_fr: 'Matmata', name_ar: 'مطماطة' },
  {
    id: 'tn-19-nouvelle-matmata',
    governorate_id: 19,
    name_fr: 'Nouvelle Matmata',
    name_ar: 'مطماطة الجديدة'
  },
  { id: 'tn-19-mareth', governorate_id: 19, name_fr: 'Mareth', name_ar: 'مارث' },
  { id: 'tn-19-ghanouch', governorate_id: 19, name_fr: 'Ghanouch', name_ar: 'غنوش' },
  { id: 'tn-19-metouia', governorate_id: 19, name_fr: 'Metouia', name_ar: 'المطوية' },
  {
    id: 'tn-19-menzel-el-habib',
    governorate_id: 19,
    name_fr: 'Menzel El Habib',
    name_ar: 'منزل الحبيب'
  },
  {
    id: 'tn-19-dkhilet-toujane',
    governorate_id: 19,
    name_fr: 'Dkhilet Toujane',
    name_ar: 'دخيلة توجان'
  },
  { id: 'tn-19-oudhref', governorate_id: 19, name_fr: 'Oudhref', name_ar: 'وذرف' },
  {
    id: 'tn-19-el-hamma-ouest',
    governorate_id: 19,
    name_fr: 'El Hamma Ouest',
    name_ar: 'الحامة الغربية'
  },

  // Médenine (20)
  {
    id: 'tn-20-medenine-nord',
    governorate_id: 20,
    name_fr: 'Médenine Nord',
    name_ar: 'مدنين الشمالية'
  },
  {
    id: 'tn-20-medenine-sud',
    governorate_id: 20,
    name_fr: 'Médenine Sud',
    name_ar: 'مدنين الجنوبية'
  },
  { id: 'tn-20-beni-khedache', governorate_id: 20, name_fr: 'Beni Khedache', name_ar: 'بني خداش' },
  { id: 'tn-20-ben-guerdane', governorate_id: 20, name_fr: 'Ben Guerdane', name_ar: 'بن قردان' },
  { id: 'tn-20-zarzis', governorate_id: 20, name_fr: 'Zarzis', name_ar: 'جرجيس' },
  {
    id: 'tn-20-djerba-houmt-souk',
    governorate_id: 20,
    name_fr: 'Djerba Houmt Souk',
    name_ar: 'جربة حومة السوق'
  },
  {
    id: 'tn-20-djerba-midoun',
    governorate_id: 20,
    name_fr: 'Djerba Midoun',
    name_ar: 'جربة ميدون'
  },
  { id: 'tn-20-djerba-ajim', governorate_id: 20, name_fr: 'Djerba Ajim', name_ar: 'جربة أجيم' },
  {
    id: 'tn-20-sidi-makhlouf',
    governorate_id: 20,
    name_fr: 'Sidi Makhlouf',
    name_ar: 'سيدي مخلوف'
  },

  // Tataouine (21)
  {
    id: 'tn-21-tataouine-nord',
    governorate_id: 21,
    name_fr: 'Tataouine Nord',
    name_ar: 'تطاوين الشمالية'
  },
  {
    id: 'tn-21-tataouine-sud',
    governorate_id: 21,
    name_fr: 'Tataouine Sud',
    name_ar: 'تطاوين الجنوبية'
  },
  { id: 'tn-21-smar', governorate_id: 21, name_fr: 'Smar', name_ar: 'الصمار' },
  { id: 'tn-21-bir-lahmar', governorate_id: 21, name_fr: 'Bir Lahmar', name_ar: 'بئر الأحمر' },
  { id: 'tn-21-ghomrassen', governorate_id: 21, name_fr: 'Ghomrassen', name_ar: 'غمراسن' },
  { id: 'tn-21-dhehiba', governorate_id: 21, name_fr: 'Dhehiba', name_ar: 'ذهيبة' },
  { id: 'tn-21-remada', governorate_id: 21, name_fr: 'Remada', name_ar: 'رمادة' },
  { id: 'tn-21-beni-mhira', governorate_id: 21, name_fr: 'Beni Mhira', name_ar: 'بني مهيرة' },

  // Gafsa (22)
  { id: 'tn-22-gafsa-nord', governorate_id: 22, name_fr: 'Gafsa Nord', name_ar: 'قفصة الشمالية' },
  { id: 'tn-22-gafsa-sud', governorate_id: 22, name_fr: 'Gafsa Sud', name_ar: 'قفصة الجنوبية' },
  { id: 'tn-22-sidi-aich', governorate_id: 22, name_fr: 'Sidi Aich', name_ar: 'سيدي عيش' },
  { id: 'tn-22-el-ksar', governorate_id: 22, name_fr: 'El Ksar', name_ar: 'القصر' },
  {
    id: 'tn-22-oum-el-araies',
    governorate_id: 22,
    name_fr: 'Oum El Araies',
    name_ar: 'أم العرائس'
  },
  { id: 'tn-22-redeyef', governorate_id: 22, name_fr: 'Redeyef', name_ar: 'الرديف' },
  { id: 'tn-22-metlaoui', governorate_id: 22, name_fr: 'Metlaoui', name_ar: 'المتلوي' },
  { id: 'tn-22-mdhilla', governorate_id: 22, name_fr: 'Mdhilla', name_ar: 'المظيلة' },
  { id: 'tn-22-el-guettar', governorate_id: 22, name_fr: 'El Guettar', name_ar: 'القطار' },
  { id: 'tn-22-belkhir', governorate_id: 22, name_fr: 'Belkhir', name_ar: 'بلخير' },
  { id: 'tn-22-sned', governorate_id: 22, name_fr: 'Sned', name_ar: 'السند' },
  {
    id: 'tn-22-sidi-boubaker',
    governorate_id: 22,
    name_fr: 'Sidi Boubaker',
    name_ar: 'سيدي بوبكر'
  },
  { id: 'tn-22-zannouch', governorate_id: 22, name_fr: 'Zannouch', name_ar: 'زانوش' },

  // Tozeur (23)
  { id: 'tn-23-tozeur', governorate_id: 23, name_fr: 'Tozeur', name_ar: 'توزر' },
  { id: 'tn-23-degache', governorate_id: 23, name_fr: 'Degache', name_ar: 'دقاش' },
  { id: 'tn-23-tameghza', governorate_id: 23, name_fr: 'Tameghza', name_ar: 'تمغزة' },
  { id: 'tn-23-nefta', governorate_id: 23, name_fr: 'Nefta', name_ar: 'نفطة' },
  { id: 'tn-23-hazoua', governorate_id: 23, name_fr: 'Hazoua', name_ar: 'حزوة' },
  {
    id: 'tn-23-hamma-du-jerid',
    governorate_id: 23,
    name_fr: 'Hamma du Jerid',
    name_ar: 'حامة الجريد'
  },

  // Kebili (24)
  { id: 'tn-24-kebili-nord', governorate_id: 24, name_fr: 'Kebili Nord', name_ar: 'قبلي الشمالية' },
  { id: 'tn-24-kebili-sud', governorate_id: 24, name_fr: 'Kebili Sud', name_ar: 'قبلي الجنوبية' },
  { id: 'tn-24-souk-lahad', governorate_id: 24, name_fr: 'Souk Lahad', name_ar: 'سوق الأحد' },
  { id: 'tn-24-douz-nord', governorate_id: 24, name_fr: 'Douz Nord', name_ar: 'دوز الشمالية' },
  { id: 'tn-24-douz-sud', governorate_id: 24, name_fr: 'Douz Sud', name_ar: 'دوز الجنوبية' },
  { id: 'tn-24-faouar', governorate_id: 24, name_fr: 'Faouar', name_ar: 'الفوار' },
  { id: 'tn-24-rjim-maatoug', governorate_id: 24, name_fr: 'Rjim Maatoug', name_ar: 'رجيم معتوق' }
]);

/** Return immutable records for a governorate (unknown IDs yield []). */
export function getDelegationsByGovernorate(governorateId: number): readonly Delegation[] {
  return Object.freeze(DELEGATIONS.filter((d) => d.governorate_id === governorateId));
}

/** Return all matches, optionally scoped to a governorate. Names are NFC-normalized. */
export function getDelegationsByName(name: unknown, governorateId?: number): readonly Delegation[] {
  if (typeof name !== 'string') return Object.freeze([]);
  const needle = name.normalize('NFC').trim().toLowerCase();
  return Object.freeze(
    DELEGATIONS.filter(
      (d) =>
        (governorateId === undefined || d.governorate_id === governorateId) &&
        [d.name_fr, d.name_ar, ...(d.aliases ?? [])].some(
          (candidate) => candidate.normalize('NFC').toLowerCase() === needle
        )
    )
  );
}

/** Return a unique match; ambiguous/unknown names yield null, never a guessed match. */
export function getDelegationByName(name: unknown, governorateId?: number): Delegation | null {
  const matches = getDelegationsByName(name, governorateId);
  return matches.length === 1 ? matches[0] : null;
}

/** Resolve a unique delegation, optionally scoped to a governorate. */
export function getGovernorateFromDelegation(
  name: unknown,
  governorateId?: number
): Governorate | null {
  const delegation = getDelegationByName(name, governorateId);
  if (delegation === null) return null;
  // Foreign keys are verified by the data-integrity suite; records are immutable.
  return GOVERNORATES.find((g) => g.id === delegation.governorate_id)!;
}
