import { appStateConstants } from "../constant";

const initialState = {
  isAppReady: false,
  appScreenMobile: null,
  appScreenBrowser: null,
};

export function appState(state = initialState, action) {
  switch (action.type) {
    case appStateConstants.APP_READY:
      return {
        ...state,
        ...action.payload,
      };
    case appStateConstants.APP_SCREEN:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
