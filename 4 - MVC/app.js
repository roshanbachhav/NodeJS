const express = require("express");
const path = require("path");
const homeRouter = require("./routes/firstRouter");
const { loginRouter } = require("./routes/loginRoute");
const { error404Controller } = require("./controllers/loginController");
const app = express();

const port = process.env.PORT || 3000;

app.use(homeRouter);
app.use(express.urlencoded({ extended: true }));
app.use("/admin", loginRouter);
app.use(express.static(path.join(__dirname, "public")));
app.use(error404Controller);

app.listen(port, () => {
  console.log(`Your port was started on port ${port}`);
});
