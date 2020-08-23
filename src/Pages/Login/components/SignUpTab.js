import React, { Component } from "react";
import "./SignUpTab.scss";

export default class SignUpTab extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      title: "",
      firstname: "",
      lastname: "",
      password: "",
      confirmpw: "",
      nationality: "",
      is_email_agreed: "True",
      is_policy_agreed: "True",
    };
  }
  handleEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  handleTitle = (e) => {
    this.setState({ title: e.target.value });
  };

  handleFirstname = (e) => {
    this.setState({ firstname: e.target.value });
  };

  handleLastname = (e) => {
    this.setState({ lastname: e.target.value });
  };

  handlePw = (e) => {
    this.setState({ password: e.target.value });
  };

  handleConfirmPw = (e) => {
    this.setState({ confirmpw: e.target.value });
  };

  handleNationality = (e) => {
    this.setState({ nationality: e.target.value });
  };

  // handleAgreeEmail = (e) => {
  //   this.setState({ is_email_agreed: e.target.value });
  // };

  // handleNationality = (e) => {
  //   this.setState({ nationality: e.target.value });
  // };

  handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://10.58.5.101:8000/user/signup", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        title: this.state.title,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        password: this.state.password,
        nationality: this.nationality,
        is_email_agreed: "True",
        is_policy_agreed: "True",
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };
  render() {
    console.log(this.state);
    return (
      <div className="SignUpTab">
        <form className="signUpTabContainer">
          <div className="signUpInput">
            <input
              className="signUpEmail"
              type="email"
              placeholder="EMAIL"
              onChange={this.handleEmail}
            />
            <div className="a">
              <select className="title" onChange={this.handleTitle}>
                <option>TITLE</option>
                <option>MRS.</option>
                <option>MS.</option>
                <option>MR.</option>
              </select>
              <div className="firstnameContainer">
                <input
                  className="firstName"
                  type="text"
                  placeholder="FIRST NAME"
                  onChange={this.handleFirstname}
                />
              </div>
            </div>
            <input
              className="lastName"
              type="text"
              placeholder="LAST NAME"
              onChange={this.handleLastname}
            />
            <input
              className="signUpPw"
              type="password"
              placeholder="PASSWORD"
              onChange={this.handlePw}
            />
            <input
              className="confirmPw"
              type="password"
              placeholder="CONFIRM PASSWORD"
              onChange={this.handleConfirmPw}
            />
            <select className="nationality" onChange={this.handleNationality}>
              <option>NATIONALITY</option>
              <option>AFGHANISTAN</option>
              <option>ALAND ISLANDS</option>
            </select>
          </div>
          <div className="agreeCheckBtn">
            <div className="agreeEmail">
              <input id="agreeEmailInput" type="checkbox" />
              <label for="agreeEmailInput">
                YES, I AGREE TO RECEIVE THE CELINE COMMUNICATIONS BY E-MAIL.
              </label>
            </div>
            <div className="agreePolicy">
              <input id="agreePolicyInput" type="checkbox" />
              <label for="agreePolicyInput">
                I AGREE WITH THE&nbsp;
                <a
                  href="https://www.celine.com/en-int/privacy-policy.html"
                  target="blank"
                >
                  CONFIDENTIALITY AND DATA PROTECTION POLICY
                </a>
                &nbsp;AND
                <span>THE TERMS OF USE</span>.
              </label>
            </div>
            <div className="submitBtn">
              <button onClick={this.handleSubmit}>SUBMIT</button>
            </div>
          </div>
          <div className="policy">
            THE ABOVE MENTIONED INFORMATION ARE PROCESSED BY CELINE TO MANAGE
            YOUR ORDER, TO ENHANCE YOUR CUSTOMER EXPERIENCE, FOR STATISTICAL
            PURPOSES AND SURVEYS AND, SUBJECT TO YOUR AGREEMENT, TO PROVIDE YOU
            INFORMATION ON CELINE PRODUCTS AND SERVICES. THE CONDITIONS OF USE
            OF THESE DATA ARE DESCRIBED IN THE PRIVACY POLICY. UNDER THE FRENCH
            ACT NO. 78-17 "INFORMATIQUE ET LIBERTÉS", YOU MAY ACCESS, UPDATE,
            MODIFY OR DELETE YOUR PERSONAL DATA AT ANY TIME BY SENDING A REQUEST
            TO OUR CLIENT SERVICES. YOU MAY ALSO MODIFY AT ANY TIME YOUR
            PREFERENCES REGARDING THE INFORMATION YOU WANT TO RECEIVE FROM US.
          </div>
        </form>
      </div>
    );
  }
}
