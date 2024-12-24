const path = require("path");
const db = require("../utils/database");

exports.getStudentController = (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "students.html"));
};

exports.postStudentController = (req, res) => {
  const { sname, semail, scourse } = req.body;
  const query = `insert into students(sname , semail , scourse) values(?,?,?);`;
  db.query(query, [sname, semail, scourse], (err, result) => {
    if (err) {
      console.log(err.message);
    }
    console.log("Data Send Successfully", result);
    res.sendFile(path.join(__dirname, "../", "views", "successful.html"));
  });
  console.log(req.body);
};
