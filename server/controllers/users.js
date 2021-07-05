const User = require("../models/User");
module.exports = {
  signUp,
  logIn,
};

// Not Postman Validated
async function signUp(req, res) {
  const user = new User(req.body);
  try {
    await user.save();
    res.json({ token: createJWT(user) });
  } catch (err) {
    res.status(400).json(err);
  }
};

// Not Postman Validated
async function logIn(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    const token = createJWT(user);
    res.json({ token });
  } catch (err) {
    //You could possibly bifurcate this further into login/password
    return (res.status(401).json({ err: 'Incorrect login credentials' }))
  }
};

