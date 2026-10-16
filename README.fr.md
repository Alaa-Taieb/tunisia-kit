# tunisia-kit 🇹🇳

> 🇬🇧 English version available — [README.md](./README.md)

Une boîte à outils sûre par les types, sans dépendances, pour valider et formater les données tunisiennes.

[![npm version](https://img.shields.io/npm/v/tunisia-kit.svg?color=DC1F26)](https://www.npmjs.com/package/tunisia-kit)
[![npm downloads](https://img.shields.io/npm/dm/tunisia-kit.svg?color=DC1F26)](https://www.npmjs.com/package/tunisia-kit)
[![License: MIT](https://img.shields.io/badge/License-MIT-DC1F26.svg)](https://opensource.org/licenses/MIT)
[![Coverage](https://img.shields.io/badge/coverage-100%25-DC1F26.svg)](https://github.com/Alaa-Taieb/tunisia-kit)
[![minzipped](https://img.shields.io/bundlephobia/minzip/tunisia-kit.svg?color=DC1F26)](https://bundlephobia.com/package/tunisia-kit)
[![TypeScript](https://img.shields.io/badge/TypeScript-100%25-DC1F26.svg)](https://www.typescriptlang.org/)
[![Tree-shakeable](https://img.shields.io/badge/tree--shakeable-%E2%9C%93-DC1F26.svg)](https://github.com/Alaa-Taieb/tunisia-kit)
[![Zero dependencies](https://img.shields.io/badge/dependencies-0-DC1F26.svg)](https://github.com/Alaa-Taieb/tunisia-kit)

## Table des matières

- [Pourquoi tunisia-kit ?](#pourquoi-tunisia-kit)
- [Fonctionnalités](#fonctionnalités)
- [Installation](#installation)
- [Exemples rapides](#exemples-rapides)
  - [Validateurs](#validateurs)
  - [Mise en forme](#mise-en-forme)
  - [Utilitaires](#utilitaires)
  - [Données statiques](#données-statiques)
- [Référence de l'API](#référence-de-lapi)
- [Préfixes téléphoniques](#préfixes-téléphoniques)
- [Contribution](#contribution)
- [Licence](#licence)

## Pourquoi tunisia-kit?

- **Zéro dépendance au runtime** — rien de superflu n'est livré à vos utilisateurs.
- **Entièrement typé** — écrit en TypeScript, avec les types exportés pour chaque valeur.
- **Portée documentée** — contrôles RIB/IBAN, allocations téléphoniques sourcées et vérification du format des documents. Voir les [sources et limites](docs/DATA_SOURCES.md).
- **Couverture de tests à 100 %** — chaque validateur, formateur et recherche est testé.
- **Bilingue** — libellés en français et en arabe pour les gouvernorats et les délégations, prêts à l'emploi.
- **Tree-shakeable** — `sideEffects: false` signifie que les exports inutilisés sont retirés de votre bundle.

## Fonctionnalités

|                          |                                                                                                                       |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| ✅ **Validateurs**       | CIN, téléphone, ligne fixe, RIB, IBAN, matricule, passeport, plaque d'immatriculation, code postal                    |
| 🔁 **Mise en forme**     | Téléphone, ligne fixe, IBAN, devise (FR + AR), CIN — avec chiffres arabes-indiens                                     |
| 🗂️ **Données statiques** | 24 gouvernorats, 279 délégations (INS 2024) avec identifiants/alias, codes bancaires BCT et recherches approximatives |
| 🇫🇷🇹🇳 **Bilingue**        | Libellés en français et en arabe pour les gouvernorats et délégations                                                 |
| 🪶 **Sans dép. & léger** | Aucune dépendance au runtime, tree-shakeable, sans effet de bord                                                      |
| 🧪 **Entièrement testé** | Couverture de tests à 100 %, entièrement typé en TypeScript                                                           |

## Installation

```bash
npm install tunisia-kit
# ou
yarn add tunisia-kit
# ou
pnpm add tunisia-kit
# ou via CDN (ESM)
# import { isValidCIN } from 'https://cdn.jsdelivr.net/npm/tunisia-kit/dist/index.js';
```

## Exemples rapides

Quelques cas d'usage courants pour commencer.

### Valider les entrées utilisateur

```typescript
import {
  isValidCIN,
  isValidPhone,
  isValidRIB,
  isValidIBAN,
  isValidLandline,
  isValidPostalCode
} from 'tunisia-kit';

isValidCIN('12345678'); // true
isValidPhone('22555111'); // true (Ooredoo mobile)
isValidLandline('70123456'); // true (ligne fixe ; le préfixe 70 n'a pas de région associée)
isValidPostalCode('1000'); // true
isValidRIB('10005000000000000049'); // true (valid RIB)
isValidIBAN('TN5910005000000000000049'); // true (valid IBAN)
```

### Convertir un RIB en IBAN

```typescript
import { ribToIBAN, formatIBAN } from 'tunisia-kit';

const iban = ribToIBAN('10005000000000000049');
// → "TN5910005000000000000049"

if (iban !== null) formatIBAN(iban);
// → "TN59 1000 5000 0000 0000 0049"
```

### Identifier la banque, la région et le gouvernorat

```typescript
import {
  getBankFromRIB,
  getBankFromIBAN,
  getRegionFromLandline,
  getGovernorateFromPostalCode
} from 'tunisia-kit';

getBankFromRIB('10005000000000000049'); // → "Société Tunisienne de Banque (STB)"
getBankFromIBAN('TN5910005000000000000049'); // → "Société Tunisienne de Banque (STB)"
getRegionFromLandline('71234567'); // → { prefix: '71', name_fr: 'Grand Tunis', ... }
getGovernorateFromPostalCode('1000'); // → { id: 1, name_fr: 'Tunis', ... }
```

### Mettre en forme pour l'affichage

```typescript
import {
  formatPhone,
  formatLandline,
  formatCurrency,
  formatCurrencyAr,
  formatPhoneAr
} from 'tunisia-kit';

formatPhone('22555111'); // "22 555 111"
formatLandline('70123456'); // "70 123 456"
formatCurrency(1250.5); // "1 250,500 TND"
formatCurrencyAr(1250.5); // "١ ٢٥٠٫٥٠٠ د.ت"
formatPhoneAr('22555111'); // "٢٢ ٥٥٥ ١١١"
```

> **Entrées invalides :** les formateurs de chaînes préservent les chaînes mal
> formées et renvoient `''` pour les autres types. Le CIN n'est jamais tronqué.
> Les formateurs de devise renvoient `''` pour un montant invalide/non fini ;
> zéro reste `"0,000 TND"`. Le format ne prouve pas l'existence d'un document.
>
> Voir la [migration depuis 0.4.0](docs/MIGRATION.md) pour les changements de comportement.

### Opérateur mobile (préfixe uniquement — réserve MNP)

```typescript
import { getPhoneProvider } from 'tunisia-kit';

getPhoneProvider('22555111'); // → 'Ooredoo'
```

> ⚠️ **La Tunisie dispose d'une portabilité mobile totale (MNP)**, donc l'opérateur
> _actif_ d'un numéro peut différer de son préfixe. `getPhoneProvider` renvoie
> l'opérateur _assigné au préfixe_ uniquement et ne doit **pas** être utilisé pour
> déterminer l'opérateur actuel du numéro.

### Remplir des listes déroulantes

```typescript
import { GOVERNORATES, DELEGATIONS, getDelegationsByGovernorate } from 'tunisia-kit';

// Liste déroulante des gouvernorats
GOVERNORATES.map((gov) => ({
  value: gov.id,
  label: gov.name_fr, // "Tunis", "Sousse", etc.
  labelAr: gov.name_ar // "تونس", "سوسة", etc.
}));

// Liste déroulante imbriquée des délégations
getDelegationsByGovernorate(1); // Renvoie les délégations de Tunis
```

## Référence de l'API

### Validateurs

| Fonction                     | Description                                                                                                                         |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `isValidCIN(cin)`            | Vérifie le format CIN à 8 chiffres, pas son émission                                                                                |
| `isValidPhone(phone)`        | Valide un numéro mobile avec les préfixes d'opérateurs                                                                              |
| `isValidLandline(phone)`     | Valide les allocations fixes (7x, certains 3x, 81200) ; recherche de région séparée                                                 |
| `isValidRIB(rib)`            | Valide un compte bancaire à 20 chiffres (Modulo 97)                                                                                 |
| `isValidIBAN(iban)`          | Valide un IBAN tunisien à 24 caractères (ISO 7064)                                                                                  |
| `isValidMatricule(mat)`      | Vérifie le format fiscal, pas le calcul de la lettre de contrôle                                                                    |
| `isValidPassport(pass)`      | Valide un passeport (1 lettre + 7 chiffres, ou 2 lettres + 6 chiffres)                                                              |
| `isValidLicensePlate(plate)` | Valide une plaque d'immatriculation (standard `تونس`/`TU`, `RS`/`ن ت`, moto `د ن`, tracteur `ج ف`, `CD`/`CMD`/`MD`/`MC`/`CC`/`PAT`) |
| `isValidPostalCode(code)`    | Valide un code postal à 4 chiffres (1000–9299)                                                                                      |

### Recherche d'opérateur

| Fonction                  | Description                                                        |
| ------------------------- | ------------------------------------------------------------------ |
| `getPhoneProvider(phone)` | Opérateur mobile dérivé du préfixe (voir la réserve MNP ci-dessus) |

### Mise en forme

| Fonction                  | Input      | Output            |
| ------------------------- | ---------- | ----------------- |
| `formatPhone(str)`        | `22555111` | `22 555 111`      |
| `formatPhoneIntl(str)`    | `22555111` | `+216 22 555 111` |
| `formatPhoneAr(str)`      | `22555111` | `٢٢ ٥٥٥ ١١١`      |
| `formatLandline(str)`     | `70123456` | `70 123 456`      |
| `formatLandlineIntl(str)` | `70123456` | `+216 70 123 456` |
| `formatIBAN(str)`         | `TN59...`  | `TN59 1000 ...`   |
| `formatCurrency(num)`     | `1250.5`   | `1 250,500 TND`   |
| `formatCurrencyAr(num)`   | `1250.5`   | `١ ٢٥٠٫٥٠٠ د.ت`   |
| `formatCIN(str)`          | `4555666`  | `04555666`        |

### Utilitaires

| Fonction                                       | Description                                                              |
| ---------------------------------------------- | ------------------------------------------------------------------------ |
| `ribToIBAN(rib)`                               | Convertit un RIB à 20 chiffres en IBAN à 24 caractères                   |
| `getBankByCode(code)`                          | Banque (code banque BCT) pour un code à deux chiffres, ou null           |
| `getBankFromRIB(rib)`                          | Libellé bancaire pour un RIB avec clé valide                             |
| `getBankFromIBAN(iban)`                        | Libellé bancaire pour un IBAN tunisien avec clés valides                 |
| `getRegionFromLandline(phone)`                 | Récupère les informations de région du préfixe de ligne fixe             |
| `getGovernorateCandidatesFromPostalCode(code)` | Gouvernorats possibles, recherche approximative                          |
| `getGovernorateFromPostalCode(code)`           | Gouvernorat approximatif unique ; null si ambigu/non couvert             |
| `getDelegationsByGovernorate(id)`              | Récupère les délégations d'un gouvernorat                                |
| `getGovernorateFromDelegation(name)`           | Récupère le gouvernorat d'un nom de délégation (FR/AR)                   |
| `getDelegationsByName(name, governorateId?)`   | Tous les résultats, éventuellement limités au gouvernorat                |
| `getDelegationByName(name, governorateId?)`    | Résultat unique ou null ; gouvernorat optionnel pour lever une ambiguïté |

### Données statiques

| Export               | Description                                                                  |
| -------------------- | ---------------------------------------------------------------------------- |
| `GOVERNORATES`       | Les 24 gouvernorats (id, name_fr, name_ar)                                   |
| `DELEGATIONS`        | 279 délégations (recensement INS 2024), identifiants stables et alias        |
| `BANKS`              | Codes bancaires pour l'identification des RIB                                |
| `LANDLINE_REGIONS`   | 8 correspondances géographiques approximatives (71–78)                       |
| `POSTAL_CODE_RANGES` | Blocs approximatifs non ambigus ; les blocs partagés renvoient des candidats |

## Préfixes téléphoniques

### Mobile

Les allocations suivent les [métadonnées TN sourcées](docs/DATA_SOURCES.md) :
certains préfixes 3x, 2x/5x/9x et 40–48. Les préfixes 6x et 49 sont rejetés.
Les libellés d'opérateur dérivés du préfixe suivent des règles plus précises :

- **Tunisie Telecom** : 9x, 40–44, 47
- **Ooredoo** : 2x, 46, 48
- **Orange** : 5x
- **null** : 45 (MVNO Watany Ettisalat) et allocations mobiles 3x

### Lignes fixes et régions approximatives

Les allocations fixes incluent 7x, 30–32 et 81200. Seuls les préfixes 71–78 ont
une correspondance géographique historique approximative. Les numéros fixes
valides 70/79, 3x et 81200 renvoient null pour la région ; aucune localisation
n'est devinée.

### Ambiguïté et données immuables

`getDelegationByName('Ezzouhour')` renvoie null : le nom existe à Tunis et
Kasserine. Précisez le gouvernorat (`getDelegationByName('Ezzouhour', 17)`) ou
utilisez `getDelegationsByName`. `Mourouj` est un alias de `El Mourouj` et non
une deuxième entrée de liste.

La recherche postale est approximative : `getGovernorateFromPostalCode('2080')`
renvoie null ; `getGovernorateCandidatesFromPostalCode('2080')` expose les
candidats du bloc partagé 20xx. Un format valide ne prouve pas l'attribution
réelle du code. Les codes bancaires suivent la Banque Centrale de Tunisie et les
délégations le recensement INS 2024, sans être des registres en temps réel ; voir
les [sources et limites](docs/DATA_SOURCES.md).

Les tableaux et objets de référence sont readonly et gelés. Copiez-les avant
de les modifier dans l'application. Les recherches singulières renvoient null
pour une entrée inconnue/ambiguë ; les recherches plurielles renvoient [].

### Développement et compatibilité

Le paquet installé prend en charge Node >=18. Utilisez Node 24 pour développer
(`.nvmrc`), puis `npm ci` et `npm run check`. La CI valide les consommateurs
ESM/CommonJS et les déclarations Node16/NodeNext/bundler, les runtimes Node
18.0.0/20/22/24, la couverture, les types des sources/tests/configurations,
le lint, l'audit des dépendances et les budgets de taille.

## Contribution

Les contributions sont les bienvenues ! Veuillez lire [CONTRIBUTING.md](./CONTRIBUTING.md) avant d'ouvrir une pull request — il couvre la configuration, les tests et les conventions utilisées dans ce projet.

## Licence

MIT © 2026

---

Fait pour les développeurs tunisiens, avec ❤️ et 🇹🇳.
