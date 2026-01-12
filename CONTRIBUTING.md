# Contributing to tunisia-kit

Thank you for your interest in contributing to tunisia-kit! 🇹🇳

## Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/tunisia-kit.git
   cd tunisia-kit
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run tests to make sure everything works:
   ```bash
   npm test
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

### Testing

- Aim for 100% coverage on new code
- Include both valid and invalid test cases
- Test edge cases (empty strings, null, wrong types)

## Questions?

Open an issue or reach out to [alaataieb.tn@gmail.com](mailto:alaataieb.tn@gmail.com)
