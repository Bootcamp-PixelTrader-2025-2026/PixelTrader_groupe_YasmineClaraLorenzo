/* 
Si prix != null alors return true

Si date de sortie != null alors return true

si prix ==  "€" alors return true

if Etats isset Excellent, Bon, Moyen, Mauvais alors return true

*/

const csv = require('csv-parser');
const fs = require('fs');

const filePath = 'Data/OriginalCollection.csv';

fs.createReadStream(filePath)
  .pipe(csv())
  .on('data', (row) => {
    console.log(row);
  });

async function getOriginalCSV(url) {
  
    const Request = await fetch(url);
    const Data = await Request.text();

    Data.forEach((e) => console.log(e));
    console.log("analyse en cours...")
}
getOriginalCSV("/Data/OriginalCollection.csv");