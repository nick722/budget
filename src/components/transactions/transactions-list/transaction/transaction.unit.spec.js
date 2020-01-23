import React from "react";
import { Transaction } from "./transaction";
import { shallowWithIntl } from "../../../../test-helpers/intl-enzyme-test-helper";

const defaultProps = {
  transaction: {
    amount: 0,
    description: "test transaction",
    type: "test type"
  }
};

describe("Transaction component", () => {
  let component;

  beforeEach(() => {
    component = shallowWithIntl(<Transaction {...defaultProps} />);
  });

  it("should render into the document", () => {
    expect(component).toHaveLength(1);
  });

  it("should have text with translated currency string", () => {
    expect(
      component
        .find("td")
        .at(1)
        .text()
    ).toEqual(expect.stringContaining("rub"));
  });

  it("should set className for tr according to the type of the transaction", () => {
    const transactionProp = { transaction: { type: "testtype" } };

    component.setProps(transactionProp);

    expect(
      component
        .find("tr")
        .hasClass(`transaction_${transactionProp.transaction.type}`)
    ).toBe(true);
  });
});
