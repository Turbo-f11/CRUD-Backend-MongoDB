const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js"); 
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

mongoose
  .connect
  (
    "mongodb+srv://sharmanishant602:test@backendcrud.cpcnfc9.mongodb.net/?retryWrites=true&w=majority&appName=backendCRUD"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.error(err);
    console.log("Connection failed!");
  });