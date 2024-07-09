import { isValidEmail } from './fonctions.js';



// Demander le mail de l'utilisateur
let mailUser = prompt("Veuillez entrer votre mail ?");

// Vérification du mail entré par le user
let resultatTest = isValidEmail(mailUser);

// Affichage du message d'erreur en cas de email non valide
if (resultatTest == false) {
    alert("Vous n'avez pas saisie une adresse mail valide");
} else {
    console.log(mailUser)
}