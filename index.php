<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="/CSS/destyle.css">
    <link rel="stylesheet" href="/CSS/variable.css">
    <link rel="stylesheet" href="/CSS/font.css">
    <link rel="stylesheet" href="/CSS/button.css">
    <link rel="stylesheet" href="/CSS/header.css">
    <link rel="stylesheet" href="/CSS/footer.css">

    <link rel="stylesheet" href="/CSS/homePage.css">
    <link rel="stylesheet" href="/CSS/Details.css">

    <title>PixelTrader – Accueil</title>
</head>

<body>
<header>
    <h1>PixelTrader </h1>
    <nav>
        <a href="/index.php">Home</a>
        <a href="/html/Nettoyage.html">Nettoyage</a>
    </nav>
</header>

<main>
    <!-- Filtres -->
   <article class="filters" aria-label="Filtres de la collection">
    <!-- Filtre plateforme -->
     <div class="filter">
        <label for="filterPlateforme">Plateforme : </label>
        <select id="filterPlateforme" class="SelectFilter">
            <option value="">Toutes les plateformes</option>
            <option value="Nintendo 64">Nintendo 64</option>
            <option value="Sega Mega Drive">Sega Mega Drive</option>
            <option value="Sega Master System">Sega Master System</option>
            <option value="Super Nintendo">Super Nintendo</option>
            <option value="NES">NES</option>
            <option value="Game Boy">Game Boy</option>
            <option value="Game Boy Color">Game Boy Color</option>
            <option value="Game Boy Advance">Game Boy Advance</option>
            <option value="PlayStation 1">PlayStation 1</option>
            <option value="PlayStation 2">PlayStation 2</option>
            <option value="PlayStation 3">PlayStation 3</option>
            <option value="Nintendo Switch">Nintendo Switch</option>
            <option value="GameCube">GameCube</option>
            <option value="Xbox">Xbox</option>
            <option value="PC">PC</option>
            <option value="Dreamcast">Dreamcast</option>
            <option value="Saturn">Saturn</option>
            <option value="Arcade">Arcade</option>
        </select>
     </div>

    <!-- Filtre état -->
     <div class="filter">
        <label for="filterEtat">État :</label>
        <select id="filterEtat" class="SelectFilter">
            <option value="">Tous les états</option>
            <option value="Excellent">Excellent</option>
            <option value="Bon">Bon</option>
            <option value="Moyen">Moyen</option>
            <option value="Mauvais">Mauvais</option>
        </select>
     </div>
    <button id="applyFilters" type="button">Filtrer</button>    
</article>
    <!-- Collection -->
    <section aria-labelledby="collection-title">
        <h2 id="collection-title">Notre Collection</h2>
        <div id="collectionWelcomer">
            <!-- contenu injecté par JS -->
        </div>
    </section>
</main>

<footer>
    <div id="contact">
        <h2>Coordonnées</h2>
        <ul>
            <li>Adresse</li>
            <li>Email</li>
            <li>Numéro de téléphone</li>
        </ul>
    </div>
    <div id="socials">
        <h2>Réseaux sociaux</h2>
        <ul class="social-list">
        <a href="#" aria-label="Instagram">
            <img src="/assets/icons/instagram.png" alt="Instagram">
        </a>

        <a href="#" aria-label="Facebook">
            <img src="/assets/icons/facebook.png" alt="Facebook">
        </a>

        <a href="#" aria-label="X">
            <img src="/assets/icons/x.png" alt="X">
        </a>
    </ul>
    </div>
</footer>

<script src="/JavaScript/collectionDisplay.js"></script>
</body>
</html>
