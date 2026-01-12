async function getOriginalCSV(url) {

    const Request = await fetch(url);
    const Data = await Request.text();

    console.log(Data);
}

getOriginalCSV("/Data/OriginalCollection.csv");