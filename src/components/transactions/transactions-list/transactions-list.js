import React from "react";
import TransactionEntry from "./transaction-entry/transaction-entry";

import "./transactions-list.scss";

const TransactionsList = ({ transactions }) => {
  console.log("transactions:", transactions);

  const transactionList = transactions.map(transaction => (
    <TransactionEntry transaction={transaction} />
  ));

  return <div className="transactions-list">{transactionList}</div>;
};

export default TransactionsList;
