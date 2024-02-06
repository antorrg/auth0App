// En un archivo donde se manejan las operaciones relacionadas con el llenado de datos (por ejemplo, fillData.js)
const vgBulk = require ('./vgbulk');
const {Videogame}= require('../../database.js'); // Importa tus modelos de tablas
const games = require ('../../../data/games.js'); // Ruta relativa al archivo indexData (reune la informacion y la exporta en un objeto)



// Usa la función dataBulk para diferentes tablas y conjuntos de datos
const fillTables =async (table, data)=>{
    await vgBulk(Videogame, games);
    
}

module.exports = fillTables;
