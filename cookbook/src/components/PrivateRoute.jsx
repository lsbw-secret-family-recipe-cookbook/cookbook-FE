import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("token")) {
          return <Component {...props}{...rest} />;
        } else {
          return <Redirect to="/log-in" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
