import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class SignUpForm extends React.Component {
  state = {
      name: "",
      email: "",
      password1: "",
    password2: "",
    passwordMatch: true
  };

  handleChanges = e => {
    e.persist();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitAddAccount = e => {
    e.preventDefault();
    if (this.state.password1 === this.state.password2) {
      this.props.signup(this.state.newUser);
      this.setState({
          name: "",
          email: "",
          password1: "",
          password2: ""
      });
    } else {
      this.setState({ ...this.state, passwordMatch: false });
    }
  };

  render() {
    return (
      <div className="signup-form-wrapper">
        {this.props.signingUp ? (
          <h2>Loading</h2>
        ) : (
          <>
            <form onSubmit={this.submitAddAccount}>
              <h2>Welcom to your Secret Recipe Cookbook</h2>
              <p>Name:</p>
              <input
                type="text"
                required
                name="name"
                onChange={this.handleChanges}
                value={this.input}
              />
              <p>Email:</p>
              <input
                type="email"
                required
                name="email"
                onChange={this.handleChanges}
                value={this.input}
              />
              <p>Create password:</p>
              <input
                type="password"
                required
                name="password1"
                onChange={this.handleChanges}
                value={this.input}
              />
              <p>Confirm password:</p>
              <input
                type="password"
                required
                name="password2"
                onChange={this.handleChanges}
                value={this.input}
              />
              {!this.state.passwordMatch ? (
                <p>Oops! Your passwords don't match</p>
              ) : (
                ""
              )}
              <button>Sign Up</button>
              <p>
                Already a member? Sign in <Link to="/sign-in">here</Link>
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
  signingUp: state.signingUp
});

export default connect(
  mapStateToProps
  // { signin }
)(SignUpForm);
