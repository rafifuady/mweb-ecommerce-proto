import { combineReducers } from "redux";
import { appState } from "./appState.reducer";
import { auth } from "./auth.reducer";
import {product} from './product.reducer'

export const rootReducer = combineReducers({
  appState,
  auth,
  product
});
