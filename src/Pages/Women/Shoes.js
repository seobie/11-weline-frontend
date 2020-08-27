import React, { Component } from "react";
import Nav from "../Nav/Nav";
import MenuData from "../Nav/MenuData";

class Shoes extends Component {
  render() {
    return (
      <main className="Shoes">
        <Nav menuListFromShoes={MenuData["celine women"]["shoes"]} />
      </main>
    );
  }
}

export default Shoes;
