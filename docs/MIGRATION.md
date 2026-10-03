# Migration from 0.4.0 to 1.0.0

Version 1.0.0 changes permissive behavior. Review stored data and form
handling before upgrading.

- `formatCIN` preserves overlong/malformed strings rather than truncating or
  discarding arbitrary characters. Numeric input may still be zero-padded;
  spaces/dashes and Arabic/Persian digits are supported. Non-string input yields ''.
- Currency helpers return '' for invalid/non-finite input, preserving the
  distinction between invalid data and zero. All finite numbers are supported;
  decimal rounding follows Intl.NumberFormat. These helpers are for display,
  not accounting arithmetic. Use integer millimes for stored money values.
- `ribToIBAN` rejects invalid domestic checksums. `isValidRIB` rejects zero
  placeholders and noncanonical keys; `isValidIBAN` checks the domestic RIB
  as well as its canonical ISO check digits and outer checksum.
- Bank document lookup requires a checksum-valid full document. Use
  `getBankByCode` to extract a reference label from a two-digit code.
- Phone validity follows the pinned numbering metadata instead of broad
  first-digit guesses. 6/49-prefix mobile numbers are rejected; supported
  3-prefix numbers are accepted. `PhoneProvider` no longer includes Lycamobile.
  Carrier mappings for 45/46/48 are more specific; unknown carrier allocations
  yield null. 70/79 fixed-line inputs no longer receive a guessed region.
- Arabic/Persian digits are accepted by phone/postal input parsing. Phone
  formatters require numeric shape; malformed strings are preserved. IBAN
  formatting requires Tunisian syntax and preserves malformed strings.
- `getDelegationByName` returns null instead of undefined for missing input.
  Both singular delegation helpers return null for ambiguous names. Supply
  an optional governorate ID or use `getDelegationsByName` to disambiguate.
  Delegations have stable package IDs. `Mourouj` remains an alias of `El Mourouj`.
- Shared 11xx/20xx postal blocks yield null from singular lookup. Use
  `getGovernorateCandidatesFromPostalCode` for approximate candidates.
  `POSTAL_CODE_RANGES` now omits those ambiguous blocks.
- Reference arrays, objects, nested arrays, and lookup results are readonly
  and frozen. Copy records before editing them in an application.
- Validators and defensive helpers accept unknown input without requiring
  TypeScript casts. Missing lookup results consistently use null (or [] for
  plural lookup); malformed string formatting preserves input, while
  non-string input returns ''. Formatters do not establish issued validity.

The installed library still supports Node >=18. Development uses Node 24
(`.nvmrc`) and Vitest 4; installing the contributor toolchain on Node 18 is
not supported. CI tests the packed library on Node 18.0.0, 20, 22, and 24,
and tests declaration routing with Node16, NodeNext, and bundler resolution.
