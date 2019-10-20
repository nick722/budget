import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import createRootReducer from "./root";

export default (initialState = {}) => {
  const middlewares = [thunk];
  const composeEnhancers =
    (typeof window === "object" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
  const enhancers = composeEnhancers(applyMiddleware(...middlewares));

  return createStore(createRootReducer(), initialState, enhancers);
};
