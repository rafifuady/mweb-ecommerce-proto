import React, { useEffect }  from 'react'
import {
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {isMobile, isBrowser} from 'react-device-detect';
import { BrowserPage } from './pages/BrowserPage';

import { appStateActions }from './_redux/action'

export function Routes() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const appState = useSelector((state) => state.appState);


  useEffect(() => {
    dispatch(appStateActions.checkDevice());
  }, [])

  return (
    <>    
      <Route path="/" component={()=> <BrowserPage />} /> 
      <Route path="/" component={()=> <BrowserPage />} />
    </>
  )
}
