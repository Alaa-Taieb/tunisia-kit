// Validators
export {
  isValidCIN,
  isValidPhone,
  getPhoneProvider,
  isValidRIB,
  isValidMatricule,
  isValidPassport,
  isValidIBAN,
  ribToIBAN,
  isValidLandline,
  isValidLicensePlate,
  isValidPostalCode,
  type PhoneProvider
} from './validators/index.js';

// Formatters
export {
  formatPhone,
  formatPhoneIntl,
  formatPhoneAr,
  formatLandline,
  formatLandlineIntl,
  formatCurrency,
  formatCurrencyAr,
  formatCIN,
  formatIBAN
} from './formatters/index.js';

// Data
export {
  GOVERNORATES,
  BANKS,
  DELEGATIONS,
  LANDLINE_REGIONS,
  POSTAL_CODE_RANGES,
  getBankFromRIB,
  getBankFromIBAN,
  getDelegationsByGovernorate,
  getGovernorateFromDelegation,
  getDelegationByName,
  getGovernorateFromPostalCode,
  getRegionFromLandline,
  type Governorate,
  type Bank,
  type Delegation,
  type LandlineRegion
} from './data/index.js';
