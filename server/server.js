const express = require("express");
const server = express();
const cors = require("cors");
const bodyParser = require("body-parser");

let transactions = [];
transactions = require("./transactions");

server.use(cors());
server.use(bodyParser.json());

server.get("/", (req, res, next) => {
  res.send(transactions);
});

server.post("/", (req, res, next) => {
  transactions.push({
    description: req.body.description,
    amount: req.body.amount,
    id: +new Date()
  });
  res.sendStatus(200);
});

server.use((req, res, next) => {
  res.status(404).send("<h1>404. Page not found</h1>");
});

server.listen(3001, () => {
  console.log("The server is running on the port 3001");
});
