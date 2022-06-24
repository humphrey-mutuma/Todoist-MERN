const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGO_URI;

// check if we have a MONGODB URI
if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI in the .env file");
}

// use global cashed for cashing in development to prevent connections from growing exponentially

let cashed = global.mongoose;

if (!cashed) {
  cashed = global.mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
  if (cashed.conn) {
    return cashed.conn;
  }

  if (!cashed.promise) {
    const opts = {
      bufferCommands: false,
    };

    cashed.promise = await mongoose
      .connect(MONGODB_URI, opts)
      .then((mongoose) => {
        return mongoose;
      });
  }
  cashed.conn = await cashed.promise;
  return (
    cashed.conn,
    console.log(`MongoDB connected: ${cashed.conn.connection.host}`.cyan)
  );
};

module.exports = { connectDB };
