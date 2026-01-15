<?php

$pdo = new PDO(
    "mysql:host=localhost;dbname=pixel_trader;charset=utf8",
    "root",
    "",
    [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
);

if (($handle = fopen(__DIR__ . "/Data/clean_data.csv", "r")) !== false) {

    fgetcsv($handle, 1000, ";"); // header


    $stmtJeu = $pdo->prepare("
        INSERT INTO Jeu (titre, plateforme, annee_sortie)
        VALUES (?, ?, ?)
    ");

    //requete insert stock
    $stmtStock = $pdo->prepare("
        INSERT INTO Stock (id_jeu, etat, emplacement, valeur_estime, prix_achat)
        VALUES (?, ?, ?, ?, ?)
    ");

    $count = 0;

    while (($data = fgetcsv($handle, 1000, ";")) !== false) {

        if (count($data) < 8) continue;

        [
            $_id_csv,
            $titre,
            $plateforme,
            $annee_sortie,
            $etat,
            $emplacement,
            $valeur_estime,
            $prix_achat
        ] = $data;

        //execute la requete dans jeu
        $stmtJeu->execute([
            $titre,
            $plateforme,
            $annee_sortie
        ]);

        $id_jeu = $pdo->lastInsertId();


        //pareil
        $stmtStock->execute([
            $id_jeu,
            $etat,
            $emplacement,
            $valeur_estime,
            $prix_achat
        ]);

        $count++;
    }

    fclose($handle);
    echo "Import terminé : $count jeux";
}
