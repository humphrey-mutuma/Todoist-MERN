const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// home route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// start app on PORT
app.listen(
  PORT,
  console.log(`server running http://localhost:${PORT}`)
);
