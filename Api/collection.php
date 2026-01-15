<?php
header('Content-Type: application/json; charset=utf-8');

// Connexion à la bdd
$pdo = new PDO(
    "mysql:host=localhost;dbname=pixel_trader;charset=utf8",
    "root",
    "",
    [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
);


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
if ($method === 'GET' && preg_match('#/(\d+)$#', $path, $matches)) { // si requête GET et que l’URL se termine par un id(preg_mach verifie que sa fini par val numérique) alors on cherche détail d'un jeu($matches[1] contient id récupéré)

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
    echo json_encode($stmt->fetch(PDO::FETCH_ASSOC));
    exit;
}


// erreur 404 si pas trouvé
http_response_code(404);
echo json_encode(['error' => 'Route non trouvée']);
