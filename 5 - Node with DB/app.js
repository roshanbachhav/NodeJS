const express = require("express");
const path = require("path");
const { firstRouter, temprory } = require("./routes/firstRouter");
const { loginRouter } = require("./routes/loginRoute");
const { error404Controller } = require("./controllers/loginController");
const { studentRouter } = require("./routes/studentRouter");
const app = express();

const port = process.env.PORT || 3000;

app.use(firstRouter);
app.use("/admin", temprory);
app.use(express.urlencoded({ extended: true }));
app.use("/admin", loginRouter);
app.use("/admin", studentRouter);
app.use(express.static(path.join(__dirname, "public")));
app.use(error404Controller);

app.listen(port, () => {
  console.log(`Your port was started on port ${port}`);
});
