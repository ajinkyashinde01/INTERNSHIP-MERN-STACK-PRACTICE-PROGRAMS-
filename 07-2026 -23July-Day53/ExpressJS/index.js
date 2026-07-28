const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.get("/", (req, res) => {
  res.send("This is response from the express");
});

mongoose
  .connect(
    "mongodb+srv://ajinkyashinde38641_db_user:<db_password>@cluster0.7ppulhc.mongodb.net/?appName=Cluster0"
  )
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("database connection error", err);
  });

app.listen(3000, () => {
  console.log("express is running on the port 3000");
});