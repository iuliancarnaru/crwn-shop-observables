import React, { Component } from "react";
import FormInput from "../form-input";
import CustomButton from "../custom-button";
import { signinWithGoogle } from "../../firebase/firebase.utils";
import "./sign-in.styles.scss";

class SingIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSumbit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
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
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton onClick={signinWithGoogle}>
            Sign in with Google
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SingIn;
