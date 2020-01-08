import React from "react";
import PropTypes from "prop-types";
import { injectIntl } from "react-intl";
import "./transaction.scss";

export const Transaction = ({
  intl,
  transaction: { amount, description, type }
}) => {
  const currency = intl.formatMessage({ id: "transaction.currency" });

  return (
    <tr className={`transaction transaction_${type}`}>
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
  type: PropTypes.oneOf(["", "income", "expense"])
};

export default injectIntl(Transaction);
