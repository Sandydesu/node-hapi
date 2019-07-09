const UserModelSchema = require("../schemas/user");

function UserModel() {
    this.UserModelSchema = UserModelSchema;
}


UserModel.prototype.getAllUsers = async function () {
    const users = await this.UserModelSchema.find({});
    return users;
};

UserModel.prototype.getById = async function (id) {
    const users = await this.UserModelSchema.findOne({ _id: id });
    return users;
};

UserModel.prototype.createOrUpdateUser = async function (data) {
    if (data._id) {
        const id = data._id;
        delete data._id;
        const results = await this.UserModelSchema.findOneAndUpdate({ _id: id }, data, { upsert: true, setDefaultsOnInsert: true });
        if (results._id) {
            data._id = results._id;
            return data;
        } else {
            return results;
        }
    } else {
        const users = new this.UserModelSchema(data);
        const results = await users.save();
        return results;
    }
};

UserModel.prototype.deleteById = async function (id) {
    const users = await this.UserModelSchema.deleteOne({ _id: id });
    return users;
};

module.exports = new UserModel();