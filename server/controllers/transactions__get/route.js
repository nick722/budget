const express = require("express");
const router = express.Router();

module.exports = transactions => {
  router.get("/", (req, res) => {
    res.send(transactions);
  });

  return router;
};
