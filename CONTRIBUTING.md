# Contributing to tunisia-kit

Thank you for your interest in contributing to tunisia-kit! 🇹🇳

## Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/tunisia-kit.git
   cd tunisia-kit
   ```
3. Use Node 24 (`nvm use`, matching `.nvmrc`) and install dependencies:
   ```bash
   npm ci
   ```
4. Run all local validation (lint, source/test/config types, coverage, build, packed consumers):
   ```bash
   npm run check
   ```

## Development Workflow

### Making Changes

1. Create a new branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes following our guidelines:
   - **Validators**: Use `isValid[Entity]` naming pattern
   - **Formatters**: Use `format[Entity]` naming pattern
   - **Zero dependencies**: Do not add external dependencies
   - **TypeScript**: All code must be fully typed

3. Add tests for your changes in the `tests/` directory

4. Run tests and ensure they pass:

   ```bash
   npm test
   ```

5. Build to check for TypeScript errors:
   ```bash
   npm run build
   ```

### Commit Messages

Use clear, descriptive commit messages:

- `feat: add isValidCNSS validator`
- `fix: correct IBAN check digit calculation`
- `docs: update README with new examples`
- `test: add edge cases for phone validation`

### Pull Request

1. Push your branch to your fork
2. Open a Pull Request against the `main` branch
3. Fill out the PR template with:
   - What changes you made
   - Why you made them
   - How to test them

## Code Guidelines

### File Structure

```
src/
├── validators/    # isValid* functions
├── formatters/    # format* functions
├── data/          # Static data and lookup functions
└── index.ts       # Main exports
```

### Naming Conventions

- Files: `kebab-case.ts`
- Functions: `camelCase`
- Constants: `SCREAMING_SNAKE_CASE`
- Types/Interfaces: `PascalCase`

### Return-value Convention

- **Lookups that can miss return `null`**, never `undefined`. This applies to
  `getBankFromRIB`, `getBankFromIBAN`, `getRegionFromLandline`,
  `getGovernorateFromPostalCode`, `getGovernorateFromDelegation`, and
  `getDelegationByName`. Ambiguous names also return `null`; provide a governorate
  ID or use a plural lookup for disambiguation. Plural lookups return readonly arrays.

### Testing

- Aim for 100% coverage on new code
- Include both valid and invalid test cases
- Test edge cases (empty strings, null, wrong types)

## Reference data and releases

Read [data sources](docs/DATA_SOURCES.md) and [migration notes](docs/MIGRATION.md)
before changing allocations or return-value behavior. Keep delegation IDs stable,
store alternate spellings as aliases, and preserve reference immutability. Do not
claim official validity without a primary source. Record the source commit/date
and add allocation-boundary tests when refreshing a dataset.

The contributor toolchain uses Node 24; the packed library's runtime floor is
Node 18. CI exercises that floor and maintained LTS runtimes. `npm run check`
includes the packed consumer fixtures and entry-point size budgets.

Tag publication reuses the complete CI gates and verifies that the `v*` tag
matches package.json. Keep the existing publishing token scoped and securely
stored. npm trusted publishing can replace it once the npm package's trusted
GitHub workflow is configured; removing the token before that configuration
would break releases.

## Questions?

Open an issue or reach out to [alaataieb.tn@gmail.com](mailto:alaataieb.tn@gmail.com)
