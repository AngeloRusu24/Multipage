// Selezioniamo gli elementi per il menu a tendina mobile
let btnHamburger = document.getElementById("btnHamburger");
let menuNavigazione = document.getElementById("menuNavigazione");


// Gestione dell'apertura/chiusura del menu responsive
btnHamburger.addEventListener("click", function() {
    menuNavigazione.classList.toggle("mostraMenu");
});

// FUNZIONALITÀ EXTRA PER LA HOME PAGE (Modifica dinamica al click del bottone)
let btnContatta = document.getElementById("btnContatta");
let areaMessaggio = document.getElementById("areaMessaggio");

btnContatta.addEventListener("click", function() {
    // Cambiamo il testo e lo stile dell'area messaggio dinamicamente
    areaMessaggio.innerText = "Grazie per l'interesse! Reindirizzamento alla pagina Info in corso...";
    areaMessaggio.className = "messaggio-successo";
    
    // Simuliamo un'operazione asincrona (attesa di 2 secondi) prima di cambiare pagina
    setTimeout(function() {
        window.location.href = "info.html"; // Sposta l'utente sulla pagina Info!
    }, 2000);
});

//sezione pagina prodotti JS

//Selezioniamo tutti i bottoni "Scopri di più" presenti nelle card
let bottoniProdotti = document.querySelectorAll(".btn-prodotto");

// Applichiamo un evento click a ciascun bottone dei prodotti
bottoniProdotti.forEach(function(bottone) {
    bottone.addEventListener("click", function() {
        let nomeProdotto = bottone.dataset.nome;
        
        // Esempio di interazione
        alert("Hai richiesto maggiori informazioni per il servizio: " + nomeProdotto + "Questa funzionalità sarà disponibile a breve.");
    });
});