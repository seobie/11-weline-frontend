import React, { Component } from "react";
import ShopListRow from "../Shop/ShopListRow";
import Nav from "../Nav/Nav";

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
