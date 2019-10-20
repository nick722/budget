export const FETCH_SUCCESS = "transactions/FETCH_SUCCESS";

// Action Creators
export const success = data => ({ type: FETCH_SUCCESS, payload: data });

// Reducer
export default (state = [], action = {}) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
