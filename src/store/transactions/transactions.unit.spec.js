import reducer, {
  FETCH_FAILURE,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  failure,
  request,
  success
} from "./transactions";
import { exampleState, initialState, responseData } from "./__mocks__";

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

  //todo
  describe("fetchTransactions", () => {
    it("creates FETCH_SUCCESS when fetching transactions has been done", () => {});
  });
});
