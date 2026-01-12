const fs = require('fs')
var Document = fs.readFileSync('stock_legacy_full.csv').toString().split('\r\n') //contient le csv sous forme de tableau
var Columns = Document[0] //1er ligne du tab : intitulé des colonnes
Columns = Columns.split(',')

var Json = []
