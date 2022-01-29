import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import AuthReducer from "./auth";
import mealsReducer from "./api";

const rootReducer = combineReducers({
  meals: mealsReducer,
  mealById: mealsReducer,
  user: AuthReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function genereteStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}
