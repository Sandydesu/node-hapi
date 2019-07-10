const Hapi = require('@hapi/hapi');
const mongoose = require('mongoose');
const server = new Hapi.Server({ "host": "localhost", "port": 4000 });
mongoose.connect("mongodb://localhost:27017/sample");
const routes = require('./routes');
server.route(routes);
server.start();