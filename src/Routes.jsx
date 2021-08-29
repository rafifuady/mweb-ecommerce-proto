import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BrowserPage } from "./pages/BrowserPage";
import { LoginPage } from "./pages/Auth";

import { appStateActions, authActions } from "./_redux/action";
import { HomePage } from "./pages/Home";
import PrivateRoute from "./component/PrivateRoute";
import { NavigationContainer } from "./container/Navigation";
import { ProductDetailPage } from "./pages/Product/ProductDetailPage";
import { PurchasedHistoryPage, MyWishlistPage } from "./pages/Profile";

export function Routes() {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const appState = useSelector((state) => state.appState);

  useEffect(() => {
    dispatch(appStateActions.checkDevice());
    dispatch(authActions.checkAuth());
    let storageListener = window.addEventListener("storage", () => {
      dispatch(authActions.checkAuth());
    });
    return () => storageListener && storageListener.removeEventListener();
  // eslint-disable-next-line
  }, []);

  return appState.isAppReady ? (
    <Router>
      <Switch>
        <Route path="/coming-soon">
          {appState.appScreenMobile ? <Redirect to="/" /> : <BrowserPage />}
        </Route>
        <Route exact path="/Login">
          {appState.appScreenBrowser ? (
            <Redirect to="/coming-soon" />
          ) : (
            <LoginPage />
          )}
        </Route>
        <PrivateRoute path="/wishlist" component={()=> <MyWishlistPage />} />
        <PrivateRoute path="/history" component={()=> <PurchasedHistoryPage />} />
        <PrivateRoute path="/product/detail/:id" component={()=> <ProductDetailPage />} />
        <PrivateRoute path="/" component={() => <HomePage />}>
          {/* {appState.appScreenBrowser ? <Redirect to="/coming-soon" /> : (<HomePage />)} */}
          {/* {appState.appScreenMobile ? <Redirect to="/" /> : <HomePage />} */}
        </PrivateRoute>
      </Switch>
      {auth.isAuthenticated && <NavigationContainer />}
    </Router>
  ) : (
    "loading"
  );
}
