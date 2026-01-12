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

    GameArray.forEach(Game => {
        Game = Game.split(";");

        let prix = Game[6]
        let date = Game[3]
        let state = Game[4]
      
      if ( prix != "" &&
      date != "" &&
      state != "Excellent" &&
      state != "Bon" &&
      state != "Moyen" &&
      state != "Mauvais" ){
        console.log("Résultat de l'analyse : True")
      }

      console.log("Résultat de l'analyse : False")
      }
    )
  };

       analyse("/Data/OriginalCollection.csv");