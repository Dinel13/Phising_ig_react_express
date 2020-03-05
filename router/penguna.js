const express = require("express");
const rou = express.Router();
const user = require("./model/guna");

//gettoimng all
rou.get("/", async (req, res) => {
  try {
    const uuuser = await user.find();
    res.json(uuuser);
    console.log('succcces')
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//gettoimng one
rou.get("/:id", (req, res) => {console.log('succcces')});

//creting all
rou.post("/", async (req, res) => {
  const asu = new user({
    name: req.body.name,
    password: req.body.password
  });
  try {
    const newUser = await asu.save();
    res.status(201).json(newUser);
  } catch (err) {
      res.status(400).json({message : err.message})
  }
});

//updatinhg onbe
rou.patch("/:id", (req, res) => {
  res.send("helllo wold");
});

//delete oone
rou.delete("/:id", (req, res) => {});

module.exports = rou;
