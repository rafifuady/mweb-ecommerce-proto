import { authConstants } from "../constant";
const initialState = {};

export function auth(state = initialState, action) {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      return {
        ...state,
        ...action.payload,
      };
    case authConstants.LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case authConstants.LOGIN_FAILED:
      return {
        ...state,
        ...action.payload,
      };
    case authConstants.LOGIN_STORE_TOKEN:
      return {
        ...state,
        ...action.payload,
      };
    case authConstants.LOGIN_REMOVE_TOKEN:
      return {
        ...state,
        ...action.payload,
      };
    case authConstants.RESET_AUTH_TOKEN:
      return {
        ...state,
        ...action.payload,
      };
    case authConstants.CHECK_LOCAL_TOKEN:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
