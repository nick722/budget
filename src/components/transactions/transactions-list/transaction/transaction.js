import React from "react";
import PropTypes from "prop-types";

export const setBackgroundColor = transactionType => {
  if (transactionType === "Income") return "#dcf0d9";
  if (transactionType === "Expense") return "#f8dede";
};

const Transaction = ({ transaction: { amount, description, type } }) => {
  const style = {
    color: "blue",
    backgroundColor: setBackgroundColor(type)
  };

  return (
    <tr className="transaction" style={style}>
      <td>{description}</td>
      <td>{`${amount} rub.`}</td>
    </tr>
  );
};

Transaction.defaultProps = {
  amount: 0,
  description: "",
  type: ""
};

Transaction.propTypes = {
  amount: PropTypes.number,
  description: PropTypes.string,
  type: PropTypes.string
};

export default Transaction;
