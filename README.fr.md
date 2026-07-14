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
- **Règles exactes** — le RIB utilise le Modulo 97 ; l'IBAN utilise l'ISO 7064 ; les codes postaux et les préfixes suivent les vrais formats tunisiens.
- **Couverture de tests à 100 %** — chaque validateur, formateur et recherche est testé.
- **Bilingue** — libellés en français et en arabe pour les gouvernorats et les délégations, prêts à l'emploi.
- **Tree-shakeable** — `sideEffects: false` signifie que les exports inutilisés sont retirés de votre bundle.

## Fonctionnalités

| | |
| --- | --- |
| ✅ **Validateurs** | CIN, téléphone, ligne fixe, RIB, IBAN, matricule, passeport, plaque d'immatriculation, code postal |
| 🔁 **Mise en forme** | Téléphone, ligne fixe, IBAN, devise (FR + AR), CIN — avec chiffres arabes-indiens |
| 🗂️ **Données statiques** | 24 gouvernorats, ~260 délégations, banques, régions de lignes fixes, plages postales |
| 🇫🇷🇹🇳 **Bilingue** | Libellés en français et en arabe pour les gouvernorats et délégations |
| 🪶 **Sans dép. & léger** | Aucune dépendance au runtime, tree-shakeable, sans effet de bord |
| 🧪 **Entièrement testé** | Couverture de tests à 100 %, entièrement typé en TypeScript |

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
isValidLandline('70123456'); // true (Tunis landline, prefix 70)
isValidPostalCode('1000'); // true
isValidRIB('10005000000000000049'); // true (valid RIB)
isValidIBAN('TN5910005000000000000049'); // true (valid IBAN)
```

### Convertir un RIB en IBAN

```typescript
import { ribToIBAN, formatIBAN } from 'tunisia-kit';

const iban = ribToIBAN('10005000000000000049');
// → "TN5910005000000000000049"

formatIBAN(iban);
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

getBankFromRIB('10005000000000000049'); // → "Banque Internationale Arabe de Tunisie (BIAT)"
getBankFromIBAN('TN5910005000000000000049'); // → "Banque Internationale Arabe de Tunisie (BIAT)"
getRegionFromLandline('70123456'); // → { prefix: '70', name_fr: 'Grand Tunis', ... }
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
formatCurrencyAr(1250.5); // "١ ٢٥٠،٥٠٠ د.ت"
formatPhoneAr('22555111'); // "٢٢ ٥٥٥ ١١١"
```

> **Remarque :** les fonctions `format*` renvoient l'entrée d'origine inchangée lorsqu'elle
> ne peut pas être analysée (par exemple une entrée de longueur incorrecte).

### Opérateur mobile (préfixe uniquement — réserve MNP)

```typescript
import { getPhoneProvider } from 'tunisia-kit';

