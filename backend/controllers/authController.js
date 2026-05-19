const User = require("../models/User");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const signToken = (id) =>
    jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });

// ✅ Signup
exports.signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (await User.findOne({ email }))
            return res.status(400).json({ message: "Email already registered" });

        const user = await User.create({ name, email, password });

        res.status(201).json({
            token: signToken(user._id),
            user: { id: user._id, name: user.name, email: user.email },
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// ✅ Signin
exports.signin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user || !(await user.matchPassword(password)))
            return res.status(401).json({ message: "Invalid email or password" });

        res.json({
            token: signToken(user._id),
            user: { id: user._id, name: user.name, email: user.email },
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.forgotPassword = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(404).json({ message: "Email not found" });

        res.json({ success: true, email: req.body.email });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// ✅ Simple Reset Password - just email + new password
exports.resetPassword = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });

        user.password = password;
        await user.save();

        res.json({ success: true, message: "Password reset successful" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
// ✅ Get current user (protected)
exports.getMe = async (req, res) => {
    res.json({ user: req.user });
};