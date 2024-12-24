const express = require("express");
const loginGetRoute = express.Router();
const {
  getLoginController,
  postLoginController,
} = require("../controller/loginController");

loginGetRoute.get("/login", getLoginController);
loginGetRoute.post("/login", postLoginController);

module.exports = { loginGetRoute };
