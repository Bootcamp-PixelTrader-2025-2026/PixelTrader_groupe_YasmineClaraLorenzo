const apiBase = "https://v6.exchangerate-api.com/v6/";
const apiKey = "08db352af22a4bed96682556";

let yenConversionRate
let dollarConversionRate
let cleanGames = [];

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

    cleanGames = []; // reset à chaque génération

    const Request = await fetch(url);
    const Data = await Request.text();

    const GameArray = Data.split(/\r?\n/);//decoupe ligne par ligne

    GameArray.forEach(line => {

        let Game = line.split(";").map(col => col.trim());
        if (Game[0] === "id" || Game.length < 8) return;

        /*etat*/
        const state = Game[4].toLowerCase();
        if (["excellent","comme neuf","platinum","neuf","collector","mint","big box","blister","steelbook"].includes(state)) {
            Game[4] = "Excellent";
        } else if (["bon","good","bon etat","jap"].includes(state)) {
            Game[4] = "Bon";
        } else if (["moyen","boite abimée","sans notice","cabinet","boite manquante","sans boite","occasion","loose","boite","use","pile hs"].includes(state)) {
            Game[4] = "Moyen";
        } else {
            Game[4] = "Mauvais";
        }

        /*valeur*/
        let valeur = Game[6] || "";
        let match = valeur.match(/^(\d+(?:\.\d+)?)[\s]*([^\d\s]+)?$/i);

        let montant = match ? Number(match[1]) : 0;
        let devise = match ? (match[2] || "€") : "€";

        //conversion
        if (["¥","YEN"].includes(devise)) montant = Convert(montant,"¥");
        if (["$","DOLLARS"].includes(devise)) montant = Convert(montant,"$");

        Game[6] = montant.toFixed(2) + " €";

        /*prix achat*/
        let achat = Game[7] || "";
        let matchAchat = achat.match(/^(\d+(?:\.\d+)?)[\s]*([^\d\s]+)?$/i);

        let montantAchat = matchAchat ? Number(matchAchat[1]) : 0;
        let deviseAchat = matchAchat ? (matchAchat[2] || "€") : "€";

        if (["¥","YEN"].includes(deviseAchat)) montantAchat = Convert(montantAchat,"¥");
        if (["$","DOLLARS"].includes(deviseAchat)) montantAchat = Convert(montantAchat,"$");

        Game[7] = montantAchat.toFixed(2) + " €";

        /*si val estimé absente on ^prend prix achat */
        if (montant === 0) Game[6] = Game[7];

        cleanGames.push({
            id: Number(Game[0]),
            titre: Game[1],
            plateforme: Game[2],
            annee_sortie: Game[3] || null,
            etat: Game[4],
            emplacement: Game[5],
            valeur_estimee_eur: Game[6],
            prix_achat_eur: Game[7]
        });
    });

    //export
    exportJSON(cleanGames);
    exportCSV(cleanGames);
}