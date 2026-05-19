<<<<<<< HEAD
const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/dailyTracker");
  console.log("MongoDB Connected");
};

=======
const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/dailyTracker");
  console.log("MongoDB Connected");
};

>>>>>>> 187a771c8e17bf05e25c8a29098bdab78c94e412
module.exports = connectDB;