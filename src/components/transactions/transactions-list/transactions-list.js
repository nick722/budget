import React from "react";
import PropTypes from "prop-types";
import Transaction from "./transaction/transaction";

import "./transactions-list.scss";

const TransactionsList = ({ transactions: { transactions } }) => {
  const transactionList = transactions.map(transaction => {
    return <Transaction key={transaction.id} transaction={transaction} />;
  });

  return (
    <div className="transactions-list">
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody className="transactions-entries">{transactionList}</tbody>
      </table>
    </div>
  );
};

TransactionsList.propTypes = {
  transactions: PropTypes.shape({
    transactions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        type: PropTypes.string,
        category: PropTypes.string,
        description: PropTypes.string,
        date: PropTypes.string,
        price: PropTypes.number,
        quantity: PropTypes.number,
        amount: PropTypes.number
      })
    )
  })
};

export default TransactionsList;
