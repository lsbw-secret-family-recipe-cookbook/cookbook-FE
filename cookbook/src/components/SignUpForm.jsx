import React from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp, checkStatus } from "../actions";
import logo from "../assets/secret-cookbook-logo.png";
import "../less/SignUpForm.less";

class SignUpForm extends React.Component {
  state = {
    email: "",
    password1: "",
    password2: "",
    showErrors: false,
    passwordError: "",
    emailError: ""
  };
  componentDidMount() {
    if (!this.props.loggedIn) {
      this.props.checkStatus();
    }
  }

  handleChanges = e => {
    e.persist();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validateInputs = () => {
    let validEmail = false;
    let validPassword = false;

    //email validation--checks that there is "@" and ".", "@" is before ".", "@" is not the first character, "." is not the last character
    let atpos = -1;
    let dotpos = -1;
    for (let i = 0; i < this.state.email.length; i++) {
      console.log("email letters", this.state.email[i]);
      if (this.state.email[i] === "@") {
        atpos = i;
      }
      if (this.state.email[i] === "." && atpos > -1) {
        dotpos = i;
      }
    }

    if (atpos > 0 && atpos < dotpos && dotpos < this.state.email.length - 1) {
      validEmail = true;
    }
    //minlength of 8 from form input, so only checking that passwords match
    if (this.state.password1 === this.state.password2) {
      // console.log("passwords match")
      validPassword = true;
    }
    // console.log("state", this.state)
    if (validEmail && validPassword) {
      return true;
    } else {
      if (!validEmail) {
        this.setState({
          ...this.state,
          emailError: "Invalid email entered",
          showErrors: true
        });
      }
      if (!validPassword) {
        this.setState({
          ...this.state,
          passwordError: "Passwords do not match",
          showErrors: true
        });
      }
      return false;
    }
  };

  signUp = async e => {
    e.preventDefault();
    const isValid = this.validateInputs();
    console.log("state", this.state, "isValid", isValid);
    if (isValid) {
      const newUser = {
        email: this.state.email,
        password: this.state.password1
      };
      await this.props.signUp(newUser, this.props.history);
      this.setState({
        email: "",
        password1: "",
        password2: "",
        showErrors: false,
        passwordError: false,
        emailError: false
      });
    } else {
      this.setState({ ...this.state, showErrors: true });
    }
  };

  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/" />;
    }
    if (this.props.loading) {
      return <h2>Loading</h2>;
    } else {
      return (
        <div className="signup-page-wrapper">
          <div className="signup-form-wrapper">
            <form className="signup-form" onSubmit={this.signUp}>
              <div className="signup-form-header">
                <div className="signup-logo-wrapper">
                  <img src={logo} alt="logo" className="signup-logo" />
                </div>
                <h3>Welcome to</h3>
                <h2>Secret Cookbook</h2>
              </div>
              <p>Email</p>
              <input
                type="text"
                required
                name="email"
                onChange={this.handleChanges}
                value={this.state.email}
              />
              {this.state.showErrors && this.state.validEmail.length > 0 ? (
                <p>{this.state.emailError}</p>
              ) : (
                ""
              )}
              <p>Create password</p>
              <input
                type="password"
                required
                name="password1"
                onChange={this.handleChanges}
                value={this.state.password1}
                minLength="8"
              />
              <p>Confirm password</p>
              <input
                type="password"
                required
                name="password2"
                onChange={this.handleChanges}
                value={this.state.password2}
                minLength="8"
              />
              {!this.state.passwordError && this.state.showErrors ? (
                <p>{this.state.passwordError}</p>
              ) : (
                <></>
              )}
              <br />
              <button className="signup-btn" type="submit">
                Sign Up
              </button>
              <p className="signup-small-font">
                Already a member? Sign in{" "}
                <Link to="/log-in" className="signup-link">
                  here
                </Link>
              </p>
              {this.props.signUpError ? <p>Error Signing Up</p> : <></>}
            </form>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  loading: state.loading,
  error: state.signUpError,
  loggedIn: state.loggedIn
});

export default withRouter(
  connect(
    mapStateToProps, 
    { signUp, checkStatus })
  (SignUpForm)
);
