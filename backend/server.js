const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5001;
const { errorHandler } = require("./middleware/errorMiddleware");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// home route
app.use("/", require("./routes/todosRoute"));

// error middleware
app.use(errorHandler);

// start app on PORT
app.listen(PORT, console.log(`server running http://localhost:${PORT}`));
