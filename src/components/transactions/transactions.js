import React, { Component } from "react";
import TransactionsList from "./transactions-list/transactions-list";
import InstrumentsPane from "./instrumenst-pane/instruments-pane";
import BalancePane from "./balance-pane/balance-pane";
import transactions from "../../server-mock/transactions";

import "./transactions.scss";

class Transactions extends Component {
  render() {
    return (
      <div className="transactions">
        <BalancePane />
        <TransactionsList transactions={transactions} />
        <InstrumentsPane />
      </div>
    );
  }
}

export default Transactions;
