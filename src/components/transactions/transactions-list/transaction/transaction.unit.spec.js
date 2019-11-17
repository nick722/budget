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
  const wrappedComponent = mount(
    <table>
      <tbody>
        <Transaction {...defaultProps} />
      </tbody>
    </table>
  );

  it("should render into the document", () => {
    expect(wrappedComponent.find(Transaction)).toHaveLength(1);
  });

  it("should have correct props", () => {
    expect(wrappedComponent.find(Transaction).props()).toMatchObject(
      defaultProps
    );
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
