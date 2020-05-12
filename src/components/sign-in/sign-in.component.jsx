import React, { Component } from "react";
import FormInput from "../form-input";
import CustomButton from "../custom-button";
import { auth, signinWithGoogle } from "../../firebase/firebase.utils";
import "./sign-in.styles.scss";

class SingIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSumbit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (err) {
      console.log(err.message);
    }
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSumbit}>
          <FormInput
            id="email"
            type="email"
            name="email"
            label="Email"
            value={this.state.email}
            handleChange={this.handleInputChange}
            required
          />
          <FormInput
            id="password"
            type="password"
            name="password"
            label="Password"
            value={this.state.password}
            handleChange={this.handleInputChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signinWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SingIn;
