// on récup l'id dans l'url
const params = new URLSearchParams(window.location.search);
const id = params.get('id');

//si aucun id
if (!id) {
    document.getElementById('gameTitle').textContent = 'Jeu introuvable';
    throw new Error('ID manquant');
}

// call de l’API pour récupérer le jeu
async function getGameDetail() {
    const response = await fetch(`/Api/collection.php/${id}`); //le collection.php sert surtout a gerer la logique avec l'api
    const game = await response.json();

    // titre du jeu
    document.getElementById('gameTitle').textContent = game.titre;
    document.getElementById('gameImage').src = game.image;


    // infos du jeu
    document.getElementById('gameInfos').innerHTML = `
        <li><strong>Plateforme :</strong> ${game.plateforme}</li>
        <li><strong>Année de sortie :</strong> ${game.annee_sortie}</li>
        <li><strong>État :</strong> ${game.etat}</li>
        <li><strong>Valeur estimée :</strong> ${game.valeur_estimee_eur}</li>
    `;
}

// lancement
getGameDetail();
