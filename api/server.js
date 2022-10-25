const express = require("express");

express.json();

const path = require("path");

const app = express();

const server = express();

app.use(express.json());

const jsonServer = require("json-server");

// var router = jsonServer.router('/some/path/db.json'); // <- use a file path here

// server.use(jsonServer.defaults);
// server.use(router);

// const message = require("./Controller/messageContorller");

server.use("/messages", jsonServer.router(path.join(__dirname, "db.json")));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/messages", function (req, res) {
  res.sendFile(path.join(__dirname, "./views/message.html"));
});

app.post("/messages", express.json(), (req, res) => {
  const data = JSON.stringify(req.body);
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

  res.send(200);
});

app.listen(3000);

// const express = require("express");
// const app = express();
// const port = 3000;

// const messageController = require("./Controller/messageContorller");

// app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   res.send("Hello");
// });

// app.get("/message", messageController.getAll);

// app.get("/message/:id", messageController.get);

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
