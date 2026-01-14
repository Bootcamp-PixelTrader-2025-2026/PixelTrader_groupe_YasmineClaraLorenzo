const collectionWelcomer = document.getElementById('collectionWelcomer')

async function getCollection() {
    let request = await fetch('/Data/clean_data.json');
    let collection = await request.json();
    displayCollection(collection);
}

getCollection();

function displayCollection (collection) {
    console.log(collection);
    console.log("coucou");
    console.log("A jamais 😾")

    collection.forEach(Game => {
        console.log(Game);
        collectionWelcomer.innerHTML += 
        `<div class="GameCard">
            <h3>${Game.titre}</h3>
            <ul>
                <li>plateforme : ${Game.plateforme}</li>
                <li>sortie : ${Game.annee_sortie}</li>
                <li>état : ${Game.etat}</li>
                <li>prix : ${Game.valeur_estimee_eur}</li>
            </ul>
        </div>`
    });
}