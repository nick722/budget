const express = require("express");
const router = express.Router();

module.exports = transactions => {
  router.post("/", (req, res) => {
    transactions.push({
      description: req.body.description,
      amount: req.body.amount,
      id: Date.now()
    });
    res.sendStatus(200);
  });

  return router;
};
