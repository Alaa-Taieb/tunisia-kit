/**
 * Validates a Tunisian license plate (Matricule).
 *
 * Standard formats:
 * - "123 تونس 4567" (Arabic, with or without spaces)
 * - "123 TU 4567"  (Latin representation, case-insensitive)
 *
 * Special series (per ATT.TN documentation):
 * - Diplomatic corps: "12 CD 34" (CD = Corps Diplomatique)
 * - Résident Secondaire / rental: "RS 12345 AB"
 * - Motorcycle: "01 MN 1234"
 * - Tractor: "01 TRAC 1234"
 * - PAT — Personnel Administratif et Technique: "01 MF 01"
 * - CMD — Chef de Mission Diplomatique: "01 RB 01"
 * - MD — Mission Diplomatique: "01 SD 01"
 * - MC — Mission Consulaire: "01 TQ 01"
 *
 * @see https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Tunisia
 */
export function isValidLicensePlate(plate: string): boolean {
  if (typeof plate !== 'string') return false;

  // Remove all spaces
  const cleaned = plate.replace(/\s/g, '');

  // Pattern 1: Arabic format (تونس)
  const arabicPattern = /^\d{3}تونس\d{4}$/;

  // Pattern 2: Latin standard format (TU or Tunisia)
  const latinPattern = /^\d{3}TU\d{4}$/i;

  // Pattern 3: Diplomatic corps (CD = Corps Diplomatique)
  const diplomaticPattern = /^\d{2}CD\d{2}$/i;

  // Pattern 4: Résident Secondaire / rental (RS)
  const rentalPattern = /^RS\d{5}[A-Z]{2}$/i;

  // Pattern 5: Motorcycle (MN)
  const motoPattern = /^\d{2}MN\d{4}$/i;

  // Pattern 6: Tractor (TRAC)
  const tracteurPattern = /^\d{2}TRAC\d{4}$/i;

  // Pattern 7: PAT — Personnel Administratif et Technique (MF)
  const patPattern = /^\d{2}MF\d{2}$/i;

  // Pattern 8: CMD — Chef de Mission Diplomatique (RB)
  const cmdPattern = /^\d{2}RB\d{2}$/i;

  // Pattern 9: MD — Mission Diplomatique (SD)
  const mdPattern = /^\d{2}SD\d{2}$/i;

  // Pattern 10: MC — Mission Consulaire (TQ)
  const mcPattern = /^\d{2}TQ\d{2}$/i;

  return (
    arabicPattern.test(cleaned) ||
    latinPattern.test(cleaned) ||
    diplomaticPattern.test(cleaned) ||
    rentalPattern.test(cleaned) ||
    motoPattern.test(cleaned) ||
    tracteurPattern.test(cleaned) ||
    patPattern.test(cleaned) ||
    cmdPattern.test(cleaned) ||
    mdPattern.test(cleaned) ||
    mcPattern.test(cleaned)
  );
}
