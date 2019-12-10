import React from "react";
import PropTypes from "prop-types";
import { injectIntl } from "react-intl";
import "./transaction.scss";

const Transaction = ({ intl, transaction: { amount, description, type } }) => {
  const currency = intl.formatMessage({ id: "transaction.currency" });

  return (
    <tr className={`transaction-${type}`}>
      <td>{description}</td>
      <td>{`${amount} ${currency}.`}</td>
    </tr>
  );
};

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

export default injectIntl(Transaction);
