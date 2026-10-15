# tunisia-kit — Specification

Source of truth for behaviour: README.md, docs/DATA_SOURCES.md, docs/MIGRATION.md, CHANGELOG.md and the test suite in tests/.

## Modules (package exports)
- `tunisia-kit` (root) re-exports everything.
- `tunisia-kit/validators`: isValidCIN, isValidPhone, getPhoneProvider, isValidLandline, isValidRIB, isValidIBAN, ribToIBAN, isValidMatricule, isValidPassport, isValidLicensePlate, isValidPostalCode.
- `tunisia-kit/formatters`: formatPhone, formatPhoneIntl, formatPhoneAr, formatLandline, formatLandlineIntl, formatIBAN, formatCurrency, formatCurrencyAr, formatCIN.
- `tunisia-kit/data`: GOVERNORATES, DELEGATIONS (+ lookups by name/governorate), BANKS (+ getBankByCode/FromRIB/FromIBAN), LANDLINE_REGIONS (+ getRegionFromLandline), POSTAL_CODE_RANGES (+ governorate / candidate lookups).

## Quality gates
`npm run check` = lint + typecheck + coverage (100%) + build + packed-package test. CI also runs npm audit and runtime checks on Node 18.0.0/20/22/24. Releases publish via a tag-triggered GitHub workflow.

## Unknowns
- Unknown: planned features after v1.0.0.
- Unknown: bundle-size budget currently enforced (blueprint mentions <5kb gzipped; scripts include bundle budgets).
