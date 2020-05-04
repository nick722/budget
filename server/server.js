const express = require("express");
const server = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes");
// src / components / add - transaction - form / add - transaction - form.js;

server.use(cors());
server.use(bodyParser.json());

server.use("/", routes);

server.use((req, res) => {
  res.status(404).send("<h1>404. Page not found</h1>");
});

server.listen(3001, () => {
  console.log("The server is running on the port 3001");
});
