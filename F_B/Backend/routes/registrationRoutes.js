const express = require("express");
const {
  getRegisterController,
  postRegisterController,
} = require("../controller/registrationController");
const registerRoute = express.Router();

registerRoute.get("/register", getRegisterController);
registerRoute.post("/register", postRegisterController);

module.exports = { registerRoute };
