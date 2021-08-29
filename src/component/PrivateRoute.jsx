import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateRoute(route) {
  const {isAuthenticated} = useSelector((state) => state.auth);

  return (
    <>
      {isAuthenticated ? (
        <Route
          path={route.path}
          render={(props) => <route.component {...props} />}
        />
      ) : (
        <Redirect to={{ pathname: "/login" }} />
      )}
    </>
  );
}
