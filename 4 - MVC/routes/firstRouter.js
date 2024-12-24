const express = require("express");
const firstRouter = express.Router();
const { indexController } = require("../controllers/homeController");

firstRouter.get("/", indexController);

module.exports = firstRouter;
