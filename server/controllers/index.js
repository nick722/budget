const express = require("express");
const router = express.Router();
const transactionsGetRoute = require("./transactions__get/route");
const transactionsPostRoute = require("./transactions__post/route");

let transactions = [];
transactions = require("../transactions.json");

module.exports = () => {
  router.get("/", transactionsGetRoute(transactions));
  router.post("/", transactionsPostRoute(transactions));

  return router;
};
