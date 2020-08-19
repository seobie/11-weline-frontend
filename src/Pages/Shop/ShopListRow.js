/** @format */

import React, { Component } from "react";
import ShopListRowItems from "./ShopListRowItems";
import "./ShopListRow.scss";

export default class ShopListRow extends Component {
  constructor() {
    super();
    this.state = {
      itemList: [],
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/itemList.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({ itemList: res });
      });
  };

  render() {
    return (
      <div className="shopListRow">
        <div className="listHeader">
          <h1>READY TO WEAR</h1>
        </div>
        {this.state.itemList &&
          this.state.itemList.map((el) => {
            return <ShopListRowItems itemList={el} />;
          })}
      </div>
    );
  }
}
