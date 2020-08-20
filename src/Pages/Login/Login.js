import React, { Component } from "react";
import "./loginTab";
import "./signUpTab";

export default class Login extends Component {
  render() {
    return (
      <div className="Login">
        <div className="logo">
          <img
            alt="CELINE"
            src="http://localhost:3000/Images/logo-celine.svg"
          />
        </div>
        <nav className="loginBar">
          <ul>
            <li>LOGIN</li>
            <li>SIGN UP</li>
          </ul>
          <button>CLOSE</button>
        </nav>
      </div>
    );
  }
}
