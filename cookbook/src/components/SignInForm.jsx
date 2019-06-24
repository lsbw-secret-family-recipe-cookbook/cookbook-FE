import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../actions";

class SignInForm extends React.Component {
  state = {
    credentials: {
      email: "",
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

  login = e => {
    e.preventDefault();
    // this.props.login(this.state.credentials);
    this.setState({
      credentials: {
        email: "",
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
            <form onSubmit={this.submitAddAccount}>
              <h2>Sign in to your Secret Recipe Cookbook</h2>
              <p>Email:</p>
              <input
                type="email"
                required
                name="email"
                onChange={this.handleChanges}
                value={this.input}
              />
              <p>Password:</p>
              <input
                type="password"
                required
                name="password1"
                onChange={this.handleChanges}
                value={this.input}
              />
              <button>Sign In</button>
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
//   { login }
)(SignInForm);
