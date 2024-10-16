const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")
dotenv.config()

mongoose.connect(process.env.Mongo_URL)
.then(()=> console.log("db connected successfully"))
.catch((err) => {console.log(err)})


// Middleware to parse JSON request bodies
app.use(express.json());
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/product", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);


app.listen(5000, ()=> {
  console.log("Server is running");
})

