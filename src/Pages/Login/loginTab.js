import React, { Component } from "react";
import "./loginTab.scss";

export default class loginTab extends Component {
  render() {
    return (
      <form className="loginTab">
        <div className="loginInput">
          <div>
            <input className="loginEmail" type="email" />
            <label>EMAIL</label>
          </div>
          <div>
            <input className="loginPw" type="password" />
            <label>PASSWORD</label>
          </div>
        </div>
        <div className="btnCheckbox">
          <input id="staySignIn" type="checkbox" />
          <label for="staySignIn">STAY SIGNED IN</label>
          <button className="forgetPw">FORGOT PASSWORD?</button>
        </div>
        {/* <input type="submit" value="SUBMIT" /> */}
        <button className="submitBtn">SUBMIT</button>
      </form>
    );
  }
}
//https://developer.mozilla.org/ko/docs/Web/HTML/Element/label  라벨
//https://www.w3schools.com/tags/tag_label.asp
//https://blueshw.github.io/2020/05/09/know-html-semantic-elements/ 시멘틱태그 블로그
//https://ofcourse.kr/html-course/form-%ED%83%9C%EA%B7%B8  input 종류
//value에 들어가는게 그 인풋창에 적힌 내용 고정이야?
//label태그는 id로만 가져올 수 있어?
