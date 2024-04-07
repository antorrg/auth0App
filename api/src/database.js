const {Sequelize}= require('sequelize');
const createGame = require('./Models/game');
const createUser = require('./Models/user');
require ('dotenv').config();

//? Esta importacion y la manera de declarar es especial para el aprendizaje:
const {DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME}=process.env;

// const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
// {logging: false,
// native:false,
// // dialectOptions: {
// //          ssl: {
// //             require: true,
// //            }    
// //          }
// });
//? Configuracion Raillway:
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    logging: false, // set to console.log to see the raw SQL queries
     native: false, // lets Sequelize know we can use pg-native for ~30% more speed
   // dialectOptions: {
    // ssl: {
    //   require: true,
    //   }    
    // }
   });
//? Configuracion Render:
// const sequelize = new Sequelize(process.env.DB_DEPLOY, {
//     logging: false, // set to console.log to see the raw SQL queries
//      native: false, // lets Sequelize know we can use pg-native for ~30% more speed
//     dialectOptions: {
//      ssl: {
//         require: true,
//        }    
//      }
//    });
// Iterar sobre los modelos y crearlos con Sequelize

createGame(sequelize);
createUser(sequelize);
const {Videogame, User} = sequelize.models;





module.exports = {
    ...sequelize.models,
    sequelize
}
