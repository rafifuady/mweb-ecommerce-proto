import React, { useEffect }  from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { BrowserPage } from './pages/BrowserPage';
import { LoginPage } from './pages/Auth';

import { appStateActions }from './_redux/action'
import { HomePage } from './pages/Home';

export function Routes() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const appState = useSelector((state) => state.appState);


  useEffect(() => {
    dispatch(appStateActions.checkDevice());
  }, [])


  return (
    <Router>
      <Switch>
        <Route path="/coming-soon">
          {appState.appScreenMobile ? <Redirect to="/" /> : <BrowserPage />}
        </Route>
        <Route exact path="/Login">
          {appState.appScreenBrowser? <Redirect to="/coming-soon" /> : <LoginPage /> }
        </Route>
        <Route path="/">
          {appState.appScreenBrowser ? <Redirect to="/coming-soon" /> : <HomePage />}
        </Route>
        
      </Switch>
    </Router>
  )
}
