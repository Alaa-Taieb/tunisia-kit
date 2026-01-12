# tunisia-kit 🇹🇳

A type-safe, zero-dependency toolkit for validating and formatting Tunisian data.

[![npm version](https://img.shields.io/npm/v/tunisia-kit.svg)](https://www.npmjs.com/package/tunisia-kit)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Installation

```bash
npm install tunisia-kit
# or
yarn add tunisia-kit
```

## Quick Examples

### Validating User Input

```typescript
import { isValidCIN, isValidPhone, isValidRIB, isValidIBAN, isValidLandline } from 'tunisia-kit';

// Validate a National ID
isValidCIN('12345678');  // true

// Validate mobile and landline numbers
isValidPhone('22555111');     // true (Ooredoo mobile)
isValidLandline('71234567');  // true (Tunis landline)

// Validate bank accounts
isValidRIB('10005000000000000049');  // true (valid RIB)
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

### Identifying Bank & Region

```typescript
import { getBankFromRIB, getRegionFromLandline } from 'tunisia-kit';

getBankFromRIB('10005000000000000049'); 
// → "Banque Internationale Arabe de Tunisie (BIAT)"

getRegionFromLandline('71234567');
// → { prefix: '71', name_fr: 'Grand Tunis', name_ar: 'تونس الكبرى', ... }
```

### Formatting for Display

```typescript
import { formatPhone, formatLandline, formatCurrency } from 'tunisia-kit';

formatPhone('22555111');     // "22 555 111"
formatLandline('71234567');  // "71 234 567"
formatCurrency(1250.5);      // "1 250,500 TND"
```

### Populating Dropdowns

```typescript
import { GOVERNORATES, DELEGATIONS, getDelegationsByGovernorate } from 'tunisia-kit';

// Governorates dropdown
GOVERNORATES.map(gov => ({
  value: gov.id,
  label: gov.name_fr,     // "Tunis", "Sousse", etc.
  labelAr: gov.name_ar    // "تونس", "سوسة", etc.
}));

// Nested delegations dropdown
getDelegationsByGovernorate(1); // Returns delegations for Tunis
```

## API Reference

### Validators

| Function | Description |
|----------|-------------|
| `isValidCIN(cin)` | Validates 8-digit Tunisian National ID |
| `isValidPhone(phone)` | Validates mobile number with provider detection |
| `isValidLandline(phone)` | Validates landline number with region detection |
| `isValidRIB(rib)` | Validates 20-digit bank account (Modulo 97) |
| `isValidIBAN(iban)` | Validates 24-character Tunisian IBAN (ISO 7064) |
| `isValidMatricule(mat)` | Validates Company Tax ID |
| `isValidPassport(pass)` | Validates passport number |
| `isValidLicensePlate(plate)` | Validates Tunisian license plate format |

### Formatters

| Function | Input | Output |
|----------|-------|--------|
| `formatPhone(str)` | `22555111` | `22 555 111` |
| `formatPhoneIntl(str)` | `22555111` | `+216 22 555 111` |
| `formatLandline(str)` | `71234567` | `71 234 567` |
| `formatLandlineIntl(str)` | `71234567` | `+216 71 234 567` |
| `formatIBAN(str)` | `TN59...` | `TN59 1000 ...` |
| `formatCurrency(num)` | `1250.5` | `1 250,500 TND` |
| `formatCIN(str)` | `4555666` | `04555666` |

### Utilities

| Function | Description |
|----------|-------------|
| `ribToIBAN(rib)` | Convert 20-digit RIB to 24-character IBAN |
| `getBankFromRIB(rib)` | Get bank name from RIB |
| `getRegionFromLandline(phone)` | Get region info from landline prefix |
| `getDelegationsByGovernorate(id)` | Get delegations for a governorate |

### Static Data

| Export | Description |
|--------|-------------|
| `GOVERNORATES` | All 24 governorates (id, name_fr, name_ar) |
| `DELEGATIONS` | ~260 administrative delegations across all 24 governorates |
| `BANKS` | 21 bank codes for RIB identification |
| `LANDLINE_REGIONS` | 8 landline prefixes with region mapping |

## Phone Prefixes

### Mobile
- **Tunisie Telecom**: 9x, 4x
- **Ooredoo**: 2x
- **Orange**: 5x

### Landline
- **71**: Grand Tunis
- **72**: Northeast (Nabeul, Bizerte)
- **73**: Sahel (Sousse, Monastir)
- **74**: Sfax
- **75**: Southwest (Gafsa, Tozeur)
- **76**: Southeast (Gabès, Médenine)
- **77**: Center-West (Kasserine)
- **78**: Northwest (Béja, Jendouba)

## License

MIT © 2026

