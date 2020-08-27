/** @format */

import React, { Component } from "react";

export default class ShopListRowItem extends Component {
  render() {
    return (
      <>
        <li className="item">
          <img src={this.props.item.img} />
          <p>{this.props.item.name}</p>
          <p>{this.props.item.isnew}</p>
        </li>
      </>
    );
  }
}
