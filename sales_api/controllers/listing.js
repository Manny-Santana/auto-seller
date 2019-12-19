const express = require("express");
const listing = express.Router();
const Listings = require("../models/listing");
const cors = require("cors");
const User = require("../models/users");

listing.options("*", cors());
listing.use(cors());
//index
listing.get("/", cors(), (req, res) => {
  Listings.find({}, (err, foundListings) => {
    err ? console.log(err.message) : res.status(200).json(foundListings);
  });
});



//show
listing.get("/:id", cors(), (req, res) => {
  const id = req.params.id;
  Listings.findById(id, (err, foundListing) => {
    err ? console.log(err.message) : res.status(200).json(foundListing);
  });
});

//create
listing.post("/", cors(), (req, res) => {
  const newListing = req.body;
  console.log(newListing);
  Listings.create(newListing, (err, createdListing) => {
    User.findById(createdListing.author, (err, foundUser) => {
      if (err) {
        console.log(err.message);
      } else {
        foundUser.listings.unshift(createdListing._id);
        foundUser.save();
      }
    });

    err ? console.log(err.message) : res.status(200).json(createdListing);
  });
});



//update
listing.put("/:id", cors(), (req, res) => {
  const id = req.params.id;
  const updatedListing = req.body;
  Listings.findByIdAndUpdate(
    id,
    updatedListing,
    { new: true },
    (err, updatedObj) => {
      err ? console.log(err.message) : res.status(200).json(updatedObj);
    }
  );
});

//delete
listing.delete("/:id", cors(), (req, res) => {
  const id = req.params.id;
  Listings.findByIdAndDelete(id, (err, deletedListing) => {
    err ? console.log(err.message) : status(200).json(deletedListing);
  });
});

module.exports = listing;
