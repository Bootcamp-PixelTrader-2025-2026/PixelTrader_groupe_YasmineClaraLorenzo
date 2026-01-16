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

//permet de convertir devise etranger en euro
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

    const data = await fetchCSV(url);
    const lines = parseLines(data);

    lines.forEach(line => {
        const game = parseGameLine(line);
        if (!game) return;
        cleanGames.push(game);
    });

    exportJSON(cleanGames);
    exportCSV(cleanGames);
}


// récupere le fichier CSV depuis une URL

async function fetchCSV(url) {
    const response = await fetch(url);
    return await response.text();
}

// decoupe txte du CSV en lignes
function parseLines(data) {
    return data.split(/\r?\n/);
}


// transforme  ligne CSV en objet jeu pour que ce soit bien en json
function parseGameLine(line) {

    const Game = line.split(";").map(col => col.trim());

    // header ou ligne invalide
    if (Game[0] === "id" || Game.length < 8) return null;


    if (Game[5]?.toLowerCase() === "poubelle") return null; //  ignore les jeux à la poubelle

    const etat = normalizeEtat(Game[4]);  // normalisaiton/uniformisation etat
    const prixAchat = normalizePrice(Game[7]); // normalisation/uniformisation des prix
    const valeur = normalizePrice(Game[6]);

    // si valeur estimée absente → prix d’achat
    const valeurFinale = valeur === "0.00 €" ? prixAchat : valeur;

    
    // return -> obj propre et structuré
    return {
        id: Number(Game[0]),
        titre: Game[1],
        plateforme: normalizePlateforme(Game[2]),
        annee_sortie: Game[3] || null,
        etat: etat,
        emplacement: Game[5],
        valeur_estimee_eur: valeurFinale,
        prix_achat_eur: prixAchat
    };
}


// harmonise/uniformisation les différents libelés d’état
function normalizeEtat(etat) {

    const state = (etat || "").toLowerCase();

    //etats comme excellent
    if ([
        "excellent", "comme neuf", "platinum", "neuf",
        "collector", "mint", "big box", "blister", "steelbook"
    ].includes(state)) {
        return "Excellent";
    }

    //etat bons
    if ([
        "bon", "good", "bon etat", "jap"
    ].includes(state)) {
        return "Bon";
    }

    //etat moyen
    if ([
        "moyen", "boite abimée", "sans notice", "cabinet",
        "boite manquante", "sans boite", "occasion",
        "loose", "boite", "use", "pile hs"
    ].includes(state)) {
        return "Moyen";
    }

    return "Mauvais";
}


// harmonise/uniformisation des differents prix (ceux qui sont pas en euro -> deviennent en euro)
function normalizePrice(value) {

    //si pas valeur ->0
    if (!value) return "0.00 €";

    const match = value.match(/^(\d+(?:\.\d+)?)[\s]*([^\d\s]+)?$/i);

    let montant = match ? Number(match[1]) : 0;
    let devise = match ? (match[2] || "€") : "€";

    // si devise étrangère
    if (["¥", "YEN"].includes(devise)) {
        montant = Convert(montant, "¥");
    }

    if (["$", "DOLLARS"].includes(devise)) {
        montant = Convert(montant, "$");
    }

    return montant.toFixed(2) + " €";
}

// harmonise/uniformisation  noms de plateformes
function normalizePlateforme(plateforme) {

    if (!plateforme) return "";

    plateforme = plateforme.toLowerCase().trim();

    const map = {
        // Nintendo
        "n64": "Nintendo 64",
        "nintendo 64": "Nintendo 64",
        "nintendo64": "Nintendo 64",

        "snes": "Super Nintendo",
        "super nintendo": "Super Nintendo",
        "super famicom": "Super Nintendo",

        "nes": "NES",

        "game boy": "Game Boy",
        "gameboy": "Game Boy",

        "gameboy color": "Game Boy Color",

        "gba": "Game Boy Advance",
        "game boy advance": "Game Boy Advance",

        "gc": "GameCube",
        "gcn": "GameCube",
        "gamecube": "GameCube",

        "switch": "Nintendo Switch",

        // PlayStation
        "ps1": "PlayStation 1",
        "psx": "PlayStation 1",
        "playstation": "PlayStation 1",
        "playstation 1": "PlayStation 1",

        "ps2": "PlayStation 2",
        "playstation 2": "PlayStation 2",

        "ps3": "PlayStation 3",
        "playstation 3": "PlayStation 3",

        // Sega
        "megadrive": "Sega Mega Drive",
        "mega drive": "Sega Mega Drive",
        "sega mega drive": "Sega Mega Drive",

        "master system": "Sega Master System",
        "dreamcast": "Dreamcast",
        "saturn": "Saturn",

        // Autres
        "xbox": "Xbox",
        "pc": "PC",
        "arcade": "Arcade",
        "atari 2600": "Atari 2600"
    };

    return map[plateforme] || plateforme;
}