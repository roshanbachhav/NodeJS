const express = require("express");
const loginRouter = express.Router();
const { getLoginController, postLoginController} = require("../controllers/loginController");

loginRouter.get("/login", getLoginController);

loginRouter.post("/login", postLoginController);

module.exports = { loginRouter };
