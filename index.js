const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mo:momo@cluster0.swqyn.mongodb.net/")
.then(()=> console.log("db connected successfully"))
.catch((err) => {console.log(err)})
app.listen(5000, ()=> {
  console.log("Server is running");
})