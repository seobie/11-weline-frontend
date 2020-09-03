import React, { Component } from "react";
import LoginTab from "./components/LoginTab";
import SignUpTab from "./components/SignUpTab";
import "./Login.scss";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: 1,
    };
  }

  clickHandler = (id) => {
    this.setState({
      activeTab: id,
    });
  };

  render() {
    const content = {
      1: <LoginTab functionFromNav={this.props.functionFromNav} />,
      2: <SignUpTab functionFromNav={this.props.functionFromNav} />,
    };

    return (
      <div className="Login">
        <div className="loginContainer">
          <ul className="menuTabs">
            <li onClick={() => this.clickHandler(1)}>LOGIN</li>
            <li onClick={() => this.clickHandler(2)}>SIGN UP</li>
            <li onClick={() => this.props.functionFromNav()}>CLOSE</li>
          </ul>
          <div className="loginContent">{content[this.state.activeTab]}</div>
        </div>
      </div>
    );
  }
}
