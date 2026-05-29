require("dotenv").config();

const cron = require("node-cron");
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const trackerRoutes = require("./routes/trackerRoutes");
const japRoutes = require("./routes/japRoutes");
const authRoutes = require("./routes/authRoutes");

// IMPORTANT
const Tracker = require("./models/Tracker");

const app = express();

connectDB();

// CORS
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://daily-tracker-eta-brown.vercel.app",
    ],
    credentials: true,
  })
);

app.use(express.json());

// ROUTES
app.use("/tracker", trackerRoutes);

app.use("/api", japRoutes);

app.use("/api/auth", authRoutes);

// HEALTH CHECK
app.get("/", (req, res) => {
  res.send("API Running ✅");
});

// CRON JOB
cron.schedule("0 0 * * *", async () => {
  try {
    console.log("🔄 Midnight Reset Running...");

    const today = new Date()
      .toISOString()
      .split("T")[0];

    await Tracker.updateMany(
      { date: { $ne: today } },
      {
        $set: {
          morningJapCompleted: false,
          japMinutes: 0,
          miniJapCount: 0,
          sankalpLine: "",
        },
      }
    );

    console.log("✅ Daily Progress Reset Completed");
  } catch (err) {
    console.log("Cron Error:", err.message);
  }
});

// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
