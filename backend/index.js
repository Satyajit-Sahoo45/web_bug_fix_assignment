require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
require("./startup/routes")(app);

mongoose
  .connect("mongodb://127.0.0.1:27017/chat-playground")
  .then(() => {
    console.log("connected to db successfully");
  })
  .catch((error) => {
    console.log("error connecting to db", error);
  });

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
