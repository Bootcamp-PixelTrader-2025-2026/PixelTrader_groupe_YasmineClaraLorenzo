async function getOriginalCSV(url) {

    const Request = await fetch(url);
    const Data = await Request.text();

    const GameArray = Data.split("\n")

    GameArray.forEach(Game => {
        Game = Game.split(";");

        // gestion des Etats (Excellent, Bon, Moyen, Mauvais)
        let state = Game[4].toLowerCase()

        if(
           state == "excellent" || state == "comme neuf" || state == "platinum"
        || state == "neuf" || state == "collector" || state == "mint"
        || state == "big box" || state == "blister" || state == "steelbook") {
            
            Game[4] = "Excellent";
        } else if (
           state == "bon" || state == "good" || state == "bon etat"
        || state == "jap"){
            
            Game[4] = "Bon"
        } else if (
           state == "moyen" || state == "boite abimée" || state == "sans notice" || state == "cabinet"
        || state == "boite manquante" || state == "sans boite" || state == "occasion"
        || state == "loose" || state == "boite" || state == "use" || state == "pile hs"){
            
            Game[4] = "Moyen"
        } else if (
           state == "mauvais" || state == "abimé" || state == "rayé"
        || state == "jauni" || state == "pourri" || state == "abime"
        || state == "boite cassee"){
        
            Game[4] = "Mauvais"
        } else {
            
            console.log("Error :", Game[0], "has an invalid state", Game[4])
        }


        

        let valeur = Game[6].split(" ");
        let montant = valeur[0];
        let devise = valeur[1];

        if(
           devise == "€" || devise == "EUR" || devise == "euros" || devise === null || devise === undefined) {
            devise = "€"
            Game[6] = montant + " " + devise; 
        } else if (
           devise == "¥" || devise == "YEN"){
            devise = "¥"
            Game[6] = montant + " " + devise; 
        } else if (
           devise == "$" || devise == "DOLLARS"){
            devise = "$"
            Game[6] = montant + " " + devise; 
        } else {
            // console.log(Game[6])
            // console.log("Error :", Game[0], "has an invalid value", Game[6])
        }

        valeur = Game[6].split(" ");
        montant = valeur[0];
        devise = valeur[1];
        console.log(montant);

        // console.log("##################################");
        // console.log("id :", Game[0])
        // console.log("titre du Jeu :", Game[1])
        // console.log("plateforme :", Game[2])
        // console.log("Année de sortie :", Game[3])
        // console.log("Etat :", Game[4])
        // console.log("Emplacement :", Game[5])
        // console.log("Valeur estimée :", Game[6])
        // console.log("Prix d'achat :", Game[7]);
        // console.log("##################################");
    });
}

getOriginalCSV("/Data/OriginalCollection.csv");