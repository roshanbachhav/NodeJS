const bcrypt = require("bcryptjs");
const Register = require("../models/registrationCollection");

exports.getRegisterController = async (req, res) => {
  try {
    const getAllRegisteredUser = await Register.find();
    res.status(201).json(getAllRegisteredUser);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

exports.postRegisterController = async (req, res) => {
  const { email, username, password } = req.body;
  try {
    const emailExisted = await Register.findOne({ email });
    if (emailExisted) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const response = new Register({
      email,
      username,
      password: hashedPassword,
    });
    await response.save();
    res.status(201).json(response);
  } catch (error) {
    return res.status(500).json({
      message: "Opps! something went wrong in registration",
      error: error.message,
    });
  }
};
