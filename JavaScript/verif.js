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
    let resultat = false

    GameArray.forEach(Game => {
        Game = Game.split(";");

        let prix = Game[6]
        let date = Game[3]
        let state = Game[4]
      
     if ( prix != "" ){console.log("prix rempli")}
        if (date != "" ){console.log("date rempli")}
        if (state == "Excellent" ){console.log("Etat bien écrit")}
        if (state == "Bon" ){console.log("Etat bien écrit")}
        if (state == "Moyen"){console.log("Etat bien écrit")}
      if (state == "Mauvais" ){console.log("Etat bien écrit")}
        return resultat = true;
      


  /*    if ( prix != "" &&
          date != "" &&
          state != "Excellent" &&
          state != "Bon" &&
          state != "Moyen" &&
          state != "Mauvais" ){
        return resultat = true;
      }*/

      console.log("Résultat de l'analyse :", resultat)
      }
    )
  };

       analyse("/Data/OriginalCollection.csv");