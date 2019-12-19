const express = require("express");
const users = express.Router();
const User = require("../models/users");

//create
users.post("/", (req, res) => {
  const newUser = req.body;
  console.log(req.body);
  User.create(newUser, (err, createdUser) => {
    err ? console.log(err.message) : res.status(200).json(createdUser);
  });
});

//find one
users.get("/:id", (req, res) => {
  id = req.params.id;
  User.findById(id, (err, foundUser) => {
    err
      ? console.log(err.message)
      : res.status(200).json({
          name: foundUser.name,
          username: foundUser.username,
          listings: foundUser.listings,
          messages: foundUser.messages
        });
  });
});

users.post("/authenticate", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  User.findOne({ username: username }, (err, foundUser) => {
    if (err) {
      console.log(err.message);
    } else if (foundUser.password === password) {
      res.status(200).json({ loggedIn: true });
    } else {
      res.status(404).json({ loggedIn: false });
    }
  });
});

module.exports = users;
