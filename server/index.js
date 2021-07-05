const path = require('path');
const express = require("express");
const mongoose = require('mongoose');

const db = 'mongodb+srv://User:asdasd12@cluster0.px3ep.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log(`Connected to MongoDB`)
  } catch (err) {
    console.log(`Couldn't establish connection to DB`)
    console.log(`${err}`)

    //This allow you to exit the process with a failure
    process.exit(1);
  }
};

connectDB();

const PORT = process.env.PORT || 3001;
const app = express();

let usersRouter = require('./routes/users');
let apiRouter = require('./routes/api');

app.use(express.static(path.resolve(__dirname, '../client/build')))

app.use('/users', usersRouter);
app.use('/api', apiRouter);

//NPM Start - Server Intitialization Confirmation

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});