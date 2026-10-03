# Data sources and validation scope

Verified reference snapshot: 2026-10-03. Validators check syntax, supported
allocations, and the documented checksums. They cannot prove that a person,
subscriber, bank account, vehicle, or postal address exists.

## Phone allocations

Mobile and fixed-line patterns are derived from Google libphonenumber's TN
metadata at commit `0ae309f1940227efe688f5eb1815ef45a6fbee8d`:

- [TN numbering metadata](https://github.com/google/libphonenumber/blob/0ae309f1940227efe688f5eb1815ef45a6fbee8d/resources/PhoneNumberMetadata.xml)
- [Prefix-assigned operators](https://github.com/google/libphonenumber/blob/0ae309f1940227efe688f5eb1815ef45a6fbee8d/resources/carrier/en/216.txt)
- The carrier source cites [ITU's Tunisia numbering plan](https://www.itu.int/dms_pub/itu-t/oth/02/02/T02020000D50002PDFE.pdf).

This is a maintained reference, not a live subscriber directory. It supports
some 3-prefix mobile allocations and 3-prefix/81200 fixed-line allocations;
it excludes 6-prefix mobile numbers and 49-prefix numbers. Provider lookup
uses specific 45/46/48 assignments and reports Watany Ettisalat's Ooredoo
brand. Supported 3-prefix mobile allocations have no carrier mapping in the
snapshot, so provider lookup returns null. Number portability means any
prefix-assigned operator can differ from the current operator.

`LANDLINE_REGIONS` contains approximate legacy geographic mappings for 71–78.
The previously asserted geographic mapping for 70/79 has been removed.
Other valid fixed-line allocations return null from region lookup. A region
label must not be used as an authoritative subscriber location.

The Apache-2.0 attribution and license are included in THIRD_PARTY_NOTICES.md.
For an update, record a new source commit/date, review changed allocations,
and update boundary tests together. Do not turn an unknown carrier into a guess.

## Financial identifiers

RIB syntax is two bank digits, three branch digits, thirteen account digits,
and two check digits. The canonical domestic key is
`97 - ((first18digits * 100) mod 97)` (01–97). The all-zero account body is
rejected. Tunisian IBANs have 24 characters: TN, two canonical ISO 7064 check
digits (02–98), and the RIB. IBAN validation checks both checksums.

The fixed registry example `TN5910006035183598478831` is tested independently
of the package's generator. Checksum arithmetic is tested against a separate
BigInt implementation. Neither check establishes account ownership/existence.

`BANKS` is the repository's historical bank-code table, not a live or complete
registry. Its original primary-source provenance is unavailable. Code lookup
returns a historical reference label; unknown codes yield null. Bank mappings
must be checked against Banque Centrale de Tunisie before being relied on for
regulated bank identification. This limitation is separate from checksum
validation, which does not require a known bank code.

## Delegations and governorates

The bilingual records are the repository's historical administrative dataset;
no dated official release was supplied with the original data. They are not
claimed to be a complete current administrative registry. Governorate IDs and
delegation IDs are package identifiers, not official administrative codes.
Delegation IDs are explicit and must stay unchanged when labels are corrected.

Records and aliases are immutable. `Mourouj` is an alias of `El Mourouj` rather
than a second dropdown record. Names can occur in multiple governorates:
singular lookup returns null for ambiguity; pass a governorate ID or use
`getDelegationsByName` to retrieve all candidates. Integrity tests check IDs,
foreign keys, and canonical names/aliases within each governorate.

## Postal codes

`isValidPostalCode` checks the historical four-digit range 1000–9299 only; it
does not establish that a code is assigned. Postal ranges are approximate
groupings, originally based on the [postal-code overview](https://en.wikipedia.org/wiki/Postal_codes_in_Tunisia).
They are not an official La Poste address dataset.

11xx and 20xx are shared blocks. `getGovernorateCandidatesFromPostalCode`
returns possible governorates for grouping; `getGovernorateFromPostalCode`
returns null for shared blocks instead of selecting a representative. Even
a single candidate is approximate. An unmapped but well-formed code can
validate successfully and return no candidates. Exact address resolution
requires an independently maintained official locality/code dataset.

## Other document formats

CIN validation checks eight ASCII digits and rejects the all-zero placeholder.
Passport, matricule fiscal, and license-plate validators check documented
format patterns only. The historical patterns are not backed here by a dated
primary specification; they do not establish issuance or validate a tax
control-letter checksum. Do not describe these checks as identity verification
or change their allocations based on invented rules.
