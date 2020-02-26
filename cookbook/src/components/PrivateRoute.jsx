import React from "react";
import { Route, Redirect } from "react-router-dom";
import {connect} from "react-redux";
import {checkStatus} from "../actions"

const PrivateRoute = ({ loggedIn, component: Component, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (!loggedIn) {
          checkStatus()
          return <Redirect to="/log-in" />;
        } else {
          return <Component {...props}{...rest} />;
        }
      }}
    />
  );
};

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
  error: state.error
})

export default connect(mapStateToProps, {checkStatus})(PrivateRoute);
