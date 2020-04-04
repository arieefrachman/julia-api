`use strict`;

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    first_name: String,
    last_name: String,
    password: String
});

module.exports = mongoose.model('user', userSchema);
