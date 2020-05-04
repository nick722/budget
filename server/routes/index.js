const express = require("express");

const router = express.Router();

let transactions = [];
transactions = require("../transactions.json");

router.get("/", (req, res) => {
  res.send(transactions);
});

router.post("/", (req, res) => {
  transactions.push({
    description: req.body.description,
    amount: req.body.amount,
    id: Date.now()
  });
  res.sendStatus(200);
});

module.exports = router;
