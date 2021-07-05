const User = require("../models/User");
module.exports = {
  signUp,
  logIn,
};

async function signUp(req, res) {
  console.log('signUp')
};

async function logIn(req, res) {
  console.log('login')
};

