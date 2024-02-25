require("dotenv").config();
const mongoose = require("mongoose");

async function connectToMongoDB() {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("Server connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error.message);
  }
}

module.exports = {
  connectToMongoDB,
};
