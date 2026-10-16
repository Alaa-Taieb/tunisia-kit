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
follows the carrier file: 46/48 are Ooredoo and other 4x blocks are Tunisie
Telecom, except 45, which is assigned to the MVNO Watany Ettisalat (also in
the ITU plan) and returns null because MVNOs are not `PhoneProvider` values.
Supported 3-prefix mobile allocations have no carrier mapping in the
snapshot, so provider lookup returns null. Number portability means any
prefix-assigned operator can differ from the current operator.

`LANDLINE_REGIONS` contains approximate legacy geographic mappings for 71–78,
following [Telephone numbers in Tunisia](https://en.wikipedia.org/wiki/Telephone_numbers_in_Tunisia)
and cross-checked (2026-10-16) against office numbers in the Ministry of
Finance directory: 75 covers Gabès, Médenine, Tataouine and Kebili; 76 covers
Gafsa, Tozeur and Sidi Bouzid; 77 covers Kairouan and Kasserine. In 1.0.0
the 75/76 governorates were swapped and Sidi Bouzid was listed under 77.
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

`BANKS` maps the two-digit RIB bank code ("code banque") to institutions listed
in the Banque Centrale de Tunisie publication
[Structure du système financier tunisien](https://www.bct.gov.tn/bct/siteprod/documents/STRUCTURE_FR.pdf)
(undated; reviewed 2026-10-16), including resident, non-resident, merchant and
offshore-branch codes, plus La Poste Tunisienne (CCP, code 17), which is not a
BCT-licensed bank. Major codes were cross-checked against published RIBs/IBANs.
Version 1.0.0 had most codes shuffled (for example BIAT is 08, not 10;
STB is 10, not 02). It is not a live registry; unknown codes yield null. This
is separate from checksum validation, which does not require a known bank code.

## Delegations and governorates

The 279 delegations, their governorates and Arabic names were checked against
the Institut National de la Statistique 2024 census list
([Population par secteur](https://www.ins.tn/sites/default/files-ftp3/files/2025-05/Population_Secteur_Age_Sexe_Dynamique.xlsx))
and the INS 2012 geographic code list (264 delegations). French labels keep the
package's established transliterations, which can differ from INS spellings.
Governorate IDs and delegation IDs are package identifiers, not official
administrative codes. Delegation IDs are explicit and must stay unchanged when
labels are corrected. Sidi Bou Said (Carthage) and Den Den (Manouba) are
sectors, not delegations; they are lookup aliases of their delegation.

Records and aliases are immutable. `Mourouj` is an alias of `El Mourouj` rather
than a second dropdown record. Names can occur in multiple governorates:
singular lookup returns null for ambiguity; pass a governorate ID or use
`getDelegationsByName` to retrieve all candidates. Integrity tests check IDs,
foreign keys, and canonical names/aliases within each governorate.

## Postal codes

`isValidPostalCode` checks the historical four-digit range 1000–9299 only; it
does not establish that a code is assigned. Postal ranges are approximate
groupings, originally based on the [postal-code overview](https://en.wikipedia.org/wiki/Postal_codes_in_Tunisia).
On 2026-10-16 every block was checked against La Poste Tunisienne's
[code search](https://www.poste.tn/codes.php); no assigned code falls outside
its listed block, and the highest assigned code was 9183. The package is still
not an official La Poste address dataset.

11xx and 20xx are shared blocks. `getGovernorateCandidatesFromPostalCode`
returns possible governorates for grouping; `getGovernorateFromPostalCode`
returns null for shared blocks instead of selecting a representative. Even
a single candidate is approximate. An unmapped but well-formed code can
validate successfully and return no candidates. Exact address resolution
requires an independently maintained official locality/code dataset.

## Other document formats

CIN validation checks eight ASCII digits and rejects the all-zero placeholder.
Passport and matricule fiscal validators check documented format patterns
only. The historical patterns are not backed here by a dated primary
specification; they do not establish issuance or validate a tax control-letter
checksum. Do not describe these checks as identity verification or change
their allocations based on invented rules.

License-plate layouts follow
[Plaque d'immatriculation tunisienne](https://fr.wikipedia.org/wiki/Plaque_d%27immatriculation_tunisienne),
the [Arabic article](https://ar.wikipedia.org/wiki/لوحات_تسجيل_المركبات_في_تونس),
[automobile.tn's series table](https://www.automobile.tn/fr/guide/dernieres-immatriculations.html)
and dated plate photographs on Wikimedia Commons (reviewed 2026-10-16). The
standard series number has 1–3 digits (three digits since about 2001) and the
vehicle number 1–4 digits without zero-padding. `TU`, `RS`, `MOTO` and `TRAC`
are the Latin administrative symbols for تونس, ن ت (régime suspensif), د ن
(motorcycle) and ج ف (tractor); plates themselves print the Arabic letters.
Diplomatic and consular plates use a 2-digit mission code and a 2-digit number;
longer vehicle numbers are not documented here and are rejected. Other series
(trailers, temporary registration, dealer, government and security plates) are
not supported. The 1.0.0 `MN`, `MF`, `RB`, `SD`, `TQ` and `RS12345AB`
patterns had no source and were removed; `SD` (س د) is actually the CD series.
