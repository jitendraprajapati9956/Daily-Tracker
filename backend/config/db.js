const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://jitendraprajapati9956_db_user:jitendraprajapati9956@dailytracker.hrupv93.mongodb.net/dailytracker?retryWrites=true&w=majority"
    );

    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;