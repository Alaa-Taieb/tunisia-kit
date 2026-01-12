/**
 * Validates a Tunisian license plate (Matricule).
 * 
 * Standard format: XXX تونس XXXX
 * - 3 digits (series number)
 * - تونس (Tunisia in Arabic) or "TU" (Latin representation)
 * - 4 digits (plate number)
 * 
 * Accepts various formats:
 * - "123 تونس 4567" (Arabic with spaces)
 * - "123تونس4567" (Arabic without spaces)
 * - "123 TU 4567" (Latin representation)
 * - "123TU4567" (Latin without spaces)
 */
export function isValidLicensePlate(plate: string): boolean {
    if (typeof plate !== 'string') return false;

    // Remove all spaces
    const cleaned = plate.replace(/\s/g, '');

    // Pattern 1: Arabic format (تونس)
    const arabicPattern = /^\d{3}تونس\d{4}$/;

    // Pattern 2: Latin format (TU or Tunisia)
    const latinPattern = /^\d{3}TU\d{4}$/i;

    return arabicPattern.test(cleaned) || latinPattern.test(cleaned);
}
