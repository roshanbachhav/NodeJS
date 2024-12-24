const Login = require("../models/collection");
const RegisterUser = require("../models/registrationCollection");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.getLoginController = async (req, res) => {
  try {
    const getLoginDetails = await Login.find();
    res.status(201).json(getLoginDetails);
  } catch (error) {
    res.status(500).json({
      message: " opps something went worng in DB",
      error: error.message,
    });
  }
};

exports.postLoginController = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await RegisterUser.findOne({ username }).select("+password");
    if (!user) {
      return res.status(400).json({ message: "Oops, username not exists!" });
    }

    const passwordValidation = await bcrypt.compare(password, user.password);
    if (!passwordValidation) {
      return res.status(400).json({ message: "Oops, Password is incorrect!" });
    }

    const token = jwt.sign(
      { id: user._id, username: username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    if (error.code === 11000) {
      return res
        .status(400)
        .json({ message: "Oops, username already exists!" });
    }
    res.status(500).json({
      message: "Username and Password not added succefully.",
      error: error.message,
    });
  }
};
