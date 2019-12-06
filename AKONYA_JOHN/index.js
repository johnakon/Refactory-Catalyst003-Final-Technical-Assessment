const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const mongodb = require("mongodb");

const app = express();


app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))


// Mongoose connects the app to the mongoDB.
mongoose.connect("mongodb://localhost:27017/ProfileMe",() => {
  console.log("connected successfully to databse")
});


//then after connecting to the db, 
const userSchema = new mongoose.Schema({
  surname:{ type:String, unique : true, required : "surname required"},
  givenname:{ type:String, unique : true, required : "Lastname required"},
  password:{ type:String, required : "given name required"},
  gender:{ type:String, required : "gender required"},
  country:{ type:String, required : "country required"},
  placeofResidence:{ type:String, required : "place of residence required"},
  phoneno:{ type:Number, required : "Phone no. required"},
  email:{ type:String, required : "email required"},
  skills:{ type:String, required : "skills required"},
  projects:{ type:String, required : "Parojects required"}

})

//creating the model for this schema
const userModel  = mongoose.model("user", userSchema)


// routes
app.get('/', (req, res, next) => {
  res.render('myForm', {title : 'ProfileMe'})
})



//Setting the server and to Listen to port 3000
app.listen(3000, () => {
    console.log("listening on 3000");
  });
