import React, { Component } from "react";

export default class forgetPw extends Component {
  render() {
    return (
      <div className="forgetPw">
        <div>FORGOT PASSWORD?</div>
        <div>PLEASE ENTER THE EMAIL ADDRESS YOU REGISTERED</div>
        <div>WITH, AND WE WILL SEND YOU A LINK TO RESET YOUR</div>
        <div>PASSWORD.</div>
        <input className="forgetEmail" placeholder="EMAIL" />
        <input type="submit" value="SUBMIT" />
        <button>BACK</button>
      </div>
    );
  }
}
