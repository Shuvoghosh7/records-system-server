const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//middleware
app.use(express.json());
app.use(cors());
//routes
const recordsRoute=require('./routes/record.route')
const fileRoute=require('./routes/file.route')

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

// route colling
app.use("/api/v1/records",recordsRoute)
app.use("/api/v1/file",fileRoute)



module.exports = app;
