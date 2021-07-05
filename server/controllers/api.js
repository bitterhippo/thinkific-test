const User = require("../models/User");
const jwt = require('jsonwebtoken');
module.exports = {
  current,
  plusOne,
  set,
};

//Postman Validated - Also probably uncessary

async function current(req, res) {
  const user = await User.findOne({ email: req.body.email });
  try {
    //Response from database to client
    res.json({ user });
  } catch (err) {
    console.log(`error with getCurrent API route`)
  }
};

//Postman Validated

async function plusOne(req, res) {
  const user = await User.findOne({ email: req.body.email });
  try {
    user.sequence += 1;

    //Response to Client
    res.json({ user });

    //Cleanup
    await user.save();
  } catch (err) {
    console.log(`error with plusOne API route`)
  }
};

//Postman Validated

async function set(req, res) {
  const user = await User.findOne({ email: req.body.email });
  user.sequence = req.body.sequence;
  try {
    //Response to Client
    res.json({ user})

    //Cleanup
    await user.save();
  } catch(err) {
    console.log(`error with set API route`)
  }
};