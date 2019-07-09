const Hapi = require('@hapi/hapi');
const mongoose = require('mongoose');
const config = require('./config/config.json');
const server = new Hapi.Server({ "host": "localhost", "port": 3000 });
mongoose.connect("mongodb://localhost:27017/sample");
const UserModel = require('./schemas/user');
server.route({
    method: "Get",
    path: "/users",
    handler: async (request, h) => {
        const users = await UserModel.find({});
        return users;
    }
});

server.route({
    method: "Post",
    path: "/users",
    handler: async (request, h) => {
        const user = new  UserModel(request.payload);
        await user.save();
        return user;
    }
});

server.start();