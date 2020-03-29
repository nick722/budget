const express = require("express");
const server = express();
const cors = require("cors");
const bodyParser = require("body-parser");
// src / components / add - transaction - form / add - transaction - form.js;

let transactions = [];
transactions = require("./transactions");

server.use(cors());
server.use(bodyParser.json());

server.get("/", (req, res) => {
  res.send(transactions);
});

server.post("/", (req, res) => {
  transactions.push({
    description: req.body.description,
    amount: req.body.amount,
    id: Date.now()
  });
  res.sendStatus(200);
});

server.use((req, res) => {
  res.status(404).send("<h1>404. Page not found</h1>");
});

server.listen(3001, () => {
  console.log("The server is running on the port 3001");
});
