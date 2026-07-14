export { GOVERNORATES, type Governorate } from './governorates.js';
export { BANKS, getBankFromRIB, getBankFromIBAN, type Bank } from './banks.js';
export {
  DELEGATIONS,
  getDelegationsByGovernorate,
  getGovernorateFromDelegation,
  getDelegationByName,
  type Delegation
} from './delegations.js';
export { LANDLINE_REGIONS, getRegionFromLandline, type LandlineRegion } from './landline.js';
export { POSTAL_CODE_RANGES, getGovernorateFromPostalCode } from './postal-codes.js';
