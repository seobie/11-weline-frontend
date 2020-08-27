import React, { Component } from "react";
import ShopListCol from "../Shop/ShopListCol";
import Nav from "../Nav/Nav";

class Category extends Component {
  render() {
    return (
      <main className="Category">
        <ShopListCol />
        <Nav />
      </main>
    );
  }
}

export default Category;
