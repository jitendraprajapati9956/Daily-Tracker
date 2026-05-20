const Tracker = require("../models/Tracker");

exports.saveTracker = async (req, res) => {
  const data = await Tracker.findOneAndUpdate(
    { userId: req.body.userId, date: req.body.date },
    req.body,
    { upsert: true, new: true }
  );
  res.json(data);
};

exports.getTracker = async (req, res) => {
  const data = await Tracker.findOne({
    userId: req.params.userId,
    date: req.params.date
  });
  res.json(data);
};
exports.completeMorningJap = async (req, res) => {
  const { minutes } = req.body;
  const today = new Date().toISOString().split("T")[0];

  let tracker = await Tracker.findOne({ date: today });

  if (!tracker) {
    tracker = new Tracker({ date: today });
  }

  tracker.morningJapCompleted = true;
  tracker.japMinutes = minutes;

  await tracker.save();

  res.json({ success: true });
};

// ✅ Emergency Mini Jap
exports.addMiniJap = async (req, res) => {
  const today = new Date().toISOString().split("T")[0];

  let tracker = await Tracker.findOne({ date: today });

  if (!tracker) {
    tracker = new Tracker({ date: today });
  }

  tracker.miniJapCount += 1;

  await tracker.save();

  res.json({ success: true });
};

// ✅ Save Sankalp
exports.saveSankalp = async (req, res) => {
  const { sankalpLine } = req.body;
  const today = new Date().toISOString().split("T")[0];

  let tracker = await Tracker.findOne({ date: today });

  if (!tracker) {
    tracker = new Tracker({ date: today });
  }

  tracker.sankalpLine = sankalpLine;

  await tracker.save();

  res.json({ success: true });
const Tracker = require("../models/Tracker");

exports.saveTracker = async (req, res) => {
  const data = await Tracker.findOneAndUpdate(
    { userId: req.body.userId, date: req.body.date },
    req.body,
    { upsert: true, new: true }
  );
  res.json(data);
};

exports.getTracker = async (req, res) => {
  const data = await Tracker.findOne({
    userId: req.params.userId,
    date: req.params.date
  });
  res.json(data);
};
exports.completeMorningJap = async (req, res) => {
  const { minutes } = req.body;
  const today = new Date().toISOString().split("T")[0];

  let tracker = await Tracker.findOne({ date: today });

  if (!tracker) {
    tracker = new Tracker({ date: today });
  }

  tracker.morningJapCompleted = true;
  tracker.japMinutes = minutes;

  await tracker.save();

  res.json({ success: true });
};

// ✅ Emergency Mini Jap
exports.addMiniJap = async (req, res) => {
  const today = new Date().toISOString().split("T")[0];

  let tracker = await Tracker.findOne({ date: today });

  if (!tracker) {
    tracker = new Tracker({ date: today });
  }

  tracker.miniJapCount += 1;

  await tracker.save();

  res.json({ success: true });
};

// ✅ Save Sankalp
exports.saveSankalp = async (req, res) => {
  const { sankalpLine } = req.body;
  const today = new Date().toISOString().split("T")[0];

  let tracker = await Tracker.findOne({ date: today });

  if (!tracker) {
    tracker = new Tracker({ date: today });
  }

  tracker.sankalpLine = sankalpLine;

  await tracker.save();

  res.json({ success: true });
};