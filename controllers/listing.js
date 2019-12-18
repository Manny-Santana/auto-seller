const express = require("express");
const listing = express.Router();
const Listings = require("../models/listing");

//index
listing.get("/", (req, res) => {
  Listings.find({}, (err, foundListings) => {
    err ? console.log(err.message) : res.status(200).json(foundListings);
  });
});

//show
listing.get("/:id", (req, res) => {
  const id = req.params.id;
  Listings.findById(id, (err, foundListing) => {
    err ? console.log(err.message) : res.status(200).json(foundListing);
  });
});
//create
listing.post("/", (req, res) => {
  const newListing = req.body;
  console.log(newListing);
  Listings.create(newListing, (err, createdListing) => {
    err ? console.log(err.message) : res.status(200).json(createdListing);
  });
});

//update
listing.put("/:id", (req, res) => {
  const id = req.params.id;
  const updatedListing = req.body;
  Listings.findByIdAndUpdate(id, updatedListing, (err, updatedObj) => {
    err ? console.log(err.message) : res.status(200).json(updatedObj);
  });
});

//delete
listing.delete("/:id", (req, res) => {
  const id = req.params.id;
  Listings.findByIdAndDelete(id, (err, deletedListing) => {
    err ? console.log(err.message) : status(200).json(deletedListing);
  });
});

module.exports = listing;
