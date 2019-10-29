import React, { Component } from "react";
import { connect } from "react-redux";
import TransactionsList from "./transactions-list/transactions-list";
import InstrumentsPane from "./instruments-pane/instruments-pane";
import BalancePane from "./balance-pane/balance-pane";
import NavPane from "./nav-pane/nave-pane";
import { fetchTransactions } from "../../store/transactions/transactions";

import "./transactions.scss";

class Transactions extends Component {
  getInitialTransactions = () => {
    this.props.dispatch(fetchTransactions());
  };

  componentDidMount() {
    this.getInitialTransactions();
  }

  render() {
    return (
      <div className="transactions">
        <NavPane />
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
