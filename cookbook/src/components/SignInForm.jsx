import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logIn, checkStatus } from "../actions";
import { withRouter } from "react-router";
import logo from "../assets/secret-cookbook-logo.png";
import "../less/SignInForm.less";

class SignInForm extends React.Component {
  state = {
    credentials: {
      email: "",
      password: ""
    }
  };
  componentDidMount() {
    if (!this.props.loggedIn) {
    this.props.checkStatus()
    }
  }

  handleChanges = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  logIn = e => {
    e.preventDefault();
    this.props.logIn(this.state.credentials, this.props.history);
    this.setState({
      credentials: {
        email: "",
        password: ""
      }
    });
  };

  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <div className="login-page-wrapper">
        <div className="login-form-wrapper">
          {this.props.loading ? (
            <h2>Loading</h2>
          ) : (
            <>
              <form className="login-form" onSubmit={this.logIn}>
                <div className="login-form-header">
                  <div className="login-logo-wrapper">
                    <img src={logo} alt="logo" className="login-logo" />
                  </div>
                  <h3>Log in to</h3>
                  <h2> Secret Cookbook</h2>
                </div>
                <p>Email</p>
                <input
                  type="text"
                  required
                  name="email"
                  onChange={this.handleChanges}
                  value={this.input}
                />
                <p>Password</p>
                <input
                  type="password"
                  required
                  name="password"
                  onChange={this.handleChanges}
                  value={this.input}
                />
                <button className="login-btn" type="submit">
                  Log In
                </button>
                <p className="login-small-font">
                  Not a member? Sign up{" "}
                  <Link className="login-link" to="/sign-up">
                    here
                  </Link>
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.loading,
  success: state.success,
  error: state.error,
  loggedIn: state.loggedIn
});

export default withRouter(
  connect(
    mapStateToProps,
    { logIn, checkStatus }
  )(SignInForm)
);
