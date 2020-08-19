/** @format */
import React, { Component } from "react";
import ShopListRowItem from "./ShopListRowItem";

export default class ShopListRowItems extends Component {
  render() {
    console.log(this.props.itemList.list);
    return (
      <div className="shopListRowItems">
        <div className="wholeBox">
          <div className="categoryBox">
            <div>
              <h3>{this.props.itemList.title}</h3>
              <h3>VIEW ALL</h3>
            </div>
            <div className="itemBox">
              {this.props.itemList.list.map((el) => {
                return <ShopListRowItem item={el} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
