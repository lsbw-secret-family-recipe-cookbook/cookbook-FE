import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logIn } from "../actions";

class SignInForm extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };
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
    this.props.logIn(this.state.credentials);
    this.setState({
      credentials: {
        username: "",
        password: ""
      }
    });
  };

  render() {
    if (localStorage.getItem("token")) {
      return <Redirect to="/" />;
    }
    return (
      <div className="signin-form-wrapper">
        {this.props.loggingIn ? (
          <h2>Loading</h2>
        ) : (
          <>
            <form onSubmit={this.logIn}>
              <h2>Sign in to your Secret Recipe Cookbook</h2>
              <p>Email:</p>
              <input
                type="email"
                required
                name="username"
                onChange={this.handleChanges}
                value={this.input}
              />
              <p>Password:</p>
              <input
                type="password"
                required
                name="password"
                onChange={this.handleChanges}
                value={this.input}
              />
              <button type="submit">Log In</button>
              <p>
                Not a member? Sign up <Link to="/sign-up">here</Link>
              </p>
            </form>
            <div className="image-right">
              <p>Add image here later</p>
            </div>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggingIn: state.loggingIn
});

export default connect(
  mapStateToProps,
  { logIn }
)(SignInForm);
