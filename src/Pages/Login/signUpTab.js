import React, { Component } from "react";

export default class signUpTab extends Component {
  render() {
    return (
      <form className="signuUpTab">
        <div className="signUpInput">
          <input className="email" placeholder="EMAIL" />
          <br />
          {/* <input className="title" placeholder="TITLE" /> */}
          <select className="title">
            <option>MRS.</option>
            <option>MS.</option>
            <option>MR.</option>
          </select>
          <input className="firstName" placeholder="FIRSTNAME" />
          <br />
          <input className="lastName" placeholder="LASTNME" />
          <br />
          <input className="password" placeholder="PASSWORD" />
          <br />
          <input className="confirm password" placeholder="CONFIRMPASSWORD" />
          <br />
          <input className="nationality" placeholder="NATIONALITY (OPTIONAL)" />
        </div>
        <div className="agree">
          <input id="agreeEmail" type="checkbox" />
          <label for="agreeEmail">
            YES, I AGREE TO RECEIVE THE CELINE COMMUNICATIONS BY E-MAIL.
          </label>
          <br />
          <input id="agreePolicy" type="checkbox" />
          <label for="agreePolicy">
            I AGREE WITH THE CONFIDENTIALITY AND DATA PROTECTION POLICY AND THE
            TERMS OF USE.
          </label>
          <br />
          <input type="submit" value="SUBMIT" />
        </div>
        <div>
          THE ABOVE MENTIONED INFORMATION ARE PROCESSED BY CELINE TO MANAGE YOUR
          ORDER, TO ENHANCE YOUR CUSTOMER EXPERIENCE, FOR STATISTICAL PURPOSES
          AND SURVEYS AND, SUBJECT TO YOUR AGREEMENT, TO PROVIDE YOU INFORMATION
          ON CELINE PRODUCTS AND SERVICES. THE CONDITIONS OF USE OF THESE DATA
          ARE DESCRIBED IN THE PRIVACY POLICY. UNDER THE FRENCH ACT NO. 78-17
          "INFORMATIQUE ET LIBERTÉS", YOU MAY ACCESS, UPDATE, MODIFY OR DELETE
          YOUR PERSONAL DATA AT ANY TIME BY SENDING A REQUEST TO OUR CLIENT
          SERVICES. YOU MAY ALSO MODIFY AT ANY TIME YOUR PREFERENCES REGARDING
          THE INFORMATION YOU WANT TO RECEIVE FROM US.
        </div>
      </form>
    );
  }
}
