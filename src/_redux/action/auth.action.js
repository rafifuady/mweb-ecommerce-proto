import { authConstants } from "../constant";
import { appStateActions } from "./appState.action";
import { differenceInMinutes } from "date-fns/esm";
export const authActions = {
  login,
  // logout,
  // getUserData,
  checkAuth,
  // removeToken,
  // forgotPass,
  // resetPass,
  // register,
  // activate,
  // checkReset,
};

function login(payload) {
  return async (dispatch) => {
    dispatch({
      type: authConstants.LOGIN_REQUEST,
      payload: { isLoading: true },
    });

    const data = {
      token: "asdqwezxc",
      loggedDatetime: new Date(),
      remember: payload.remember,
    };

    dispatch(saveToken(data));

    dispatch({
      type: authConstants.LOGIN_SUCCESS,
      payload: {
        isLoading: false,
        authToken: data.token,
        loggedDatetime: data.loggedDatetime,
        isAuthenticated: true
      },
    });
  };
}

function saveToken(data) {
  return async (dispatch) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("loggedDatetime", data.loggedDatetime);
    dispatch({
      type: authConstants.LOGIN_STORE_TOKEN,
      payload: { isStored: true },
    });
  };
}

function checkAuth() {
  return (dispatch) => {
    const authToken = localStorage.getItem("token");
    const getLastLogin = localStorage.getItem("loggedDatetime");
    // const getRememberMe = localStorage.getItem("remember");

    //TODO:change timezone
    let check = differenceInMinutes(
      new Date(),
      new Date(getLastLogin)
    );
    if (check >= 300) {
      // login session jadi 30 menit
      // if (check >= 430 && getRememberMe === false) {
      localStorage.removeItem("auth_token");
      localStorage.removeItem("lastLogin");
      localStorage.removeItem("remember");
      dispatch(appStateActions.isAppReady());
      return dispatch({
        type: authConstants.CHECK_LOCAL_TOKEN,
        payload: {
          isAuthenticated: false,
          isLoading: false,
          isFailed: false,
          remember: false,
          errorMessage: "",
          authToken: "",
        },
      });
    } else if (authToken) {
      dispatch({
        type: authConstants.CHECK_LOCAL_TOKEN,
        payload: {
          isAuthenticated: true,
          authToken: authToken,
        },
      });
      return dispatch(appStateActions.isAppReady());
    } else {
      dispatch({ type: authConstants.CHECK_LOCAL_TOKEN });
      return dispatch(appStateActions.isAppReady());
    }
  };
}