import React, { Component } from "react";
import Video from "../../Components/Video/Video";
import Nav from "../Nav/Nav";
import MainData from "./MainData";
import "./Main.scss";

export default class Main extends Component {
  render() {
    return (
      <main className="Main">
        <Video videos={MainData.main} />
        <Nav />
      </main>
    );
  }
}
