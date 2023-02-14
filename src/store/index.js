import { combineReducers, createStore } from "redux";

import { authReducer } from "./auth/AuthReducer";
import { reducer } from "./todo/TodoReducer";


const rootReducer = combineReducers({
  auth: authReducer,
  reducer : reducer
});

export const store = createStore(rootReducer);

store.subscribe(() => {
  console.log("store render");
});
