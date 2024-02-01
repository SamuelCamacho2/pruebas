const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    username: String,
    amail: String,
    password: String
})

module.exports = model('User', userSchema);