const express = require("express");
const router = express.Router();
const transactionsGetRoute = require("./transactions__get/route");
const transactionsPostRoute = require("./transactions__post/route");

module.exports = params => {
  router.get("/", transactionsGetRoute(params));
  router.post("/", transactionsPostRoute(params));

  return router;
};
