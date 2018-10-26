const mongoose = require('mongoose');
// const crypto = require('crypto');
// const jwt = require('jsonwebtoken');

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    userName: String,
    password: String,
    name: String,
});

UsersSchema.virtual('date')
    .get(() => this._id.getTimestamp());

mongoose.model('User', UsersSchema);