import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AuthReducer from "./auth";
import mealsReducer from "./api";
import RegisterReducer from "./register";

const rootReducer = combineReducers({
  meals: mealsReducer,
  mealById: mealsReducer,
  user: AuthReducer,
  register: RegisterReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function genereteStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}
