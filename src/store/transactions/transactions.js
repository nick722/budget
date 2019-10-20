import axios from "axios";

export const FETCH_REQUEST = "transactions/FETCH_REQUEST";
export const FETCH_SUCCESS = "transactions/FETCH_SUCCESS";
export const FETCH_FAILURE = "transactions/FETCH_FAILURE";

// Action Creators
export const request = () => ({
  type: FETCH_REQUEST
});
export const success = data => ({ type: FETCH_SUCCESS, payload: data });
export const failure = error => ({ type: FETCH_FAILURE, payload: error });

// Reducer
const initialState = {
  transactions: [],
  loading: false,
  error: null
};

const requestUrl = "http://localhost:3001/transactions";

// Thunk
export const fetchTransactions = () => {
  return dispatch => {
    dispatch(request());
    return axios
      .get(requestUrl)
      .then(response => dispatch(success(response.data)))
      .catch(response => dispatch(failure(response)));
  };
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        transactions: [...state.transactions, ...action.payload]
      };
    case FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        transactions: [],
        error: action.error
      };
    default:
      return state;
  }
};
