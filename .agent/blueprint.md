# Project Blueprint

## Vision

> A type-safe, zero-dependency npm package that standardizes Tunisian data validation and formatting utilities—CIN, phone numbers, RIB, IBAN, currency, and more—into a single, battle-tested library under 5kb gzipped.

## User Personas

- **Tunisian Web Developers**: Need reliable, copy-paste-free utilities for validating CIN, phone numbers, and RIBs without reinventing the wheel every project.
- **Startups & SaaS Platforms**: Operating in Tunisia and requiring robust, tested validation logic for financial (RIB, IBAN) and identity (CIN) data.
- **Multi-platform Developers**: Building for Node.js, Browser, and React Native who need a universal, lightweight solution.

## MVP Features (v1.0) ✅

### Module A: Validators (`/validators`)
- [x] `isValidCIN(cin)` - Validate 8-digit Tunisian National ID
- [x] `isValidPhone(phone)` - Validate mobile numbers with provider prefix detection (TT: 9x/4x, Ooredoo: 2x, Orange: 5x)
- [x] `isValidRIB(rib)` - Validate 20-digit bank account with Modulo 97 check digit
- [x] `isValidMatricule(mat)` - Validate Company Tax ID (Matricule Fiscale)
- [x] `isValidPassport(pass)` - Validate Tunisian Passport format

### Module B: Formatters (`/formatters`)
- [x] `formatPhone(str)` - Format to `22 555 111`
- [x] `formatPhoneIntl(str)` - Format to `+216 22 555 111`
- [x] `formatCurrency(num)` - Format to `1 250,500 TND` with millimes
- [x] `formatCIN(str)` - Ensure 8-digit padding

### Module C: Static Data (`/data`)
- [x] `GOVERNORATES` - All 24 governorates (French & Arabic)
- [x] `POSTAL_CODES` - City to postal code mappings
- [x] `BANKS` - Bank codes for RIB identification (e.g., 12 = BIAT)
- [x] `getBankFromRIB(rib)` - Identify bank from RIB code

---

## v2.0 Features ✅

### Module A: New Validators
- [x] `isValidIBAN(iban)` - Validate 24-character Tunisian IBAN (ISO 7064)
- [x] `isValidLandline(phone)` - Validate landline numbers (7x prefix, region detection)
- [x] `isValidLicensePlate(plate)` - Validate standard Tunisian license plates

### Module B: New Formatters
- [x] `formatIBAN(iban)` - Format IBAN in groups of 4 characters
- [x] `formatLandline(phone)` - Format landline to `71 XXX XXX`
- [x] `formatLandlineIntl(phone)` - Format landline to `+216 71 XXX XXX`

### Module C: New Utilities
- [x] `ribToIBAN(rib)` - Convert 20-digit RIB to 24-character IBAN
- [x] `getRegionFromLandline(phone)` - Identify region from landline prefix
- [ ] `getBranchFromRIB(rib)` - Get bank branch info from RIB *(Deferred)*

### Module D: Data Expansion
- [x] `DELEGATIONS` - All delegations with governorate mapping
- [x] `LANDLINE_REGIONS` - Prefix to region name mapping
- [ ] Expanded `POSTAL_CODES` - 50+ major cities *(Deferred)*


## Non-Goals

- [ ] Backend API or server-side services
- [ ] Any external dependencies (must remain zero-dep)
- [ ] UI components or React-specific hooks
- [ ] Historical data validation (focus on current formats)

