const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mainRouter = require('./Routes/mainRouter')
const errorEndWare = require('./Utils/errorEndWare');
const jwtCheck= require('./Utils/checkJwt')
const corsConfig = require('./Utils/corsConfig')

const server = express();

server.use(morgan('dev'));
//server.use(cors('dev'));
server.use(corsConfig)
server.use(express.json());
//server.use(jwtCheck)
server.use(mainRouter);


server.use(errorEndWare)
// Error catching endware.

module.exports = server;