<?php
$url = (empty($_SERVER['HTTPS']) ? 'http' : 'https') . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

if ($url == "http://localhost/games") {
    $data = file_get_contents('./Data/clean_data.json');
    $collectionString = json_decode($data);
    $collection = "";
    foreach ($collectionString as $Game) {
        // var_dump($Game->id);
    $collection += (string) $Game->id;
        // `<div class="GameCard">
        //     <h3>{$Game->id}</h3>
        //     <ul>
        //         <li>plateforme : {$Game->id}</li>
        //         <li>sortie : {$Game->id}</li>
        //         <li>état : {$Game->id}</li>
        //         <li>prix : {$Game->id}</li>
        //     </ul>
        // </div>`;
    }
}
if ($url == "http://localhost/clara") {
    echo "miaouw";
}


