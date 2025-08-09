import { combineReducers, createStore } from "redux";
import { cartReducer } from "../redux/cart.reducer";

const rootReducers = combineReducers({
  cart: cartReducer
});

export const store = createStore(rootReducers);