const apiBase = "https://v6.exchangerate-api.com/v6/";
const apiKey = "08db352af22a4bed96682556";

let yenConversionRate
let dollarConversionRate

async function Cleaning() {
    let requestYen = await fetch(apiBase + apiKey + "/latest/JPY");
    let dataYen = await requestYen.json();
    yenConversionRate = dataYen.conversion_rates["EUR"]
    // console.log(yenConversionRate);

    let requestDollar = await fetch(apiBase + apiKey + "/latest/USD");
    let dataDollar = await requestDollar.json();
    dollarConversionRate = dataDollar.conversion_rates["EUR"]
    // console.log(dollarConversionRate);

    getOriginalCSV("/Data/OriginalCollection.csv");
}

function Convert(montant, devise) {

    let montantObtenu = 0;
    if (devise === "¥") {
        montantObtenu = montant * yenConversionRate;
    } else if (devise === "$") {
        montantObtenu = montant * dollarConversionRate;
    }
    montantObtenu = Number(montantObtenu.toFixed(2));
    return montantObtenu;

}

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

        // console.log(Game[4]);


        // gestion des valeures estimées
        let valeur = Game[6].trim();
        let match = valeur.match(/^(\d+(?:\.\d+)?)[\s]*([^\d\s]+)?$/i);

        let montant = 0;
        let devise = "€";
        let ApiDevise = "EUR";


        if (match) {
            montant = match[1];
            devise = match[2] || "€";
        } else if (valeur === "NULL" || valeur == "") {
            montant = 0;
            devise = "€";
        } else {
            console.log("Error :", Game[0], "has an invalid value", Game[6]);
        }
        

        if(
           devise == "€" || devise === "EUR" || devise === "euros" || devise === null || devise === undefined) {
            devise = "€"
            ApiDevise = "EUR"
            Game[6] = montant + " " + devise; 
        } else if (
           devise === "¥" || devise === "YEN"){
            devise = "¥"
            montant = Convert(montant, devise);
            Game[6] = montant + " " + "€"; 
        } else if (
           devise === "$" || devise === "DOLLARS"){
            devise = "$"
            montant = Convert(montant, devise);
            Game[6] = montant + " " + "€"; 
        } else {
            console.log("Error :", Game[0], "has an invalid value", Game[6])
        }

        // console.log(Game[6]);



























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

Cleaning();