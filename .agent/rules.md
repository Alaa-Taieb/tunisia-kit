# Project Rules

## Tech Stack

- [x] Language: TypeScript 5.0+
- [x] Build: TSC with ES modules output
- [x] Testing: Vitest (or Jest)
- [x] Target: Node.js, Browser, React Native, standard JS
- [x] Package Manager: npm (or yarn)
- [x] License: MIT

## Versioning

This project follows **[Semantic Versioning (SemVer)](https://semver.org/)** with the format `MAJOR.MINOR.PATCH`.

### Version Bump Guidelines

| Change Type | Version Bump | Examples |
|-------------|--------------|----------|
| **Breaking changes** | MAJOR (X.0.0) | Removing a function, changing function signatures, renaming exports |
| **New features** | MINOR (0.X.0) | Adding new validators, formatters, or data sets |
| **Bug fixes/patches** | PATCH (0.0.X) | Fixing validation logic, correcting data, documentation updates |

### Pre-Release Versions

- Use `-alpha.X`, `-beta.X`, or `-rc.X` suffixes for pre-release versions
- Example: `2.0.0-beta.1` for v2.0 beta testing

### Changelog Requirements

1. **Always update** `CHANGELOG.md` before any release
2. Follow the **[Keep a Changelog](https://keepachangelog.com/)** format
3. Group changes under: `Added`, `Changed`, `Deprecated`, `Removed`, `Fixed`, `Security`
4. Include the release date in ISO format: `## [1.2.0] - 2026-01-15`

### Release Process

1. [ ] Ensure all tests pass: `npm test`
2. [ ] Verify build succeeds: `npm run build`
3. [ ] Update version in `package.json`
4. [ ] Update `CHANGELOG.md` with new version section
5. [ ] Commit with message: `chore: release vX.X.X`
6. [ ] Create git tag: `git tag vX.X.X`
7. [ ] Push with tags: `git push && git push --tags`
8. [ ] Publish to npm: `npm publish`

## Directory Structure

```
tunisia-kit/
├── src/
│   ├── validators/
│   │   ├── index.ts
│   │   ├── cin.ts
│   │   ├── phone.ts
│   │   ├── rib.ts
│   │   ├── matricule.ts
│   │   ├── passport.ts
│   │   ├── iban.ts          # v2.0
│   │   ├── landline.ts      # v2.0
│   │   └── license-plate.ts # v2.0
│   ├── formatters/
│   │   ├── index.ts
│   │   ├── phone.ts
│   │   ├── currency.ts
│   │   ├── cin.ts
│   │   └── iban.ts          # v2.0
│   ├── data/
│   │   ├── index.ts
│   │   ├── governorates.ts
│   │   ├── banks.ts
│   │   ├── postal-codes.ts
│   │   ├── delegations.ts   # v2.0
│   │   └── landline.ts      # v2.0
│   └── index.ts (Main entry point)
├── tests/
│   ├── cin.test.ts
│   ├── phone.test.ts
│   ├── rib.test.ts
│   ├── iban.test.ts         # v2.0
│   ├── landline.test.ts     # v2.0
│   ├── license-plate.test.ts # v2.0
│   └── ...
├── package.json
├── tsconfig.json
└── README.md
```

## Naming Conventions

- [x] Files: `kebab-case.ts`
- [x] Classes: `PascalCase`
- [x] Variables/Functions: `camelCase`
- [x] Constants: `SCREAMING_SNAKE_CASE`
- [x] Validators: `isValid[Entity]` pattern (e.g., `isValidCIN`)
- [x] Formatters: `format[Entity]` pattern (e.g., `formatPhone`)

## Verification Steps

- [x] **Automated Tests**: Run `npm test` with 100% coverage before any release
- [x] **Linting**: Ensure code passes ESLint checks
- [x] **Build**: Verify `npm run build` succeeds
- [x] **Bundle Size**: Confirm gzipped output < 5kb
- [x] **Type Check**: Ensure `tsc --noEmit` passes
- [x] **Known Valid/Invalid Data**: Test against curated lists of real CINs, RIBs, phone numbers

## Validation Rules Reference

### CIN
- Exactly 8 digits
- Numbers only
- Optional: Valid starting ranges (0-1 for pre-2000s)

### Phone (Mobile)
- Formats: `99999999`, `+21699999999`, `0021699999999`
- Provider prefixes: TT (9x, 4x), Ooredoo (2x), Orange (5x)

### Landline (v2.0)
- Exactly 8 digits starting with `7`
- Region prefixes: `71` = Tunis, `72` = Northeast, `73` = Sahel, `74` = Sfax, `75` = Gafsa, `76` = Gabes, `77` = Kasserine, `78` = Bizerte

### RIB
- Exactly 20 digits
- Modulo 97 check digit: `97 - (Total mod 97)`

### IBAN (v2.0)
- Exactly 24 characters starting with `TN`
- Format: `TN` + 2 check digits + 20-digit RIB
- ISO 7064 Modulo 97-10 validation

### Matricule Fiscale
- Format: `1234567 X A M 000`
- Regex structure validation

### Passport
- Alphanumeric: 1 letter followed by digits

### License Plate (v2.0)
- Standard format: `XXX تونس XXXX` (3 digits + تونس + 4 digits)
- Accept Arabic or Latin representation

