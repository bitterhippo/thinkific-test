const User = require("../models/User");
const jwt = require('jsonwebtoken');
module.exports = {
  signUp,
  logIn,
};

// Postman Validated 
async function signUp(req, res) {
  const user = new User(req.body);
  try {
    await user.save();
    res.json({ user });
  } catch (err) {
    res.status(400).json(err);
  }
};

// Postman Validated
async function logIn(req, res) {
  const user = await User.findOne({ email: req.body.email });
  try {
    res.json({ user });
  } catch (err) {
    //You could possibly bifurcate this further into login/password
    return (res.status(401).json({ err: 'Incorrect login credentials' }))
  }
};

// Encryption Function - NOT WORKING YET

function createJWT(user) {
  let token_contents = {
    _id: user._id,
    email: user.email,
    number: user.sequence
  }
  return jwt.sign(
    { user: token_contents }, // data payload
  );
}
