<<<<<<< HEAD
const mongoose = require("mongoose");

const trackerSchema = new mongoose.Schema({
  userId: String,
  date: String,

  satsang: Boolean,
  seva: Boolean,
  mala: Number,
  study: Boolean,
  jobWorkHours: Number,
  noFap: Boolean,
  exercise: Boolean,
  notes: String,

  // ✅ Morning Jap
  morningJapCompleted: {
    type: Boolean,
    default: false
  },
  japMinutes: {
    type: Number,
    default: 0
  },

  // ✅ Emergency Mini Jap
  miniJapCount: {
    type: Number,
    default: 0
  },

  // ✅ Sankalp
  sankalpLine: {
    type: String,
    default: ""
  }

});

module.exports = mongoose.model("Tracker", trackerSchema);
=======
const mongoose = require("mongoose");

const trackerSchema = new mongoose.Schema({
  userId: String,
  date: String,

  satsang: Boolean,
  seva: Boolean,
  mala: Number,
  study: Boolean,
  jobWorkHours: Number,
  noFap: Boolean,
  exercise: Boolean,
  notes: String,

  // ✅ Morning Jap
  morningJapCompleted: {
    type: Boolean,
    default: false
  },
  japMinutes: {
    type: Number,
    default: 0
  },

  // ✅ Emergency Mini Jap
  miniJapCount: {
    type: Number,
    default: 0
  },

  // ✅ Sankalp
  sankalpLine: {
    type: String,
    default: ""
  }

});

module.exports = mongoose.model("Tracker", trackerSchema);
>>>>>>> 187a771c8e17bf05e25c8a29098bdab78c94e412
