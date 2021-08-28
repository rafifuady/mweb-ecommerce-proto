import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { store } from "./_redux/store";
import { Routes } from "./Routes";
import { theme } from "./styles/theme";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Test Title</title>
      </Helmet>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Provider store={store}>
            <Routes />
          </Provider>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
