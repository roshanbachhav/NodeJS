const express = require("express");
const path = require("path");
const loginRouter = express.Router();

loginRouter.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "login.html"));
});

const emailStorage = [];

loginRouter.post("/login", (req, res) => {
  console.log("Your Email : ", req.body.email);
  emailStorage.push(req.body.email);
  // console.log("Email Storage : ", emailStorage);
  res.sendFile(path.join(__dirname, "../", "views", "successful.html"));
});

module.exports = { loginRouter, emailStorage };
