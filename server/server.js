const express = require("express");
const transactions = require("./transactions");
const server = express();

server.get("/transactions", (req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.send(transactions);
});

server.listen(3001, () => {
  console.log("The server is running on the port 3001");
});
