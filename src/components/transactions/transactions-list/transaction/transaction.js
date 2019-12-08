import React from "react";
import PropTypes from "prop-types";

import "./transaction.scss";

const Transaction = ({ transaction: { amount, description, type } }) => (
  <tr className={`transaction-${type}`}>
    <td>{description}</td>
    <td>{`${amount} rub.`}</td>
  </tr>
);

Transaction.defaultProps = {
  amount: 0,
  description: "",
  type: ""
};

Transaction.propTypes = {
  amount: PropTypes.number,
  description: PropTypes.string,
  type: PropTypes.string
};

export default Transaction;
