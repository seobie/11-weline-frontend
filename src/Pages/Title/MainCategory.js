import React, { Component } from "react";
import Nav from "../Nav/Nav";
import ShopListRow from "../Shop/ShopListRow";

class MainCategory extends Component {
  render() {
    return (
      <main className="MainCategory">
        <ShopListRow />
        <Nav />
      </main>
    );
  }
}

export default MainCategory;
