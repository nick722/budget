module.exports = transactions => (req, res) => {
  transactions.push({
    description: req.body.description,
    amount: req.body.amount,
    id: Date.now()
  });
  res.sendStatus(200);
};
