const path = require('path');
const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

let usersRouter = require('./routes/users');
let apiRouter = require('./routes/api');

app.use(express.static(path.resolve(__dirname, '../client/build')))

app.use('/api/users', usersRouter);
app.use('/api', apiRouter);

//NPM Start - Server Intitialization Confirmation

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});