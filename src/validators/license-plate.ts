/**
 * Validates a Tunisian license plate (Matricule).
 *
 * Standard formats:
 * - "123 تونس 4567" (Arabic, with or without spaces)
 * - "123 TU 4567"  (Latin representation, case-insensitive)
 *
 * Special series (best-effort, pending official confirmation):
 * - Diplomatic corps: "12 CD 34" (CD = Corps Diplomatique)
 * - Résident Secondaire / rental: "RS 12345 AB"
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

  return (
    arabicPattern.test(cleaned) ||
    latinPattern.test(cleaned) ||
    diplomaticPattern.test(cleaned) ||
    rentalPattern.test(cleaned)
  );
}
