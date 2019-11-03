import React, { Component } from "react";
import { connect } from "react-redux";
import TransactionsList from "./transactions-list/transactions-list";
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
        <div className="transactions__nave-pane">
          <div className="transactions__month-banner">October 2019</div>
        </div>
        <div className="balance-pane">
          <div className="balance-banner">
            <span>Overall balance </span>
            <span className="balance-banner__sum">5100 rub.</span>
          </div>
        </div>
        <TransactionsList transactions={this.props.transactions} />
        <div className="instruments-pane">
          <button className="add-button">Add transaction</button>
        </div>
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
