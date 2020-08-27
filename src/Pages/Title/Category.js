import React, { Component } from "react";
import ShopListCol from "../Shop/ShopListCol";
import Nav from "../Nav/Nav";

class Category extends Component {
  constructor() {
    super();
    this.state = { hover: "" };
  }
  hoverHandler = (e) => {
    this.setState({ hover: e.toUpperCase() });
  };
  render() {
    return (
      <main className="Category">
        <ShopListCol />
        <Nav hover={this.state.hover} hoverHandler={this.hoverHandler} />
      </main>
    );
  }
}

export default Category;
