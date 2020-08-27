import React, { Component } from "react";
import ShopListRowItems from "./ShopListRowItems";
import "./ShopListRow.scss";

export default class ShopListRow extends Component {
  constructor() {
    super();
    this.state = {
      list: {},
    };
  }

  componentDidMount = () => {
    fetch("http://10.58.3.133:8000/product/list", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          list: result,
        });
      });
  };

  render() {
    const { list } = this.state;

    return (
      <div className="shopLists">
        <div className="listHeader">
          <h1>SHOES</h1>
        </div>
        {list.item_list &&
          list.item_list.map((itemlist, idx) => {
            return <ShopListRowItems key={idx} itemlist={itemlist} />;
          })}
        <div className="subNav">
          <div>{list.nav && list.nav[0]}</div>
          <div>/</div>
          <div>{list.nav && list.nav[1]}</div>
          <div>/</div>
          <div>{list.nav && list.nav[2]}</div>
        </div>
      </div>
    );
  }
}
