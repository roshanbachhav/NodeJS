const express = require("express");
const path = require("path");
const homeRouter = require("./routes/firstRouter");
const { loginRouter } = require("./routes/loginRoute");
const app = express();

const port = process.env.PORT || 3000;
app.use(homeRouter);
app.use(express.urlencoded({ extended: true }));
app.use("/admin", loginRouter);
app.use(express.static(path.join(__dirname, "public")));
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "views", "404.html"));
});
app.listen(port, () => {
  console.log(`Your port was started on port ${port}`);
});
