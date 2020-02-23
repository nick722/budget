import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import TransactionsList from "./transactions-list/transactions-list";
import {
  addTransaction,
  fetchTransactions
} from "../../store/transactions/transactions";
import AddTransactionModal from "../add-transaction-modal/add-transaction-modal";
import BalancePane from "./balance-pane/balance-pane";
import InstrumentsPane from "./instruments-pane/instruments-pane";

import "./transactions.scss";

export class Transactions extends Component {
  state = {
    addModalOpen: false
  };

  componentDidMount() {
    this.props.fetchTransactions();
  }

  handleAddModalOpen = () => {
    this.setState(prevState => ({ addModalOpen: !prevState.addModalOpen }));
  };

  handleAddTransaction = data => {
    const { isLoading, addTransaction } = this.props;
    if (!isLoading) {
      addTransaction(data);
    }
  };

  render() {
    const { addTransaction, transactions } = this.props;

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
        <TransactionsList transactions={transactions} />
        <InstrumentsPane handleAddModalOpen={this.handleAddModalOpen} />
        <AddTransactionModal
          appElement={document.getElementById("root")}
          isOpen={this.state.addModalOpen}
          onClose={this.handleAddModalOpen}
          onSubmit={this.handleAddTransaction}
        />
      </div>
    );
  }
}

Transactions.defaultProps = {
  transactions: []
};

Transactions.propTypes = {
  addTransaction: PropTypes.func.isRequired,
  transactions: PropTypes.object
};

const mapStateToProps = state => ({
  transactions: state.transactions
});

const mapDispatchToProps = {
  addTransaction,
  fetchTransactions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Transactions);
