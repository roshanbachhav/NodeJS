const express = require("express");
const firstRouter = express.Router();
const temprory = express.Router();
const {
  indexController,
  sampleController,
} = require("../controllers/homeController");

firstRouter.get("/", indexController);

temprory.get("/sample/:id", sampleController);

module.exports = { firstRouter, temprory };
