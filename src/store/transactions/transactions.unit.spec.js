import axios from "axios";
import reducer, {
  FETCH_FAILURE,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  failure,
  request,
  success,
  fetchTransactions
} from "./transactions";
import { exampleState, initialState, responseData } from "./__mocks__";

jest.mock("axios", () => ({ get: jest.fn(() => Promise.resolve()) }));

describe("Transactions store", () => {
  const error = new Error("something went wrong!");

  describe("Action creators", () => {
    describe("request", () => {
      it("should create an action with type 'FETCH_REQUEST'", () => {
        expect(request()).toEqual({
          type: FETCH_REQUEST
        });
      });
    });

    describe("success", () => {
      it("should return an action with type 'FETCH_SUCCESS' and provided payload", () => {
        const mockPayload = { prop: "value" };
        expect(success(mockPayload)).toEqual(
          expect.objectContaining({ type: FETCH_SUCCESS, payload: mockPayload })
        );
      });
    });

    describe("failure", () => {
      it("should return an action with type 'FETCH_FAILURE'", () => {
        const mockErrorPayload = { prop: "error" };
        expect(failure(mockErrorPayload)).toEqual(
          expect.objectContaining({
            type: FETCH_FAILURE,
            payload: mockErrorPayload
          })
        );
      });
    });
  });

  describe("Reducer", () => {
    it("should return the correct state WHEN receives a 'FETCH_REQUEST' action", () => {
      const prevState = {
        ...exampleState
      };

      expect(
        reducer(prevState, {
          type: FETCH_REQUEST
        })
      ).toEqual({
        ...prevState,
        error: null,
        isLoading: true
      });
    });

    it("should return the correct state WHEN receives a 'FETCH_FAILURE'", () => {
      expect(
        reducer(initialState, { type: FETCH_FAILURE, payload: error })
      ).toEqual({
        ...initialState,
        error: error,
        isLoading: false,
        transactions: []
      });
    });

    it("should return the correct state WHEN  receives a 'FETCH_SUCCESS' action", () => {
      const payload = responseData;

      expect(
        reducer(initialState, { type: FETCH_SUCCESS, payload })
      ).toMatchObject(exampleState);
    });
  });

  describe("fetchTransactions thunk", () => {
    const mockDispatch = jest.fn();
    const mockGetState = () => ({
      transactions: [...exampleState]
    });
    const requestUrl = "http://localhost:3001/transactions";

    const fetch = () => fetchTransactions()(mockDispatch, mockGetState);

    beforeEach(() => {
      mockDispatch.mockReset();
    });

    it("should dispatch a FETCH_REQUEST action", () => {
      fetch();

      expect(mockDispatch).toHaveBeenCalledWith({
        type: FETCH_REQUEST
      });
    });

    it("should make a request", async () => {
      await fetch();

      expect(axios.get).toHaveBeenCalledWith(requestUrl);
    });

    //todo - Вызывается саксес с данными из феча при успешном выполнении
    it("should dispatch a FETCH_SUCCESS with proper payload WHEN the request succeeds", async () => {
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
      ];

      axios.get.mockResolvedValue({ data: responseData });

      await fetch();

      //todo HELP NEEDED: why FETCH_REQUEST is called, not FETCH_SUCCESS?
      expect(mockDispatch).toHaveBeenCalledWith({
        type: FETCH_SUCCESS,
        payload: { data: responseData }
      });
    });

    //todo  Обработать ошибку - вызывается фейл экшен при ошибке, с нужными данными
    it("should dispatch FETCH_ERROR with proper payload WHEN the request fails", () => {
      return false;
    });
  });
});
