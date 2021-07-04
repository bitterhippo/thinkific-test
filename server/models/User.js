var mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SALT_Rounds = 6;

//User Model for accont creation - Still requires password validation and encryption utilities.

//NOTE: DOES NOT CURRENTLY STORE SEQUENCE

let userSchema = new mongoose.Schema({
  email: String,
  password: String,
  sequence: Number
});

module.exports = mongoose.model('User', userSchema);