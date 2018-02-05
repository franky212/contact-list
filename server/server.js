const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");

const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(morgan("dev"));

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/contacts", {useMongoClient: true}, (err) => {
  if(err) throw err;
  console.log("Connected to the database");
});

app.use("/contacts")
