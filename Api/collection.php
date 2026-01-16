<?php
header('Content-Type: application/json; charset=utf-8');

// Connexion à la bdd
$pdo = new PDO(
    "mysql:host=localhost;dbname=pixel_trader;charset=utf8",
    "root",
    "",
    [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
);

//liste d'image par id
$imagesById = [
    // Mario
    1  => "Super_Mario_64.png",
    5  => "Super_Mario_64.png",
    37 => "Super_Mario_64.png",
    16 => "Super_Mario_Bros_3_Logo.png",
    52 => "Super_Mario_64.png",
    64 => "Super_Mario_64.png",

    // Zelda
    2  => "The_Legend_of_Zelda_Ocarina_of_Time_Logo.png",
    27 => "The_Legend_of_Zelda_Ocarina_of_Time_Logo.png",
    46 => "The_Legend_of_Zelda_Ocarina_of_Time_Logo.png",
    54 => "The_Legend_of_Zelda_Ocarina_of_Time_Logo.png",

    // Sonic
    3  => "Sonic_the_Hedgehog_1991_logo.webp.png",
    18 => "Sonic_the_Hedgehog_1991_logo.webp.png",
    56 => "Sonic_the_Hedgehog_1991_logo.webp.png",

    // Final Fantasy
    4  => "Final_Fantasy_VII_Logo.png",
    24 => "Final_Fantasy_VII_Logo.png",
    51 => "Final_Fantasy_VII_Logo.png",

    // Chrono
    9  => "Chrono_Trigger_Logo.png",
    65 => "Chrono_Trigger_Logo.png",

    // Castlevania
    10 => "Castlevania_symfony_of_the_night.png",
    62 => "Castlevania_symfony_of_the_night.png",

    // Autres licences 
    11 => "Alex_Kidd_in_Miracle_World_Logo.png",
    13 => "GoldenEye_007_Logo.png",
    14 => "Shenmue_Logo.png",
    19 => "Donkey_Kong_Country_Logo.png",
    25 => "Crash_Bandicoot_Logo.png",
    39 => "Duck_Hunt_Logo.png",
    7  => "Tetris_Logo.png",
    47 => "Tetris_Logo.png",
    8  => "Metal_Gear_Solid_Logo.jpg",
    59 => "Metal_Gear_Solid_Logo.jpg",
    48 => "Spyro_the_Dragon_Logo.png",
    42 => "SoulCalibur_Logo.png",
    36 => "Crazy_Taxi_Logo.png",
    22 => "Halo_Combat_Evolved_Logo.png",
    40 => "Mega_Man_2_Logo.png",
    44 => "Portal_2_Logo.png",
    45 => "The_Last_of_Us_logo.png",
    6 => "Street_Fighter_Logo.png",
    33 => "Street_Fighter_Logo.png",
    15 => "Half-life-logo.png",
    20 => "Pac-Man_Logo.png",
    21 => "GTA.png",
    12 => "Pokemon.png",
    26 => "Pokemon.png",
    38 =>"Pokemon.png",
    61 =>  "Pokemon.png",
    55 => "Metroid_Logo.png",
    28 => "Earthworm_Jim_Logo.png",
    35 => "Tomb_Raider_Logo.png",
    104 => "Duck_Hunt_Logo.png"

];


// requête
$method = $_SERVER['REQUEST_METHOD'];
$path = trim($_SERVER['REQUEST_URI'], '/');

// get tout les jeu + filtre
if ($method === 'GET' && !preg_match('#/\d+$#', $path)) { 
    $conditions = [];
    $params = [];

    //filtre plateforme
    if (!empty($_GET['plateforme'])) {
        $conditions[] = 'Jeu.plateforme = ?';//jeu filtré par plateforme : ? valeur fournis par le user
        $params[] = $_GET['plateforme'];
    }

    //filtre etat
    if (!empty($_GET['etat'])) {
        $conditions[] = 'Stock.etat = ?';
        $params[] = $_GET['etat'];
    }

    $where = $conditions ? 'WHERE ' . implode(' AND ', $conditions) : '';

    //renvoie toutes les infos
    $stmt = $pdo->prepare("
        SELECT 
            Jeu.id_jeu,
            Jeu.titre,
            Jeu.plateforme,
            Jeu.annee_sortie,
            Stock.etat,
            Stock.valeur_estime AS valeur_estimee_eur
        FROM Jeu
        JOIN Stock ON Jeu.id_jeu = Stock.id_jeu
        $where
    ");

    $stmt->execute($params);
    echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
    exit;
}

// Get détail d'un jeu selon id 
if ($method === 'GET' && preg_match('#/(\d+)$#', $path, $matches)) {

    $id = (int) $matches[1];

    $stmt = $pdo->prepare("
        SELECT 
            Jeu.id_jeu,
            Jeu.titre,
            Jeu.plateforme,
            Jeu.annee_sortie,
            Stock.etat,
            Stock.valeur_estime AS valeur_estimee_eur
        FROM Jeu
        JOIN Stock ON Jeu.id_jeu = Stock.id_jeu
        WHERE Jeu.id_jeu = ?
    ");

    $stmt->execute([$id]);

    //on stocke le résultat
    $jeu = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$jeu) {
        http_response_code(404);
        echo json_encode(['error' => 'Jeu non trouvé']);
        exit;
    }

    // ajout image 
    $jeu['image'] = "/assets/GameLogos/" . ($imagesById[$jeu['id_jeu']] ?? "default.png");

    
    echo json_encode($jeu);
    exit;
}


// erreur 404 si pas trouvé
http_response_code(404);
echo json_encode(['error' => 'Route non trouvée']);
