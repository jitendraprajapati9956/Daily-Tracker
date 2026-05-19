<<<<<<< HEAD
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

=======
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

>>>>>>> 187a771c8e17bf05e25c8a29098bdab78c94e412
module.exports = router;