import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import TransactionsList from "./transactions-list/transactions-list";
import { fetchTransactions } from "../../store/transactions/transactions";

import "./transactions.scss";

export class Transactions extends Component {
  componentDidMount() {
    this.props.dispatch(fetchTransactions());
  }

  render() {
    return (
      <div className="transactions">
        <div className="transactions__nave-pane">
          <div className="transactions__month-panel">
            <div>
              <button className="transactions__month-panel--arrow">
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
            </div>
            <div className="transactions__month-panel--banner">
              October 2019
            </div>
            <div>
              <button className="transactions__month-panel--arrow">
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
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

const mapStateToProps = state => ({
  transactions: state.transactions
});

export default connect(mapStateToProps)(Transactions);
