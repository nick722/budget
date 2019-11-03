import React from "react";

const Transaction = ({ transaction: { amount, description, type } }) => {
  const setBackgroundColor = transactionType => {
    if (transactionType === "Income") return "#dcf0d9";
    if (transactionType === "Expense") return "#f8dede";
  };

  const style = {
    color: "blue",
    backgroundColor: setBackgroundColor(type)
  };

  return (
    <tr className="transaction" style={style}>
      <td>{description}</td>
      <td>{amount}</td>
    </tr>
  );
};

export default Transaction;
