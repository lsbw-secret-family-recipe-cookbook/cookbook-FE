import React from "react";
import {connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";

import {logOut} from "../actions";
import logo from "../assets/secret-cookbook-logo.png";

const Navigation = ({ history, loggedIn }) => {
  const signOut = () => {
    this.props.logOut(); //resets redux store, pushes to "/"
    localStorage.removeItem("token");
    history.push("/log-in")
  };


  return (
    <nav className="nav">
      <div className="nav-logo-set">
        <img src={logo} alt="logo" className="nav-logo" />
        <p className="nav-title">Secret Cookbook</p>
      </div>
      <div className="links">
        <NavLink to="/">
          <button>Home</button>
        </NavLink>
        <NavLink to="/add-recipe">
          <button>Add New Recipe</button>
        </NavLink>
        {loggedIn ? (
          <button onClick={signOut}>Log Out</button>
        ) : (
          <>
            <NavLink to="/sign-up">
              <button>Sign Up</button>
            </NavLink>
            <NavLink to="/log-in">
              <button>Log In</button>
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

const mapStateToProps = state => ({
  loggedIn: state.loggedIn
});

// TODO: finish connect/set up signout function
export default withRouter(connect(mapStateToProps, { logOut })(Navigation));

// recipes: {
//     title: "Crepe",
//     ingredients: {
//         1: "milk",
//         2: "flour"
//     }
// }
