const express = require("express");
const studentRouter = express.Router();
const {
  getStudentController,
  postStudentController,
} = require("../controllers/studentController");

studentRouter.get("/students", getStudentController);
studentRouter.post("/students", postStudentController);

module.exports = { studentRouter, postStudentController };
