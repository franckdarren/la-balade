// Fonction de vérification
export function isValidEmail(email) {
    // Expression régulière pour vérifier la validité d'une adresse e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Tester la chaîne de caractères avec l'expression régulière
    return emailRegex.test(email);
}
