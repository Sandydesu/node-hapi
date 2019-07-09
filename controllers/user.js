const UserModel = require("../models/user");

function UserController() {

}



UserController.prototype.getAllUsers = async function () {
    const users = await UserModel.getAllUsers();
    return users;
};

UserController.prototype.getById = async function (request) {
    const users = await UserModel.getById(request.params.id);
    return users;
};

UserController.prototype.createOrUpdateUser = async function (request) {
    if (!request.payload._id && request.params.id) {
        request.payload._id = request.params.id;
    }
    const users = await UserModel.createOrUpdateUser(request.payload);
    return users;
};

UserController.prototype.deleteByID = async function (request) {
    const users = await UserModel.deleteById(request.params.id);
    return users;
};

module.exports = new UserController();