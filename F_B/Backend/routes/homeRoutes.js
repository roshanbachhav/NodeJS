const express = require("express");
const { homeController } = require("../controller/homeController");
const homeRouter = express.Router();

homeRouter.get("/", homeController);

module.exports = { homeRouter };
