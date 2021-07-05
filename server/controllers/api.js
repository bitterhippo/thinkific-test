module.exports = {
  current,
  plusOne,
  set,
};

async function current(req, res) {
  try {
    //Query and encrypt
    const user = await User.findOne({ email: req.body.email });
    const token = createJWT(user);

    //Response from database to client
    res.json({ token });
  } catch (err) {
    console.log(`error with getCurrent API route`)
  }
};

async function plusOne(req, res) {
  try {
    //Query > Alter > Encrypt
    const user = await User.findOne({ email: req.body.email });
    user.sequence += 1;
    const token = createJWT(user);

    //Response to Client
    res.json({ token });

    //Cleanup
    await user.save();
  } catch (err) {
    console.log(`error with plusOne API route`)
  }
};

async function set(req, res) {
  try {
    //Query > Alter 
    const user = await User.findOne({ email: req.body.email });
    const newNumber = req.body.number();
    user.sequence = newNumber;

    //Response to Client
    res.json({ user})

    //Cleanup
    await user.save();
  } catch(err) {
    console.log(`error with set API route`)
  }
};