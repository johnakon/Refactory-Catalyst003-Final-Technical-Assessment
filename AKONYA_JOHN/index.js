const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();


app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))


// Mongoose connects the app to the mongoDB.
mongoose.connect("mongodb://localhost:27017/refactory",() => {
  console.log("connected successfully to databse")
});


//then after connecting to the db, 
const userSchema = new mongoose.Schema({
  surname:{ type:String, unique : true, required : "surname required"},
  givenname:{ type:String, unique : true, required : "Lastname required"},
  dob:{type:Date, required : "date of birth"},
  gender:{ type:String, required : "gender"},
  country:{ type:String, required : "country required"},
  placeofResidence:{ type:String, required : "place of residence required"},
  phoneno:{ type:Number, required : "Phone no. required"},
  email:{ type:String, required : "email required"},
  skills:{ type:String, required : "skills"},
  projects:{ type:String, required : "Parojects"}

})

//creating the model for this schema
const myProfileModel  = mongoose.model("student", userSchema)




// ROUTES
app.get('/', (req, res) => {
  res.render('myForm', {title : 'ProfileMe'})
});

// server.post('/register', (req, res) => {
//     res.send("we are live")
// });
//get data from the form
app.post('/mydata', (req, res) => {
  // console.log(req.body.firstname, req.body.password);

  //creating an instance of the data entered
  let newProfileModel = new myProfileModel(req.body)
  newProfileModel.save()
});


//Setting the server and to Listen to port 3000
app.listen(2000, () => {
    console.log("listening on 2000");
  });
