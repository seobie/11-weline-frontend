import React, { Component } from "react";
import "./LoginTab.scss";

export default class LoginTab extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  handleEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  handlePw = (e) => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://10.58.5.101:8000/user/signin", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  render() {
    console.log(this.state);
    return (
      <div className="LoginTab">
        <form className="loginTabContainer">
          <div className="loginInput">
            <div className="loginEmail">
              <input
                type="email"
                placeholder="EMAIL"
                onChange={this.handleEmail}
              />
            </div>
            <div className="loginPw">
              <input
                type="password"
                placeholder="PASSWORD"
                onChange={this.handlePw}
              />
            </div>
          </div>
          <div className="checkBtn">
            <span className="stayBtn">
              <input id="staySignUp" type="checkbox"></input>
              <label for="staySignUp">STAY SIGN UP</label>
            </span>
            <button className="forgotPw">FORGOT PASSWORD?</button>
          </div>
          <div className="submitBtn">
            <button onClick={this.handleSubmit}>SUBMIT</button>
          </div>
        </form>
      </div>
    );
  }
}
//https://developer.mozilla.org/ko/docs/Web/HTML/Element/label  라벨
//https://www.w3schools.com/tags/tag_label.asp
//https://blueshw.github.io/2020/05/09/know-html-semantic-elements/ 시멘틱태그 블로그
//https://ofcourse.kr/html-course/form-%ED%83%9C%EA%B7%B8  input 종류

//placeholder 위로 조금만 올려야돼
