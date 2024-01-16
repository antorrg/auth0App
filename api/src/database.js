const {Sequelize}= require('sequelize');
const createGame = require('./Models/game');
require ('dotenv').config();

const {DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME,}=process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
{logging: false,
native:false}
);

createGame(sequelize);
const {Videogame} = sequelize.models;





module.exports = {
    ...sequelize.models,
    sequelize
}
