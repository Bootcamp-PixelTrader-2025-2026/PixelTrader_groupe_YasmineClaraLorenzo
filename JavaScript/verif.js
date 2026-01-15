/* 
Si prix != null alors return true

Si date de sortie != null alors return true

si prix ==  "€" alors return true

if Etats isset Excellent, Bon, Moyen, Mauvais alors return true

*/

async function analyse(url) {

    const Request = await fetch(url);
    const Data = await Request.text();

    const GameArray = Data.split("\n")
   
    let resultat = true;

    GameArray.forEach(Game => {
        Game = Game.split(";");

        let prix = Game[6]
        let date = Game[3]
        let state = Game[4] 

        if ( prix == "" )
          {resultat= false,console.log("prix invalide")}

        if (date == "" )
          {resultat= false,console.log("date invalide :", Game[3])}

        if (state != "Excellent" && 
            state != "Bon" &&
            state != "Moyen" &&
            state != "Mauvais" )
        {resultat= false, console.log("Etat invalide :", Game[4]) }
      
    });
      
    console.log("------------------------------------------");
    console.log("Résultat final de l'analyse :", resultat);
    console.log("------------------------------------------");
    
    return resultat;
};

analyse("/Data/OriginalCollection.csv");

