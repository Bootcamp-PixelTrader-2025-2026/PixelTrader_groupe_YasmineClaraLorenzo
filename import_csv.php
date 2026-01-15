<?php

// connexion BDD
$pdo = new PDO(
    "mysql:host=localhost;dbname=pixel_trader;charset=utf8",
    "root",
    "",
    [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
);

// on ouvre le csv
if (($handle = fopen(__DIR__ . "/Data/clean_data.csv", "r")) !== false) {

    // ignorer la ligne d'en-tête
    fgetcsv($handle, 1000, ";");

    while (($data = fgetcsv($handle, 1000, ";")) !== false) {

    if (count($data) < 8) {
        continue;
    }

    [
        $id_jeu,
        $titre,
        $plateforme,
        $annee_sortie,
        $etat,
        $emplacement,
        $valeur_estime,
        $prix_achat
    ] = $data;
    }

        // on insert dans la tab jeu
        $stmtJeu = $pdo->prepare("
            INSERT  INTO Jeu (id_jeu, titre, plateforme, annee_sortie)
            VALUES (?, ?, ?, ?) 
        ");//? les parametres utilisé pk? car pour la sécurité
        $stmtJeu->execute([
            $id_jeu,
            $titre,
            $plateforme,
            $annee_sortie
        ]);

        //  on insert dans la tab Stock
        $stmtStock = $pdo->prepare("
            INSERT INTO Stock (id_jeu, etat, valeur_estime, emplacement, prix_achat)
            VALUES (?, ?, ?, ?, ?)
        ");
        $stmtStock->execute([
            $id_jeu,
            $etat,
            $valeur_estime,
            $emplacement,
            $prix_achat
        ]);
    }

    fclose($handle);
    echo "Import CSV terminé avec succès";

