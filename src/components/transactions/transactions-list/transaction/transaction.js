import React from "react";

const Transaction = ({ transaction: { amount, description } }) => {
  return (
    <tr className="transaction-entry">
      <td>{description}</td>
      <td>{amount}</td>
    </tr>
  );
};

export default Transaction;
