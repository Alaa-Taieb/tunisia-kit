# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
- `DELEGATIONS` - 60+ administrative delegations across 10 governorates
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
- `POSTAL_CODES` - 24 major cities with postal codes
- `getBankFromRIB` - Get bank name from RIB
