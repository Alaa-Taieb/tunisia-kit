# tunisia-kit 🇹🇳

> 🇫🇷 Version française disponible — [README.fr.md](./README.fr.md)

A type-safe, zero-dependency toolkit for validating and formatting Tunisian data.

[![npm version](https://img.shields.io/npm/v/tunisia-kit.svg?color=DC1F26)](https://www.npmjs.com/package/tunisia-kit)
[![npm downloads](https://img.shields.io/npm/dm/tunisia-kit.svg?color=DC1F26)](https://www.npmjs.com/package/tunisia-kit)
[![License: MIT](https://img.shields.io/badge/License-MIT-DC1F26.svg)](https://opensource.org/licenses/MIT)
[![Coverage](https://img.shields.io/badge/coverage-100%25-DC1F26.svg)](https://github.com/Alaa-Taieb/tunisia-kit)
[![minzipped](https://img.shields.io/bundlephobia/minzip/tunisia-kit.svg?color=DC1F26)](https://bundlephobia.com/package/tunisia-kit)
[![TypeScript](https://img.shields.io/badge/TypeScript-100%25-DC1F26.svg)](https://www.typescriptlang.org/)
[![Tree-shakeable](https://img.shields.io/badge/tree--shakeable-%E2%9C%93-DC1F26.svg)](https://github.com/Alaa-Taieb/tunisia-kit)
[![Zero dependencies](https://img.shields.io/badge/dependencies-0-DC1F26.svg)](https://github.com/Alaa-Taieb/tunisia-kit)

## Table of Contents

- [Why tunisia-kit?](#why-tunisia-kit)
- [Features](#features)
- [Installation](#installation)
- [Quick Examples](#quick-examples)
  - [Validators](#validators)
  - [Formatters](#formatters)
  - [Utilities](#utilities)
  - [Static Data](#static-data)
- [API Reference](#api-reference)
- [Phone Prefixes](#phone-prefixes)
- [Contributing](#contributing)
- [License](#license)

## Why tunisia-kit?

- **Zero runtime dependencies** — nothing extra ships to your users.
- **Fully typed** — written in TypeScript, with types exported for every value.
- **Documented validation scope** — RIB and IBAN checksums, sourced phone allocations, and format-only document checks. See [data sources and limitations](docs/DATA_SOURCES.md).
- **100% test coverage** — every validator, formatter, and lookup is tested.
- **Bilingual** — French and Arabic labels for governorates and delegations, out of the box.
- **Tree-shakeable** — `sideEffects: false` means unused exports are dropped from your bundle.

## Features

|                        |                                                                                                                     |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------- |
| ✅ **Validators**      | CIN, phone, landline, RIB, IBAN, matricule, passport, license plate, postal code                                    |
| 🔁 **Formatters**      | Phone, landline, IBAN, currency (FR + AR), CIN — with Arabic-Indic digits                                           |
| 🗂️ **Static Data**     | 24 governorates, 279 delegations (INS 2024) with IDs/aliases, BCT bank codes, approximate regions/postal candidates |
| 🇫🇷🇹🇳 **Bilingual**     | French & Arabic labels for governorates and delegations                                                             |
| 🪶 **Zero-dep & tiny** | No runtime dependencies, tree-shakeable, side-effect free                                                           |
| 🧪 **Fully tested**    | 100% test coverage, fully typed TypeScript                                                                          |

## Installation

```bash
npm install tunisia-kit
# or
yarn add tunisia-kit
# or
pnpm add tunisia-kit
# or via CDN (ESM)
# import { isValidCIN } from 'https://cdn.jsdelivr.net/npm/tunisia-kit/dist/index.js';
```

## Quick Examples

A few common use cases to get you started.

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
isValidLandline('70123456'); // true (fixed line; prefix 70 has no region mapping)
isValidPostalCode('1000'); // true
isValidRIB('10005000000000000049'); // true (valid RIB)
isValidIBAN('TN5910005000000000000049'); // true (valid IBAN)
```

### Converting RIB to IBAN

```typescript
import { ribToIBAN, formatIBAN } from 'tunisia-kit';

const iban = ribToIBAN('10005000000000000049');
// → "TN5910005000000000000049"

if (iban !== null) formatIBAN(iban);
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

getBankFromRIB('10005000000000000049'); // → "Société Tunisienne de Banque (STB)"
getBankFromIBAN('TN5910005000000000000049'); // → "Société Tunisienne de Banque (STB)"
getRegionFromLandline('71234567'); // → { prefix: '71', name_fr: 'Grand Tunis', ... }
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
formatCurrencyAr(1250.5); // "١ ٢٥٠٫٥٠٠ د.ت"
formatPhoneAr('22555111'); // "٢٢ ٥٥٥ ١١١"
```

> **Input handling:** string formatters preserve malformed strings and return `''` for
> non-string input. CIN formatting never truncates an identifier. Currency helpers
> return `''` for invalid/non-finite amounts; zero remains `"0,000 TND"`. Formatting
> does not prove that a document or subscriber number is issued.
>
> [Migration from 0.4.0](docs/MIGRATION.md) describes stricter validation, readonly
> reference data, and changed lookup/formatting behavior.

### Mobile provider (prefix only — MNP caveat)

```typescript
import { getPhoneProvider } from 'tunisia-kit';

getPhoneProvider('22555111'); // → 'Ooredoo'
```

> ⚠️ **Tunisia has full Mobile Number Portability**, so a number's _active_
> carrier may differ from its prefix. `getPhoneProvider` returns the
> _prefix-assigned_ operator only and must **not** be used to determine the
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

| Function                     | Description                                                                                                                  |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `isValidCIN(cin)`            | Checks 8-digit CIN syntax; does not verify issuance                                                                          |
| `isValidPhone(phone)`        | Validates mobile number with provider prefixes                                                                               |
| `isValidLandline(phone)`     | Validates supported fixed-line allocations (7x, selected 3x, 81200); region lookup is separate                               |
| `isValidRIB(rib)`            | Validates 20-digit bank account (Modulo 97)                                                                                  |
| `isValidIBAN(iban)`          | Validates 24-character Tunisian IBAN (ISO 7064)                                                                              |
| `isValidMatricule(mat)`      | Checks tax-ID syntax; does not validate the control-letter checksum                                                          |
| `isValidPassport(pass)`      | Validates passport (1 letter + 7 digits, or 2 letters + 6 digits)                                                            |
| `isValidLicensePlate(plate)` | Validates license plate (standard `تونس`/`TU`, `RS`/`ن ت`, motorcycle `د ن`, tractor `ج ف`, `CD`/`CMD`/`MD`/`MC`/`CC`/`PAT`) |
| `isValidPostalCode(code)`    | Validates 4-digit postal code (1000–9299)                                                                                    |

### Provider lookup

| Function                  | Description                                           |
| ------------------------- | ----------------------------------------------------- |
| `getPhoneProvider(phone)` | Prefix-derived mobile operator (see MNP caveat above) |

### Formatters

| Function                  | Input      | Output            |
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

### Utilities

| Function                                       | Description                                                           |
| ---------------------------------------------- | --------------------------------------------------------------------- |
| `ribToIBAN(rib)`                               | Convert 20-digit RIB to 24-character IBAN                             |
| `getBankByCode(code)`                          | Immutable bank record (BCT code banque) for a two-digit code, or null |
| `getBankFromRIB(rib)`                          | Get bank label from a checksum-valid RIB                              |
| `getBankFromIBAN(iban)`                        | Get bank label from a checksum-valid Tunisian IBAN                    |
| `getRegionFromLandline(phone)`                 | Get region info from landline prefix                                  |
| `getGovernorateCandidatesFromPostalCode(code)` | Approximate candidates; never exact address resolution                |
| `getGovernorateFromPostalCode(code)`           | Unique approximate governorate; null for ambiguous/unmapped codes     |
| `getDelegationsByGovernorate(id)`              | Get delegations for a governorate                                     |
| `getGovernorateFromDelegation(name)`           | Resolve a unique name; optional governorate ID disambiguates          |
| `getDelegationsByName(name, governorateId?)`   | All matching records, optionally scoped                               |
| `getDelegationByName(name, governorateId?)`    | Unique record or null; optional governorate ID disambiguates          |

### Static Data

| Export               | Description                                                               |
| -------------------- | ------------------------------------------------------------------------- |
| `GOVERNORATES`       | All 24 governorates (id, name_fr, name_ar)                                |
| `DELEGATIONS`        | 279 delegations (INS 2024 census) with stable package IDs and aliases     |
| `BANKS`              | Bank codes for RIB identification                                         |
| `LANDLINE_REGIONS`   | 8 approximate geographic prefix mappings (71–78)                          |
| `POSTAL_CODE_RANGES` | Approximate unambiguous postal blocks; shared blocks use candidate lookup |

## Phone Prefixes

### Mobile

Allocation validation follows the pinned [TN numbering metadata](docs/DATA_SOURCES.md),
including selected 3-prefix allocations, 2x/5x/9x, and 40–48. 6x and 49 are rejected.
Prefix-assigned carrier labels use more specific rules:

- **Tunisie Telecom**: 9x, 40–44, 47
- **Ooredoo**: 2x, 46, 48
- **Orange**: 5x
- **null**: 45 (Watany Ettisalat MVNO) and supported 3-prefix mobile allocations

### Fixed lines and approximate regions

Supported fixed allocations include 7x, 30–32, and 81200. Only legacy geographic
prefixes 71–78 have approximate region records. Valid 70/79, 3-prefix, and 81200
inputs return null from region lookup; the package does not guess their location.

### Lookup uncertainty and immutability

`getDelegationByName('Ezzouhour')` returns null because Tunis and Kasserine both
have that name. Pass a governorate ID, e.g. `getDelegationByName('Ezzouhour', 17)`,
or use `getDelegationsByName` to inspect all matches. `Mourouj` is an alias of
`El Mourouj`, not a duplicate dropdown record.

Postal helpers are approximate: `getGovernorateFromPostalCode('2080')` returns
null, while `getGovernorateCandidatesFromPostalCode('2080')` returns the possible
governorates in the shared 20xx block. Syntax validation does not establish code
assignment. Bank codes follow the Banque Centrale de Tunisie and delegations the
INS 2024 census, but neither is a live registry; see
[data provenance and limitations](docs/DATA_SOURCES.md).

Reference arrays/records are readonly and frozen. Copy a record before editing
it in an application. Singular lookups return null for missing/ambiguous input;
plural lookups return an empty array.

### Development and compatibility

The installed package supports Node >=18. Use Node 24 for development (`.nvmrc`),
then `npm ci` and `npm run check`. CI checks packed ESM/CommonJS consumers and
Node16/NodeNext/bundler declarations, runtime Node 18.0.0/20/22/24, coverage,
type checking (including tests/config), lint, security audit, and bundle budgets.

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening a pull request — it covers the setup, testing, and conventions used in this project.

## License

MIT © 2026

---

Made for Tunisian developers, with ❤️ and 🇹🇳.
