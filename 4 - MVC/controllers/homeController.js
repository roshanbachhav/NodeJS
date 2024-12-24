const path = require("path");

exports.indexController = (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "home.html"));
};
