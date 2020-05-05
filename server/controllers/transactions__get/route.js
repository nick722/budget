const express = require("express");
const router = express.Router();
const controller = require("./controller");

const path = "/";
const httpMethod = "get";

module.exports = transactions => {
  router[httpMethod](path, controller(transactions));
  return router;
};
