const express = require("express");

const app = express();

const server = express();

const jsonServer = require("json-server");

const path = require(path);

app.use(express.json());

server.use("/messages", jsonServer.router(path.join(__dirname, "db.json")));

// Establish routers
app.get("/", (req, res) => {
  res.send("index");
});

app.get("/messages", (req, res) => {
  res.send("messages");
});

app.listen(3000);
