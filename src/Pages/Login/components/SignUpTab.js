import React from "react";
import { withRouter } from "react-router-dom";
import "./SignUpTab.scss";

class SignUpTab extends React.Component {
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
      is_email_agreed: true,
      is_policy_agreed: true,
      disabled: false,
    };
  }

  handleSignUpInfo = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "password" || "confirmpw") {
      this.setState({
        disabled: false,
      });
    }
  };

  handleSignUp = (e) => {
    this.state.password === this.state.confirmpw &&
    this.state.email.includes("@", ".")
      ? fetch("http://10.58.6.1:8000/user/signup", {
          method: "POST",
          body: JSON.stringify({
            email: this.state.email,
            title: this.state.title,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            password: this.state.password,
            nationality: this.state.nationality,
            is_email_agreed: true,
            is_policy_agreed: true,
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            if (res === "SIGN_UP_SUCCESS") {
              this.props.history.push("/");
            }
          })
      : this.setState({ disabled: true });
  };
  render() {
    return (
      <div className="SignUpTab">
        <div className="signUpTabContainer">
          <div className="signUpInput">
            <input
              className="signUpEmail"
              name="email"
              type="email"
              placeholder="EMAIL"
              onChange={this.handleSignUpInfo}
            />
            <div className="titleFirstnameBar">
              <select
                className="title"
                name="title"
                onChange={this.handleSignUpInfo}
              >
                <option>TITLE</option>
                <option>MRS.</option>
                <option>MS.</option>
                <option>MR.</option>
              </select>
              <div className="firstnameContainer">
                <input
                  className="firstName"
                  name="firstname"
                  type="text"
                  placeholder="FIRST NAME"
                  onChange={this.handleSignUpInfo}
                />
              </div>
            </div>
            <input
              className="lastName"
              name="lastname"
              type="text"
              placeholder="LAST NAME"
              onChange={this.handleSignUpInfo}
            />
            <input
              className="signUpPw"
              name="password"
              type="password"
              placeholder="PASSWORD"
              onChange={this.handleSignUpInfo}
            />
            <input
              className="confirmPw"
              name="confirmpw"
              type="password"
              placeholder="CONFIRM PASSWORD"
              onChange={this.handleSignUpInfo}
            />
            <select
              className="nationality"
              name="nationality"
              onChange={this.handleSignUpInfo}
            >
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
              <button
                onClick={this.handleSignUp}
                disabled={this.state.disabled}
              >
                SUBMIT
              </button>
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
        </div>
      </div>
    );
  }
}
export default withRouter(SignUpTab);
