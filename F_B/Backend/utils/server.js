const mongoose = require("mongoose");
require("dotenv").config();

const mongo_URL = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}/?retryWrites=true&w=majority&appName=FrontendBackend`;

const dbConnection = async () => {
  try {
    await mongoose.connect(mongo_URL);
    console.log("Mongo DB connected successfully");
  } catch (e) {
    console.log("Error in mongoose db connections.....", e);
    process.exit(1);
  }
};

module.exports = dbConnection;
