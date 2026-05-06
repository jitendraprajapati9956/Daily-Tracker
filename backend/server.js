const cron = require("node-cron");
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const trackerRoutes = require("./routes/trackerRoutes");

const app = express();

connectDB();

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
app.use(cors({ origin: 'https://your-vercel-url.vercel.app' }));
app.use(express.json());

app.use("/tracker", trackerRoutes);

app.use("/api", require("./routes/japRoutes"));

app.listen(5000, () => console.log("Server running on port 5000"));
