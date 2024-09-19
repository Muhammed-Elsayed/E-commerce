const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config()

mongoose.connect(process.env.Mongo_URL)
.then(()=> console.log("db connected successfully"))
.catch((err) => {console.log(err)})
app.listen(5000, ()=> {
  console.log("Server is running");
})