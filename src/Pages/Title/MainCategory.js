import React, { Component } from "react";
import ShopListRow from "../Shop/ShopListRow";
import Nav from "../Nav/Nav";

class MainCategory extends Component {
  constructor() {
    super();
    this.state = { hover: "" };
  }
  hoverHandler = (e) => {
    this.setState({ hover: e.toUpperCase() });
  };
  render() {
    return (
      <main className="MainCategory">
        <ShopListRow />
        <Nav hover={this.state.hover} hoverHandler={this.hoverHandler} />
      </main>
    );
  }
}

export default MainCategory;
