import React, { useEffect, useState } from "react";
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

const handleAddTransaction = (data, addTransaction, isPosting) => {
  if (!isPosting) {
    addTransaction(data);
  }
};

export const Transactions = ({
  addTransaction,
  isPosting,
  fetchTransactions,
  transactions
}) => {
  const [addModalOpen, setAddModalOpen] = useState(false);

  useEffect(
    () => {
      fetchTransactions();
    },
    [transactions.isPosting]
  );

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
      <InstrumentsPane
        handleOpenAddModal={() => {
          setAddModalOpen(true);
        }}
      />
      <AddTransactionModal
        addTransactionFormSubmitHandler={data => {
          handleAddTransaction(data, addTransaction, isPosting);
          setAddModalOpen(false);
        }}
        appElement={document.getElementById("root")}
        isOpen={addModalOpen}
        handleCloseAddModal={() => {
          setAddModalOpen(false);
        }}
      />
    </div>
  );
};

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
