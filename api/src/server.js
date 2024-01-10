const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const server = express();

server.use(morgan);
server.use(cors('dev'));
server.use(express.json());

//server.use(mainRouter);

module.exports = server;

