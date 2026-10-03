export { GOVERNORATES, type Governorate } from './governorates.js';
export { BANKS, getBankByCode, getBankFromRIB, getBankFromIBAN, type Bank } from './banks.js';
export {
  DELEGATIONS,
  getDelegationsByGovernorate,
  getGovernorateFromDelegation,
  getDelegationByName,
  getDelegationsByName,
  type Delegation
} from './delegations.js';
export { LANDLINE_REGIONS, getRegionFromLandline, type LandlineRegion } from './landline.js';
export {
  POSTAL_CODE_RANGES,
  getGovernorateFromPostalCode,
  getGovernorateCandidatesFromPostalCode
} from './postal-codes.js';
