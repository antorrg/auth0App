const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mainRouter = require('./Routes/mainRouter')
const errorEndWare = require('./Utils/errorEndWare');


const server = express();

server.use(morgan('dev'));
server.use(cors('dev'));
server.use(express.json());
server.use(mainRouter);


server.use(errorEndWare)
// Error catching endware.

module.exports = server;