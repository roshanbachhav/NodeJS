const express = require("express");
const cors = require("cors");
const dbConnection = require("./utils/server");
const { loginGetRoute } = require("./routes/loginRoutes");
const { homeRouter } = require("./routes/homeRoutes");
const Register = require("./models/registrationCollection");
const { registerRoute } = require("./routes/registrationRoutes");
const PORT = process.env.PORT || 9000;

const app = express();

app.use(cors());
app.use(express.json());

dbConnection();

app.use(homeRouter);
app.use(loginGetRoute);
app.use(registerRoute);

app.listen(PORT, () => {
  console.log(`Server will be started on port ${PORT}`);
});
