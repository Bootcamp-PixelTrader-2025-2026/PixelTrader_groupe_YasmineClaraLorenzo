function exportJSON(data) {
    // créat° d’un fichier temporaire (Blob) contenant les données en JSON
    const blob = new Blob(
        [JSON.stringify(data, null, 2)],//data=donné a convertir et 2 pour l'indentation pour que ce soit jolie
        { type: "application/json" }
    );

    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);//url temporaire
    a.download = "clean_data.json"; // nom  fichier lors du telechrgmt
    a.click();
}

function exportCSV(data) {
    const headers = Object.keys(data[0]).join(";");// récup les noms des colonnes en utilisant les propriétés du premier objet de données(id)
    const rows = data.map(obj =>//chaque obj en ligne csv
        Object.values(obj).join(";")
    );

    //assemble le fichier csv ->1ere ligne : headers et autre lignes données
    const csvContent = [headers, ...rows].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "clean_data.csv";
    a.click();// declenche autom le téléchargement
}
