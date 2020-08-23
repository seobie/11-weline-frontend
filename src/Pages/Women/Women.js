import React, { Component } from "react";
import Nav from "../Nav/Nav";
import MenuData from "../Nav/MenuData";

class Women extends Component {
  render() {
    return (
      <main className="Women">
        <Nav womenList={Object.keys(MenuData["celine women"])} />
      </main>
    );
  }
}

export default Women;
