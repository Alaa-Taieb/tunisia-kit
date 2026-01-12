# Decision Journal

| Date | Decision | Rationale | Impact |
| :--- | :--- | :--- | :--- |
| 2026-01-11 | Zero dependencies philosophy | Keep bundle size < 2kb gzipped; avoid supply chain vulnerabilities; maximize compatibility across platforms | All validation/formatting logic must be hand-written; no moment.js, no lodash |
| 2026-01-11 | TypeScript-first with full type definitions | Target audience expects type safety; improves DX in modern IDEs; catches validation logic errors at compile time | All source in TypeScript; must export `.d.ts` files |
| 2026-01-11 | Modular exports (`/validators`, `/formatters`, `/data`) | Enable tree-shaking; users only import what they need | Directory structure mirrors export paths; each module has own `index.ts` |
| 2026-01-11 | 100% test coverage requirement | Library handles money (RIB) and identity (CIN) data—trust is critical | Vitest/Jest required; CI must fail on coverage < 100% |
| 2026-01-11 | RIB validation uses Modulo 97 algorithm | Industry-standard check digit validation for bank accounts | Must implement `97 - (Total mod 97)` algorithm correctly |
| 2026-01-12 | v2.0 feature expansion | Add IBAN, landline, license plate validators; expand data coverage | New files: `iban.ts`, `landline.ts`, `license-plate.ts`, `delegations.ts`; bundle size target increased to 5kb |
| 2026-01-12 | Npm prep with 2FA bypass | Configure package metadata (author, repo, scripts) and use Granular Access Tokens with 2FA bypass for publishing | Added `LICENSE`, `CONTRIBUTING.md`, `CHANGELOG.md`, `.npmignore`; enables automated publishing while maintaining security via scoped tokens |
