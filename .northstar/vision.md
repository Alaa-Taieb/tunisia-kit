# tunisia-kit — Vision

## What it is
A type-safe, zero-dependency npm package that standardizes validation and formatting of Tunisian data — CIN, mobile and landline phones, RIB, IBAN, matricule fiscale, passport, license plate, postal code and currency — plus bilingual (French/Arabic) reference data for governorates, delegations and banks.

## Who it is for
- Tunisian web developers who want reliable validators instead of copy-pasted regexes.
- Startups and SaaS platforms operating in Tunisia handling financial (RIB/IBAN) and identity (CIN) data.
- Developers targeting Node.js, browsers and React Native who need one small universal library.

## Principles
- Zero runtime dependencies; tree-shakeable, side-effect free, small bundle.
- TypeScript-first with exported types; dual ESM + CommonJS distribution.
- 100% test coverage enforced in CI.
- Honest validation scope: checks syntax, documented allocations and checksums only, with sourced data and documented limitations — never claims to prove a person, account or subscriber exists.

## Out of scope
- Live lookups against external services or directories.
- A full postal-address database.

## Status
v1.0.0 is released (2026-10-03). Future direction is not yet defined (Unknown).
