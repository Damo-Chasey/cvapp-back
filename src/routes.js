const express = require("express");
const userModel = require("./models");
const app = express();

app.get('/', function(req, res){
  console.log("Website contacted");

  res.send("Api mounted");
  //res.sendStatus(200);
})

app.post("/add_user", async (request, response) => {
  const user = new userModel(request.body);

  try {
    await user.save();
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/users", async (request, response) => {
  console.log('Returning users');  
  const users = await userModel.find({});
  
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
});

app.get("/users/:id", async (request, response) => {
  console.log('Returning user'); 
  const {id} = req.params; 
  const users = await User.findById(id);
  
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
});

module.exports = app;