import React from "react";
import { shallow } from "enzyme";
import { Transactions } from "./transactions";
import TransactionsList from "./transactions-list/transactions-list";

const defaultProps = {
  addTransaction: jest.fn(),
  fetchTransactions: jest.fn(),
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

describe("Transactions component", () => {
  let component;

  beforeEach(() => {
    component = shallow(<Transactions {...defaultProps} />);
  });

  it("should render into the document", () => {
    expect(component).toHaveLength(1);
  });

  describe("Transaction List", () => {
    let transactionList;

    beforeEach(() => {
      transactionList = component.find(TransactionsList);
    });

    it("should render into the document", () =>
      expect(transactionList).toHaveLength(1));

    it("should have correct props", () =>
      expect(transactionList.props()).toMatchObject({
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
      }));
  });

  describe("InstrumentsPane", () => {
    let instrumentsPaneComponent;

    beforeEach(() => {
      instrumentsPaneComponent = component.find("InstrumentsPane");
    });

    it("should render into the document", () => {
      expect(instrumentsPaneComponent).toHaveLength(1);
    });

    it("should have expected props", () => {
      expect(instrumentsPaneComponent.props()).toMatchObject({
        handleOpenAddModal: component.instance().handleOpenAddModal
      });
    });
  });

  describe("AddTransactionModal", () => {
    let addModalComponent;

    beforeEach(() => {
      addModalComponent = component.find("AddTransactionModal");
    });

    it("should render into the document", () => {
      expect(addModalComponent).toHaveLength(1);
    });

    it("should have expected props", () => {
      expect(addModalComponent.props()).toMatchObject({
        isOpen: false,
        onClose: component.instance().handleOpenAddModal
      });
    });

    it("should handle Add modal render when addModalOpen state is toggled", () => {
      expect(component.find("AddTransactionModal").prop("isOpen")).toBe(false);

      component.instance().handleOpenAddModal();
      expect(component.find("AddTransactionModal").prop("isOpen")).toBe(true);
    });
  });
});
