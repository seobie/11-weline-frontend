import React, { Component } from "react";
import Shop from "../Shop/Shop";
import Nav from "../Nav/Nav";

class Title extends Component {
  render() {
    return (
      <main className="Title">
        <Shop />
        <Nav />
      </main>
    );
  }
}

export default Title;
