/* 
Si prix != null alors return true

Si date de sortie != null alors return true

si prix ==  "€" alors return true

if Etats isset Excellent, Bon, Moyen, Mauvais alors return true

*/
async function analyse(url) {

    const Request = await fetch(url);
    const Data = await Request.text();

    Data.forEach((e) => console.log(e));
    console.log("analyse en cours...")
}



analyse("/Data/OriginalCollection.csv");