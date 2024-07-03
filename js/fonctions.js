// Demander le mail de l'utilisateur
let mailUser = prompt("Veuillez entrer votre mail ?");

// Fonction de vérification
function isValidEmail(email) {
    // Expression régulière pour vérifier la validité d'une adresse e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Tester la chaîne de caractères avec l'expression régulière
    return emailRegex.test(email);
}

// Vérification du mail entré par le user
let resultatTest = isValidEmail(mailUser);

// Affichage du message d'erreur en cas de email non valide
if (resultatTest == false) {
    alert("Vous n'avez pas saisie une adresse mail valide");
} else {
    console.log(mailUser)
}

