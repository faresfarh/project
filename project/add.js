const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// الاتصال بقاعدة البيانات MongoDB
mongoose.connect("mongodb://localhost:27017/user-management", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// نموذج المستخدم
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: { type: String, default: "user" }, // "user" or "admin"
});

const User = mongoose.model("User", userSchema);

// تسجيل مستخدم جديد
app.post("/api/register", async (req, res) => {
    const { username, password, role } = req.body;
  
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword, role });
    await user.save();
  
    res.status(201).send("User registered");
  });
  
  // تسجيل الدخول
  app.post("/api/login", async (req, res) => {
    const { username, password } = req.body;
  
    const user = await User.findOne({ username });
    if (!user) return res.status(404).send("User not found");
  
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(401).send("Invalid credentials");
  
    const token = jwt.sign({ id: user._id, role: user.role }, "secret_key");
    res.json({ token, role: user.role });
  });

  // الحصول على بيانات المستخدمين (للمدير فقط)
app.get("/api/admin/users", async (req, res) => {
    const users = await User.find();
    res.json(users);
  });
  
  // حذف مستخدم (للمدير فقط)
  app.delete("/api/admin/users/:id", async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.send("User deleted");
  });
  
  // تشغيل السيرفر
  app.listen(5000, () => console.log("Server running on http://localhost:5000"));