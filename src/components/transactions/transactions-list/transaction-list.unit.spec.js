import React from "react";
import { shallow } from "enzyme";
import TransactionsList from "./transactions-list";
import Transaction from "./transaction/transaction";

const defaultProps = {
  transactions: {
    transactions: [
      {
        id: 1,
        type: "Income",
        category: "Side Job",
        description: "Side Job",
        date: "12.08.2019",
        price: 2500,
        quantity: 1,
        amount: 2500
      },
      {
        id: 2,
        type: "Income",
        category: "Salary",
        description: "Cash advance",
        date: "02.08.2019",
        price: 5000,
        quantity: 1,
        amount: 5000
      }
    ]
  }
};

describe("TransactionsList component", () => {
  let component;

  beforeEach(() => {
    component = shallow(<TransactionsList {...defaultProps} />);
  });

  it("should render into the document", () => {
    expect(component).toHaveLength(1);
  });

  describe("Transaction", () => {
    let transaction;

    beforeEach(() => {
      transaction = component.find(Transaction).first();
    });

    it("should render into the document", () =>
      expect(transaction).toHaveLength(1));

    it("should have correct props", () =>
      expect(transaction.props()).toMatchObject({
        transaction: {
          id: 1,
          type: "Income",
          category: "Side Job",
          description: "Side Job",
          date: "12.08.2019",
          price: 2500,
          quantity: 1,
          amount: 2500
        }
      }));
  });
});
