const path = require('path');
const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')))

//API Endpoints

//Current

let index = 0;

app.get("/api/current", (req, res) => {
  res.json({
    value: index
  })
});

//Current +=1

app.get("/api/current", (req, res) => {
  index += 1;

  res.json({
    value: index
  })
});

//Set 

app.get("/api/set", (req,res) => {

  //This needs to: isolate the path variable > assign index to that number > return the updated value
  console.log(res)

  res.json({
    value: index
  })
});


//NPM Start - Server Intitialization Confirmation

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
})