const UserModelSchema = require("../schemas/user");

function UserModel() {
    this.UserModelSchema = UserModelSchema;
}

UserModel.prototype.getAllUsers = async function () {
    const users = await this.UserModelSchema.find({});
    return users;
};

UserModel.prototype.createUser = async function (data) {
    const users = new this.UserModelSchema(data);
    const results = await users.save();
    return results;
};

module.exports = new UserModel();