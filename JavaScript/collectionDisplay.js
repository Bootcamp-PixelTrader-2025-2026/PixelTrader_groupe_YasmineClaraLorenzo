const collectionWelcomer = document.getElementById('collectionWelcomer');
const filterPlateforme = document.getElementById('filterPlateforme'); // select pour filtrer par plateforme
const filterEtat = document.getElementById('filterEtat'); // select pour filtrer par état 
const applyFilters = document.getElementById('applyFilters');// bouton qui applique les filtres sélectionnés

async function getCollection(params = '') {
    const response = await fetch(`/Api/collection.php${params}`); // call API PHP avec ou sans param de filtre
    const collection = await response.json();
    displayCollection(collection);//affiche collection
}

// chargement initial
getCollection(); //affiche tte la collection au chrgmt de la page

applyFilters.addEventListener('click', () => {
    const query = new URLSearchParams();

    if (filterPlateforme.value) {
        query.append('plateforme', filterPlateforme.value);  // si une plateforme est sélectionnée dans filtre, on l’ajoute aux paramètres
    }

    if (filterEtat.value) {
        query.append('etat', filterEtat.value); //pareil mais pour etat
    }

    const params = query.toString() ? `?${query.toString()}` : ''; 
    getCollection(params);//appel API avec les filtres appliqués
});

function displayCollection(collection) {
    collectionWelcomer.innerHTML = '';

    // si aucun jeu ne correspond aux filtres
    if (collection.length === 0) {
        collectionWelcomer.innerHTML = '<p>Aucun jeu trouvé.</p>';
        return;
    }

    collection.forEach(game => {
        collectionWelcomer.innerHTML += `
            <div class="GameCard">
                <h3>${game.titre}</h3>
                <a class="seeMore" href="/html/detail.html?id=${game.id_jeu}">
                    Voir +
                </a>

            </div>
        `;
    });
}
