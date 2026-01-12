// Validators
export {
    isValidCIN,
    isValidPhone,
    isValidRIB,
    isValidMatricule,
    isValidPassport,
    isValidIBAN,
    ribToIBAN,
    isValidLandline,
    isValidLicensePlate
} from './validators/index.js';

// Formatters
export {
    formatPhone,
    formatPhoneIntl,
    formatLandline,
    formatLandlineIntl,
    formatCurrency,
    formatCIN,
    formatIBAN
} from './formatters/index.js';

// Data
export {
    GOVERNORATES,
    BANKS,
    POSTAL_CODES,
    DELEGATIONS,
    LANDLINE_REGIONS,
    getBankFromRIB,
    getDelegationsByGovernorate,
    getRegionFromLandline,
    type Governorate,
    type Bank,
    type PostalCode,
    type Delegation,
    type LandlineRegion
} from './data/index.js';

