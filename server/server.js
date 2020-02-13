const express = require("express");
const server = express();

let transactions = [];
transactions = require("./transactions");

server.get("/", (req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.send(transactions);
});

server.post("/", (req, res, next) => {
  transactions.push({ description: req.body.description });
  res.sendStatus(200);
});

server.use((req, res, next) => {
  res.status(404).send("<h1>404. Page not found</h1>");
});

server.listen(3001, () => {
  console.log("The server is running on the port 3001");
});
