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

        if (Game[5].toLowerCase() === "poubelle") return; //on saute la ligne si poubelle

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

        /*function normalizeEtat(etat) {
    const state = etat.toLowerCase();

    if (["excellent","comme neuf","platinum","neuf","collector","mint","big box","blister","steelbook"].includes(state)) {
        return "Excellent";
    } 
    else if (["bon","good","bon etat","jap"].includes(state)) {
        return "Bon";
    } 
    else if (["moyen","boite abimée","sans notice","cabinet","boite manquante","sans boite","occasion","loose","boite","use","pile hs"].includes(state)) {
        return "Moyen";
    } 
    else {
        return "Mauvais";
    }
}
*/
        /*valeur*/
        let valeur = Game[6] || "";
        const matchValeur = valeur.match(/^(\d+(?:\.\d+)?)[\s]*([^\d\s]+)?$/i);

        let montant = matchValeur ? Number(matchValeur[1]) : 0;
        let devise = matchValeur ? (matchValeur[2] || "€") : "€";


        //conversion
        if (["¥","YEN"].includes(devise)) montant = Convert(montant,"¥");
        if (["$","DOLLARS"].includes(devise)) montant = Convert(montant,"$");

        Game[6] = montant.toFixed(2) + " €";

        /*prix achat*/
        let achat = Game[7] || "";
        let matchAchat = achat.match(/^(\d+(?:\.\d+)?)[\s]*([^\d\s]+)?$/i);

        // si le prix d’achat correspond au format "nombre + devise",
        // on recup le montant  et la devise sinon on met 0 par défaut
        let montantAchat = matchAchat ? Number(matchAchat[1]) : 0; 
        let deviseAchat = matchAchat ? (matchAchat[2] || "€") : "€";

        if (["¥","YEN"].includes(deviseAchat)) montantAchat = Convert(montantAchat,"¥");
        if (["$","DOLLARS"].includes(deviseAchat)) montantAchat = Convert(montantAchat,"$");

        Game[7] = montantAchat.toFixed(2) + " €";
                /*FAIRE DES FONCTION S2PAré plutot que tout en foreach*/
        /*si val estimé absente on prend prix achat */
        if (montant === 0) Game[6] = Game[7];

        Game[2] = normalizePlateforme(Game[2]);

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

//normalise les plateform
function normalizePlateforme(plateforme) {
    if (!plateforme) return "";

    plateforme = plateforme.toLowerCase().trim();

    const map = {
            //Nintendo 64
            "n64": "Nintendo 64",
            "nintendo 64": "Nintendo 64",
            "nintendo64": "Nintendo 64",

            // PlayStation 1
            "ps1": "PlayStation 1",
            "psx": "PlayStation 1",
            "playstation": "PlayStation 1",
            "playstation 1": "PlayStation 1",

            // PlayStation 2
            "ps2": "PlayStation 2",
            "playstation 2": "PlayStation 2",

            // PlayStation 3
            "ps3": "PlayStation 3",
            "playstation 3": "PlayStation 3",

            // Super Nintendo
            "snes": "Super Nintendo",
            "super nintendo": "Super Nintendo",
            "super famicom": "Super Nintendo",

            // NES
            "nes": "NES",

            // Game Boy
            "game boy": "Game Boy",
            "gameboy": "Game Boy",

            // Game Boy Color
            "gameboy color": "Game Boy Color",

            // Game Boy Advance
            "gba": "Game Boy Advance",
            "game boy advance": "Game Boy Advance",

            // GameCube
            "gc": "GameCube",
            "gcn": "GameCube",
            "gamecube": "GameCube",

            // Sega
            "megadrive": "Sega Mega Drive",
            "mega drive": "Sega Mega Drive",
            "sega mega drive": "Sega Mega Drive",
            "master system": "Sega Master System",
            "dreamcast": "Dreamcast",
            "saturn": "Saturn",

            // Xbox
            "xbox": "Xbox",

            // PC
            "pc": "PC",

            // Arcade
            "arcade": "Arcade",

            // Switch
            "switch": "Nintendo Switch",

            // Atari
            "atari 2600": "Atari 2600"
    };

    return map[plateforme] || plateforme;
}