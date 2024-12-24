const path = require("path");
const LoggersData = require("../Models/loggers");
const emailStorage = [];

exports.getLoginController = (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "login.html"));
};

exports.postLoginController = (req, res) => {
  const { email, password } = req.body;
  exports.saveData = emailStorage.push(req.body.email);
  const loggerUser = new LoggersData(email, password);
  loggerUser.save();
  res.sendFile(path.join(__dirname, "../", "views", "successful.html"));
  console.log("This is GetAll function : ", LoggersData.getAll());
};

exports.error404Controller = (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "404.html"));
};
