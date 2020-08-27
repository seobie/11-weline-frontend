import React, { Component } from "react";

export default class ShopListRowItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <li className="item">
        <img src={item.img} />
        <div className="itemText">
          <p>{item.name}</p>
          <p>{item.season}</p>
        </div>
      </li>
    );
  }
}
