<<<<<<< HEAD
require("dotenv").config();
const cron = require("node-cron");
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const trackerRoutes = require("./routes/trackerRoutes");

const app = express();

connectDB();
console.log("JWT:", process.env.JWT_SECRET)
cron.schedule("0 0 * * *", async () => {
  console.log("🔄 Midnight Reset Running...");

  const today = new Date().toISOString().split("T")[0];

  await Tracker.updateMany(
    { date: { $ne: today } },
    {
      $set: {
        morningJapCompleted: false,
        japMinutes: 0,
        miniJapCount: 0,
        sankalpLine: ""
      }
    }
  );

  console.log("✅ Daily Progress Reset Completed");
});
app.use(cors());
app.use(express.json());

app.use("/tracker", trackerRoutes);

app.use("/api", require("./routes/japRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.listen(5000, () => console.log("Server running on port 5000"));
=======
require("dotenv").config();
const cron = require("node-cron");
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const trackerRoutes = require("./routes/trackerRoutes");

const app = express();

connectDB();
console.log("JWT:", process.env.JWT_SECRET)
cron.schedule("0 0 * * *", async () => {
  console.log("🔄 Midnight Reset Running...");

  const today = new Date().toISOString().split("T")[0];

  await Tracker.updateMany(
    { date: { $ne: today } },
    {
      $set: {
        morningJapCompleted: false,
        japMinutes: 0,
        miniJapCount: 0,
        sankalpLine: ""
      }
    }
  );

  console.log("✅ Daily Progress Reset Completed");
});
app.use(cors());
app.use(express.json());

app.use("/tracker", trackerRoutes);

app.use("/api", require("./routes/japRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.listen(5000, () => console.log("Server running on port 5000"));
>>>>>>> 187a771c8e17bf05e25c8a29098bdab78c94e412
