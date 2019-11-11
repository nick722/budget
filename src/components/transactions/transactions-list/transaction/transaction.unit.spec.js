import React from "react";
import { mount, render, shallow } from "enzyme";
import Transaction, { setBackgroundColor } from "./transaction";

const defaultProps = {
  transaction: {
    amount: 0,
    description: "test transaction",
    type: "test type"
  }
};

describe("TransactionsList component", () => {
  const component = mount(<Transaction {...defaultProps} />);
  it("should render into the document", () => {
    expect(component).toHaveLength(1);
  });

  it("should have correct props", () => {
    //todo HELP NEEDED
    // get Warning: validateDOMNesting(...): <tr> cannot appear as a child of <div>.
    // Looks like it's because of mount not shallow used
    // But I need mount to test props
    // How this can be fixed?
    expect(component.props()).toMatchObject(defaultProps);
  });

  describe("setBackgroundColor", () => {
    it("should return the correct color for Income transaction", () => {
      expect(setBackgroundColor("Income")).toBe("#dcf0d9");
    });

    it("should return the correct color for Expense transaction", () => {
      expect(setBackgroundColor("Expense")).toBe("#f8dede");
    });
  });
});
