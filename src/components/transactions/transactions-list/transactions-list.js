import React from "react";
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

export default TransactionsList;
