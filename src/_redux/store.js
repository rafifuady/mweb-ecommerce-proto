import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer as reducers } from "../_redux/reducer/";

const composeMiddleware = applyMiddleware(thunk);

export const store = createStore(
  reducers,
  composeWithDevTools(composeMiddleware)
);
