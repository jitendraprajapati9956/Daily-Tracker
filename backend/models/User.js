<<<<<<< HEAD
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
}, { timestamps: true });

// ✅ async function માં next નહીં - આ fix છે
userSchema.pre("save", async function () {
    if (!this.isModified("password")) return;
    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.matchPassword = async function (entered) {
    return bcrypt.compare(entered, this.password);
};

=======
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
}, { timestamps: true });

// ✅ async function માં next નહીં - આ fix છે
userSchema.pre("save", async function () {
    if (!this.isModified("password")) return;
    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.matchPassword = async function (entered) {
    return bcrypt.compare(entered, this.password);
};

>>>>>>> 187a771c8e17bf05e25c8a29098bdab78c94e412
module.exports = mongoose.model("User", userSchema);