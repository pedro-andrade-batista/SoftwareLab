const express = require('express');
const consign = require('consign');

const server = express();

server.use(express.static('public'));
server.set('view engine', 'ejs');
server.set('views', 'application/views');

server.use(express.urlencoded({extended:true}));

consign()
    .include('application/routes')
    .then('application/model')
    .then('application/config/dbConnection.js')
    .then('application/controller')
    .then('application/DAO')
    .into(server);

module.exports = server;