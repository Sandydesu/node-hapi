const UserModel = require("../models/user");

function UserController() {

}

UserController.prototype.getAllUsers = async function () {
    const users = await UserModel.getAllUsers();
    return users;
};

UserController.prototype.createUser = async function (request) {
    const users = await UserModel.createUser(request.payload);
    return users;
};

module.exports = new UserController();