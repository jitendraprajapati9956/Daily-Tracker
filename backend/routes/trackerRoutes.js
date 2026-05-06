const express = require("express");
const router = express.Router();
const Tracker = require("../models/Tracker");
const trackerController = require("../controllers/trackerController");
router.post("/save", async (req, res) => {
  try {
    const data = req.body;

    await Tracker.findOneAndUpdate(
      { date: data.date },
      data,
      { upsert: true }
    );

    res.json({ success: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/morning-jap", trackerController.completeMorningJap);
router.post("/mini-jap", trackerController.addMiniJap);
router.post("/sankalp", trackerController.saveSankalp);
router.get("/all", async (req, res) => {
  const data = await Tracker.find();
  res.json(data);
});

module.exports = router;
