const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors(), bodyParser.json());

app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Listening on port", port);
});
