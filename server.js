// const fetch = require("node-fetch");
// import fetch from "node-fetch";
const express = require("express");

express.json();

const path = require("path");

const app = express();

const server = express();

app.use(express.json());

const jsonServer = require("json-server");

server.use("/messages", jsonServer.router(path.join(__dirname, "db.json")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/index.html"));
});

app.get("/", express.json(), (req, res) => {
  fetch("http://localhost:3004/messages", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      console.log(res);
    })
    .then((data) => {
      console.log(data);
    })
    .catch((e) => {
      console.log(e);
    });

  res.send(req.body);
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./views/index.html"));
});

app.post("/message", express.json(), (req, res) => {
  console.log(req.body);
  fetch("http://localhost:3004/messages", {
    method: "POST",
    body: JSON.stringify({
      message: req.body.message,
      timestamp: req.body.timestamp,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });

  res.sendStatus(200);
});

app.get("/message", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/message.html"));
});

app.get("/message", express.json(), (req, res) => {
  fetch("http://localhost:3004/messages", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      console.log(res);
    })
    .then((data) => {
      console.log(data);
    })
    .catch((e) => {
      console.log(e);
    });

  res.send(req.body);
});

app.listen(3000);
