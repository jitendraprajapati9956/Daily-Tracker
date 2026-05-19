const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
    signup,
    signin,
    forgotPassword,
    resetPassword,
    getMe,
} = require("../controllers/authController");

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.get("/me", auth, getMe);

module.exports = router;