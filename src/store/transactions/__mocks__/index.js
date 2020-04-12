import { initialState } from "./transactions.json";

const exampleState = {
  isGetting: false,
  isPosting: false,
  error: null,
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
    }
  ]
};

const responseData = [
  {
    id: 1,
    type: "Income",
    category: "Side Job",
    description: "Side Job",
    date: "12.08.2019",
    price: 2500,
    quantity: 1,
    amount: 2500
  }
];

export { exampleState, initialState, responseData };
