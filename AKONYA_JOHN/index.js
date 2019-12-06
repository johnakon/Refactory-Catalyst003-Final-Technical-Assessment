const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const mongodb = require("mongodb");

const app = express();

// Mongoose connects the app to the mongoDB.
mongoose.connect("mongodb://localhost:27017/JBC",() => {
  console.log("connected successfully to databse")
});
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))

// routes

app.get('/', (req, res, next) => {
  res.render('myForm', {title : 'ProfileMe'})
})



//Setting the server and to Listen to port 3000
app.listen(3000, () => {
    console.log("listening on 3000");
  });
