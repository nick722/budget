import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import TransactionsList from "./transactions-list/transactions-list";
import { fetchTransactions } from "../../store/transactions/transactions";
import BalancePane from "./balance-pane/balance-pane";
import InstrumentsPane from "./instruments-pane/instruments-pane";

import "./transactions.scss";

export class Transactions extends Component {
  componentDidMount() {
    this.props.fetchTransactions();
  }

  render() {
    return (
      <div className="transactions">
        <div className="nave-pane">
          <div className="nave-pane__month-panel">
            <button className="nave-pane__month-panel--arrow">
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div className="nave-pane__month-panel--banner">October 2019</div>
            <button className="nave-pane__month-panel--arrow">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
        <BalancePane />
        <TransactionsList transactions={this.props.transactions} />
        <InstrumentsPane />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  transactions: state.transactions
});

const mapDispatchToProps = {
  fetchTransactions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Transactions);
