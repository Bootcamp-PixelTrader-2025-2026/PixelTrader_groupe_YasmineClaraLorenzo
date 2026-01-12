async function getOriginalCSV(url) {

    const Request = await fetch(url);
    const Data = await Request.text();

    console.log(Data);

    const GameArray = Data.split(";")

    GameArray.forEach(Game => {
        console.log(Game);
    });
}

getOriginalCSV("/Data/OriginalCollection.csv");