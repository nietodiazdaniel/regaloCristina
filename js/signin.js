'use strict';
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (password === "280721") {
        document.getElementById("welcomeMessage").textContent = "Has acertado la contraseña " + username + " . Comenzamos con los juegos! ";
        const welcomeModal = new bootstrap.Modal(document.getElementById('welcomeModal'));
        welcomeModal.show();
    } else {
        errorMessage.textContent = "Contraseña incorrecta. Intenta de nuevo.";
    }
});
