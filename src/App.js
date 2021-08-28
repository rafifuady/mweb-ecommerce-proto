import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { store } from "./_redux/store";
import { Routes } from "./Routes";
import { theme } from "./styles/theme";
import { CssBaseline, ThemeProvider } from "@material-ui/core";

function App() {
  return (
    <>
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
