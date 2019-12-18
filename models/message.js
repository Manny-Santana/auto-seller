const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  author: String, // user id
  listingID: String,
  content: String
}, {timestamps: true});

module.exports = mongoose.model("Message", messageSchema);