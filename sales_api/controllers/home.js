const express = require("express");
const home = express.Router();
const User = require("../models/users");
const cors = require("cors");
/*-----------------------------------------------------------------------------------*/
//FIXME: should return all listings currently returns all users

home.get("/", cors(), (req, res) => {
  User.find({}, (err, AllUsers) => {
    err ? console.log(err.message) : res.status(200).json(AllUsers);
  });
});

module.exports = home;
