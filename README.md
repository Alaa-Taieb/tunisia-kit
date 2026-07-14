# tunisia-kit 🇹🇳

A type-safe, zero-dependency toolkit for validating and formatting Tunisian data.

[![npm version](https://img.shields.io/npm/v/tunisia-kit.svg)](https://www.npmjs.com/package/tunisia-kit)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen.svg)](https://github.com/Alaa-Taieb/tunisia-kit)

## Installation

```bash
npm install tunisia-kit
# or
pnpm add tunisia-kit
# or via CDN (ESM)
# import { isValidCIN } from 'https://cdn.jsdelivr.net/npm/tunisia-kit/dist/index.js';
```

## Quick Examples

### Validating User Input

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

### Converting RIB to IBAN

```typescript
import { ribToIBAN, formatIBAN } from 'tunisia-kit';

const iban = ribToIBAN('10005000000000000049');
// → "TN5910005000000000000049"

formatIBAN(iban);
// → "TN59 1000 5000 0000 0000 0049"
```

### Identifying Bank, Region & Governorate

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

### Formatting for Display

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

> **Note:** the `format*` functions return the original input unchanged when it
> cannot be parsed (e.g. an input of the wrong length).

### Mobile provider (prefix only — MNP caveat)

```typescript
import { getPhoneProvider } from 'tunisia-kit';

getPhoneProvider('22555111'); // → 'Ooredoo'
```

> ⚠️ **Tunisia has full Mobile Number Portability**, so a number's *active*
> carrier may differ from its prefix. `getPhoneProvider` returns the
> *prefix-assigned* operator only and must **not** be used to determine the
> number's current carrier.

### Populating Dropdowns

```typescript
import { GOVERNORATES, DELEGATIONS, getDelegationsByGovernorate } from 'tunisia-kit';

// Governorates dropdown
GOVERNORATES.map((gov) => ({
  value: gov.id,
  label: gov.name_fr, // "Tunis", "Sousse", etc.
  labelAr: gov.name_ar // "تونس", "سوسة", etc.
}));

// Nested delegations dropdown
getDelegationsByGovernorate(1); // Returns delegations for Tunis
```

## API Reference

### Validators

| Function                | Description                                                                   |
| ----------------------- | ----------------------------------------------------------------------------- |
| `isValidCIN(cin)`       | Validates 8-digit Tunisian National ID                                        |
| `isValidPhone(phone)`   | Validates mobile number with provider prefixes                               |
| `isValidLandline(phone)`| Validates landline number (prefixes 70–79) with region detection             |
| `isValidRIB(rib)`       | Validates 20-digit bank account (Modulo 97)                                  |
| `isValidIBAN(iban)`     | Validates 24-character Tunisian IBAN (ISO 7064)                              |
| `isValidMatricule(mat)` | Validates Company Tax ID (Matricule Fiscale)                                 |
| `isValidPassport(pass)` | Validates passport (1 letter + 7 digits, or 2 letters + 6 digits)            |
| `isValidLicensePlate(plate)` | Validates license plate (standard, diplomatic `CD`, rental `RS`)         |
| `isValidPostalCode(code)` | Validates 4-digit postal code (1000–9299)                                  |

### Provider lookup

| Function              | Description                                  |
| --------------------- | -------------------------------------------- |
| `getPhoneProvider(phone)` | Prefix-derived mobile operator (see MNP caveat above) |

### Formatters

| Function           | Input      | Output             |
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

### Utilities

| Function                          | Description                                          |
| --------------------------------- | ---------------------------------------------------- |
| `ribToIBAN(rib)`                  | Convert 20-digit RIB to 24-character IBAN            |
| `getBankFromRIB(rib)`             | Get bank name from RIB                               |
| `getBankFromIBAN(iban)`           | Get bank name from IBAN                              |
| `getRegionFromLandline(phone)`    | Get region info from landline prefix                 |
| `getGovernorateFromPostalCode(code)` | Get governorate from postal code                  |
| `getDelegationsByGovernorate(id)` | Get delegations for a governorate                    |
| `getGovernorateFromDelegation(name)` | Get governorate for a delegation name (FR/AR)    |
| `getDelegationByName(name)`       | Find a delegation by name (FR/AR)                    |

### Static Data

| Export                 | Description                                                          |
| ---------------------- | -------------------------------------------------------------------- |
| `GOVERNORATES`         | All 24 governorates (id, name_fr, name_ar)                           |
| `DELEGATIONS`          | ~260 administrative delegations across all 24 governorates            |
| `BANKS`                | Bank codes for RIB identification                                     |
| `LANDLINE_REGIONS`     | 10 landline prefixes (70–79) with region mapping                     |
| `POSTAL_CODE_RANGES`  | Compact postal-code → governorate range table                        |

## Phone Prefixes

### Mobile

- **Tunisie Telecom**: 9x, 4x
- **Ooredoo**: 2x
- **Orange**: 5x

### Landline

- **70 / 71**: Grand Tunis
- **72**: Northeast (Nabeul, Zaghouan, Bizerte)
- **73**: Sahel (Sousse, Monastir)
- **74**: Sfax
- **75**: Southwest (Gafsa, Tozeur)
- **76**: Southeast (Gabès, Médenine)
- **77**: Center-West (Kasserine)
- **78**: Northwest (Béja, Jendouba)
- **79**: Grand Tunis

## License

MIT © 2026
