const mongoose = require("mongoose");

const listingSchema = mongoose.Schema(
  {
    author: String, // user id
    title: String,
    vehicle_make: String,
    vehicle_model: String,
    vehicle_year: Number,
    vehicle_color: String,
    vehicle_condition: String,
    description: String,
    img_url: String,
    messages: [String] //message ids
  },
  { timestamps: true }
);

module.exports = mongoose.model("Listing", listingSchema);
