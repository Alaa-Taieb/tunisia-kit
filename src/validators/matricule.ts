/**
 * Validates a Tunisian Company Tax ID (Matricule Fiscale).
 * Format: 1234567/X/A/M/000
 * - 7 digits
 * - 1 letter (category)
 * - 1 letter (type: A, B, P, D, N)
 * - 1 letter (M for main, S for secondary)
 * - 3 digits (establishment number)
 * 
 * Accepts formats with or without separators (/, spaces)
 */
export function isValidMatricule(mat: string): boolean {
    if (typeof mat !== 'string') return false;

    // Remove common separators
    const cleaned = mat.replace(/[\s/\\-]/g, '').toUpperCase();

    // Pattern: 7 digits + 1 letter + 1 letter (A,B,P,D,N) + 1 letter (M,S) + 3 digits
    const pattern = /^\d{7}[A-Z][ABPDN][MS]\d{3}$/;

    return pattern.test(cleaned);
}
