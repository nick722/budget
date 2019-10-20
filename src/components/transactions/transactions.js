import React, { Component } from "react";
import { connect } from "react-redux";
import TransactionsList from "./transactions-list/transactions-list";
import InstrumentsPane from "./instrumenst-pane/instruments-pane";
import BalancePane from "./balance-pane/balance-pane";
import transactions from "../../server-mock/transactions";
import { success } from "../../store/transactions/transactions";

import "./transactions.scss";

class Transactions extends Component {
  getInitialTransactions = transactions => {
    this.props.dispatch(success(transactions));
  };

  componentDidMount() {
    this.getInitialTransactions(transactions);
  }

  render() {
    return (
      <div className="transactions">
        <BalancePane />
        <TransactionsList transactions={this.props.transactions} />
        <InstrumentsPane />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    transactions: state.transactions
  };
};

export default connect(mapStateToProps)(Transactions);
