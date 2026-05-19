<<<<<<< HEAD
const express = require("express");
const router = express.Router();

let japData = [];

router.post("/jap", (req, res) => {
  japData = req.body;
  res.json({ message: "Saved" });
});

router.get("/jap", (req, res) => {
  res.json(japData);
});

module.exports = router;
=======
const express = require("express");
const router = express.Router();

let japData = [];

router.post("/jap", (req, res) => {
  japData = req.body;
  res.json({ message: "Saved" });
});

router.get("/jap", (req, res) => {
  res.json(japData);
});

module.exports = router;
>>>>>>> 187a771c8e17bf05e25c8a29098bdab78c94e412
