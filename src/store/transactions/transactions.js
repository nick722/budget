import axios from "axios";

export const ADD_TRANSACTION = "transactions/ADD_TRANSACTION";
export const FETCH_REQUEST = "transactions/FETCH_REQUEST";
export const FETCH_SUCCESS = "transactions/FETCH_SUCCESS";
export const FETCH_FAILURE = "transactions/FETCH_FAILURE";
export const ADD_REQUEST = "transactions/ADD_REQUEST";
export const ADD_SUCCESS = "transactions/ADD_SUCCESS";
export const ADD_FAILURE = "transactions/ADD_FAILURE";

// Action Creators
export const fetchRequest = () => ({
  type: FETCH_REQUEST
});
export const fetchSuccess = data => ({ type: FETCH_SUCCESS, payload: data });
export const fetchFailure = error => ({ type: FETCH_FAILURE, payload: error });

const addRequest = () => ({
  type: ADD_REQUEST
});
const addSuccess = () => ({
  type: ADD_SUCCESS
});
const addFailure = () => ({
  type: ADD_FAILURE
});

const initialState = {
  transactions: [],
  isGetting: false,
  isPosting: false,
  error: null
};

const url = "http://localhost:3001/";

// Thunks
export const fetchTransactions = () => dispatch => {
  dispatch(fetchRequest());
  return axios
    .get(url)
    .then(response => dispatch(fetchSuccess(response.data)))
    .catch(response => dispatch(fetchFailure(response)));
};

export const addTransaction = data => dispatch => {
  dispatch(addRequest());
  return axios
    .post(url, data)
    .then(() => dispatch(addSuccess()))
    .catch(err => {
      dispatch(addFailure());
    });
};

// Reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_REQUEST: {
      return {
        ...state,
        isPosting: true
      };
    }
    case ADD_SUCCESS: {
      return {
        ...state,
        // transactions: [...state.transactions, action.payload],
        isPosting: false
      };
    }
    case ADD_FAILURE: {
      return {
        ...state,
        isPosting: false
      };
    }
    case FETCH_REQUEST:
      return { ...state, isGetting: true, error: null };
    case FETCH_SUCCESS:
      return {
        ...state,
        isGetting: false,
        transactions: [...action.payload]
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isGetting: false,
        transactions: [],
        error: action.payload
      };
    default:
      return state;
  }
};
