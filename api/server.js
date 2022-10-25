const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/message", (req, res) => {
  res.send("message");
});

app.listen(3000);
