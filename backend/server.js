const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const app = express();
var cors = require("cors");

const PORT = process.env.PORT || 5001;
app.use(cors());

const { connectDB } = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");

// connect to the database
connectDB();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// api routes
app.use("/api/todos", require("./routes/todosRoute"));
//handle 404 responses?
app.use("*", require("./routes/404"));

// error middleware
app.use(errorHandler);

// start app on PORT
app.listen(PORT, console.log(`server running http://localhost:${PORT}`));
