const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    first_name: { type: String },
    last_name: { type: String },
    age: { type: Number }
});
module.exports = mongoose.model('users', userSchema);