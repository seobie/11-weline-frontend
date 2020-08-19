/** @format */
import React, { Component } from "react";
import ShopListRowItem from "./ShopListRowItem";

export default class ShopListRowItems extends Component {
  render() {
    return (
      <div className="shopListRowItems">
        <div className="wholeBox">
          <div className="categoryBox">
            <div className="categoryHeader">
              <a>
                <h3 className="categoryTitle">{this.props.itemList.title}</h3>
              </a>
              <a>
                <span>VIEW ALL</span>
              </a>
            </div>
            <ul className="itemList">
              {this.props.itemList.list.map((el) => {
                return <ShopListRowItem item={el} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
