const express = require("express");
const path = require("path");
const firstRouter = express.Router();

firstRouter.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "home.html"));
});

module.exports = firstRouter;