getPhoneProvider('22555111'); // → 'Ooredoo'
```

> ⚠️ **La Tunisie dispose d'une portabilité mobile totale (MNP)**, donc l'opérateur
> *actif* d'un numéro peut différer de son préfixe. `getPhoneProvider` renvoie
> l'opérateur *assigné au préfixe* uniquement et ne doit **pas** être utilisé pour
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

| Fonction                | Description                                                                   |
| ----------------------- | ----------------------------------------------------------------------------- |
| `isValidCIN(cin)`       | Valide le numéro d'identité nationale tunisien à 8 chiffres                  |
| `isValidPhone(phone)`   | Valide un numéro mobile avec les préfixes d'opérateurs                       |
| `isValidLandline(phone)`| Valide un numéro de ligne fixe (préfixes 70–79) avec détection de région     |
| `isValidRIB(rib)`       | Valide un compte bancaire à 20 chiffres (Modulo 97)                          |
| `isValidIBAN(iban)`     | Valide un IBAN tunisien à 24 caractères (ISO 7064)                           |
| `isValidMatricule(mat)` | Valide le matricule fiscal (identifiant fiscal d'entreprise)                 |
| `isValidPassport(pass)` | Valide un passeport (1 lettre + 7 chiffres, ou 2 lettres + 6 chiffres)       |
| `isValidLicensePlate(plate)` | Valide une plaque d'immatriculation (standard, diplomatique `CD`, location `RS`) |
| `isValidPostalCode(code)` | Valide un code postal à 4 chiffres (1000–9299)                            |

### Recherche d'opérateur

| Fonction              | Description                                                  |
| --------------------- | ------------------------------------------------------------ |
| `getPhoneProvider(phone)` | Opérateur mobile dérivé du préfixe (voir la réserve MNP ci-dessus) |

### Mise en forme

| Fonction           | Input      | Output             |
| ------------------ | ---------- | ------------------ |
| `formatPhone(str)` | `22555111` | `22 555 111`       |
| `formatPhoneIntl(str)` | `22555111` | `+216 22 555 111` |
| `formatPhoneAr(str)` | `22555111` | `٢٢ ٥٥٥ ١١١`     |
| `formatLandline(str)` | `70123456` | `70 123 456`      |
| `formatLandlineIntl(str)` | `70123456` | `+216 70 123 456` |
| `formatIBAN(str)`   | `TN59...`  | `TN59 1000 ...`    |
| `formatCurrency(num)` | `1250.5` | `1 250,500 TND`    |
| `formatCurrencyAr(num)` | `1250.5` | `١ ٢٥٠،٥٠٠ د.ت`  |
| `formatCIN(str)`    | `4555666`  | `04555666`         |

### Utilitaires

| Fonction                          | Description                                          |
| --------------------------------- | ---------------------------------------------------- |
| `ribToIBAN(rib)`                  | Convertit un RIB à 20 chiffres en IBAN à 24 caractères |
| `getBankFromRIB(rib)`             | Récupère le nom de la banque à partir d'un RIB       |
| `getBankFromIBAN(iban)`           | Récupère le nom de la banque à partir d'un IBAN      |
| `getRegionFromLandline(phone)`    | Récupère les informations de région du préfixe de ligne fixe |
| `getGovernorateFromPostalCode(code)` | Récupère le gouvernorat à partir du code postal  |
| `getDelegationsByGovernorate(id)` | Récupère les délégations d'un gouvernorat            |
| `getGovernorateFromDelegation(name)` | Récupère le gouvernorat d'un nom de délégation (FR/AR) |
| `getDelegationByName(name)`       | Recherche une délégation par nom (FR/AR)             |

### Données statiques

| Export                 | Description                                                          |
| ---------------------- | -------------------------------------------------------------------- |
| `GOVERNORATES`         | Les 24 gouvernorats (id, name_fr, name_ar)                           |
| `DELEGATIONS`          | ~260 délégations administratives réparties sur les 24 gouvernorats   |
| `BANKS`                | Codes bancaires pour l'identification des RIB                         |
| `LANDLINE_REGIONS`     | 10 préfixes de lignes fixes (70–79) avec correspondance des régions   |
| `POSTAL_CODE_RANGES`  | Table compacte code postal → gouvernorat                            |

## Préfixes téléphoniques

### Mobile

- **Tunisie Telecom**: 9x, 4x
- **Ooredoo**: 2x
- **Orange**: 5x

### Ligne fixe

- **70 / 71**: Grand Tunis
- **72**: Nord-Est (Nabeul, Zaghouan, Bizerte)
- **73**: Sahel (Sousse, Monastir)
- **74**: Sfax
- **75**: Sud-Ouest (Gafsa, Tozeur)
- **76**: Sud-Est (Gabès, Médenine)
- **77**: Centre-Ouest (Kasserine)
- **78**: Nord-Ouest (Béja, Jendouba)
- **79**: Grand Tunis

## Contribution

Les contributions sont les bienvenues ! Veuillez lire [CONTRIBUTING.md](./CONTRIBUTING.md) avant d'ouvrir une pull request — il couvre la configuration, les tests et les conventions utilisées dans ce projet.

## Licence

MIT © 2026

---

Fait pour les développeurs tunisiens, avec ❤️ et 🇹🇳.
