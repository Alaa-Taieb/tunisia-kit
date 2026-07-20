# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.4.0] - 2026-07-20

### Added
- Lycamobile (`6x`) phone-prefix validation and provider detection
- Additional Tunisian bank records for RIB bank identification
- Motorcycle (`MN`), tractor (`TRAC`), and special diplomatic license-plate formats

### Changed
- Matricule fiscale validation now follows the verified control, type, and category-letter rules
- Minimum supported Node.js version is now 18

## [0.3.0] - 2026-07-14

### Added
- `isValidPostalCode` - Validate 4-digit Tunisian postal code (1000–9299)
- `getGovernorateFromPostalCode` - Resolve governorate from postal code
- `POSTAL_CODE_RANGES` - Compact postal-code → governorate range table
- `getPhoneProvider` - Prefix-derived mobile operator (with MNP caveat)
- `getBankFromIBAN` - Resolve bank name from a Tunisian IBAN
- `formatCurrencyAr` - Currency formatting with Arabic-Indic digits
- `formatPhoneAr` - Phone formatting with Arabic-Indic digits
- `getGovernorateFromDelegation` - Governorate from a delegation name (FR/AR)
- `getDelegationByName` - Find a delegation by name (FR/AR)
- Dual ESM + CJS distribution (`import`/`require` exports)
- `"sideEffects": false` for optimal tree-shaking
- ESLint + Prettier configuration and GitHub Actions CI/publish workflows

### Changed
- `isValidLandline` now accepts prefixes `70` and `79` (Grand Tunis)
- `getRegionFromLandline` maps `70`/`79` to Grand Tunis
- `formatCurrency` / `formatCurrencyAr` guard against `Infinity`/`-Infinity`
- `getBankFromRIB` returns `null` (instead of `undefined`) on a miss
- `isValidPassport` also accepts the 2-letter + 6-digit biometric format
- `isValidLicensePlate` also accepts diplomatic (`CD`) and rental (`RS`) series
- Build is now a dual ESM + CJS bundle via `tsup`; 100% coverage is enforced in CI

### Fixed
- `formatCurrency(Infinity)` no longer returns `"Infinity,undefined TND"`
- README no longer claims a non-existent "provider detection" feature on `isValidPhone`

## [0.2.0] - 2026-07-14

### Added

#### Validators

- `isValidCIN` - Validate 8-digit Tunisian National ID
- `isValidPhone` - Validate mobile numbers with provider prefixes
- `isValidRIB` - Validate 20-digit bank account (Modulo 97)
- `isValidMatricule` - Validate Company Tax ID (Matricule Fiscale)
- `isValidPassport` - Validate Tunisian passport format
- `isValidIBAN` - Validate 24-character Tunisian IBAN (ISO 7064 Modulo 97-10)
- `isValidLandline` - Validate landline numbers (prefixes 70-79) with region detection
- `isValidLicensePlate` - Validate standard Tunisian license plates

#### Formatters

- `formatPhone` - Format mobile to `22 555 111`
- `formatPhoneIntl` - Format mobile to `+216 22 555 111`
- `formatLandline` - Format landline to `71 234 567`
- `formatLandlineIntl` - Format landline to `+216 71 234 567`
- `formatCurrency` - Format to `1 250,500 TND` with millimes
- `formatCIN` - Pad CIN to 8 digits
- `formatIBAN` - Format IBAN in groups of 4 characters

#### Utilities

- `ribToIBAN` - Convert 20-digit RIB to 24-character IBAN
- `getBankFromRIB` - Get bank name from RIB
- `getRegionFromLandline` - Get region info from landline prefix
- `getDelegationsByGovernorate` - Get delegations for a governorate

#### Data

- `GOVERNORATES` - All 24 governorates with French & Arabic names
- `BANKS` - Bank codes for RIB identification
- `DELEGATIONS` - ~260 administrative delegations across all 24 governorates
- `LANDLINE_REGIONS` - 10 regional prefixes (70-79) with French & Arabic names

## [0.1.0] - 2026-01-12

### Added

#### Validators

- `isValidIBAN` - Validate 24-character Tunisian IBAN (ISO 7064 Modulo 97-10)
- `isValidLandline` - Validate landline numbers with region prefixes (71-78)
- `isValidLicensePlate` - Validate Tunisian license plates (Arabic & Latin formats)

#### Formatters

- `formatIBAN` - Format IBAN in groups of 4 characters
- `formatLandline` - Format landline to `71 234 567`
- `formatLandlineIntl` - Format landline to `+216 71 234 567`

#### Utilities

- `ribToIBAN` - Convert 20-digit RIB to 24-character IBAN
- `getRegionFromLandline` - Get region info from landline prefix
- `getDelegationsByGovernorate` - Get delegations for a governorate

#### Data

- `DELEGATIONS` - ~260 administrative delegations across all 24 governorates
- `LANDLINE_REGIONS` - 8 regional prefixes with French & Arabic names

## [0.0.1] - 2026-01-11

### Added

#### Validators

- `isValidCIN` - Validate 8-digit Tunisian National ID
- `isValidPhone` - Validate mobile numbers with provider detection
- `isValidRIB` - Validate 20-digit bank account (Modulo 97)
- `isValidMatricule` - Validate Company Tax ID (Matricule Fiscale)
- `isValidPassport` - Validate Tunisian passport format

#### Formatters

- `formatPhone` - Format mobile to `22 555 111`
- `formatPhoneIntl` - Format mobile to `+216 22 555 111`
- `formatCurrency` - Format to `1 250,500 TND`
- `formatCIN` - Pad CIN to 8 digits

#### Data

- `GOVERNORATES` - All 24 governorates with French & Arabic names
- `BANKS` - Bank codes for RIB identification
- `getBankFromRIB` - Get bank name from RIB
