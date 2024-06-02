require("dotenv").config();
const express = require("express");
const app = express();
const routes = require("./routes");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use("/", routes);

app.use((error, req, res, next) => {
  res.status(500).send(error);
});

const port = process.env.APP_PORT;

app.listen(port, () => {
  console.log(`Server Listening at http://localhost:${port}`);
});
