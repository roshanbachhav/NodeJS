const path = require("path");

exports.indexController = (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "home.html"));
};

exports.sampleController = (req, res) => {
  res.send("id: " + req.params.id);
};
