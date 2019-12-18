const express = require("express");
const app = express();
const PORT = 3000;
const homeController = require("./controllers/home.js");
const mongoose = require("mongoose");
const seed = require("./models/userSeed");
const User = require("./models/users");
const listingController = require("./controllers/listing");
const userController = require("./controllers/user");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connect to db
mongoose.connection.on("error", err =>
  console.log(err.message + "check if server is running?")
);
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));

mongoose.connect("mongodb://localhost:27017/autoapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
mongoose.connection.once("open", () => {
  console.log("connected to mongoose...");
});

//controllers
app.get("/", (req, res) => {
  res.redirect("/home");
});

app.use("/home", homeController);
app.use("/listing", listingController);
app.use("/user", userController);

//seed
app.get("/seed", (req, res) => {
  User.create(seed, (err, createdUsers) => {
    err ? console.log(err.message) : console.log("created users");
    res.status(200).json(createdUsers);
  });
});

//listener
app.listen(PORT, () => {
  console.log("listening on PORT..", PORT);
});
