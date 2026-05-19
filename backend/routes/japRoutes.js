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
