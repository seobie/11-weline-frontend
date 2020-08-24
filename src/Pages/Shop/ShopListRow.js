/** @format */

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
    console.log("componentDidMount");
    fetch("http://localhost:3000/shoplistrow.json")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          list: result,
        });
      });
  };

  // componentDidMount = () => {
  //   fetch("http://10.58.3.133:8000/product/list", {
  //     method: "GET",
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       this.setState({
  //         list: result,
  //       });
  //     });
  // };

  render() {
    const { list } = this.state;
    console.log("parent render");
    console.log(list !== undefined && list["item_list"]);
    console.log(list["item_list"] && Object.keys(list));
    console.log(
      list["item_list"] !== undefined && Object.keys(list["item_list"][0])
    );

    return (
      <div className="shopLists">
        <div className="listHeader">
          <h1>SHOES</h1>
        </div>
        {list["item_list"] &&
          list["item_list"].map((itemlist, idx) => {
            return <ShopListRowItems key={idx} itemlist={itemlist} />;
          })}
        <div className="subNav">
          <div>{list["nav"] && list["nav"][0]}</div>
          <div>/</div>
          <div>{list["nav"] && list["nav"][1]}</div>
          <div>/</div>
          <div>{list["nav"] && list["nav"][2]}</div>
        </div>
      </div>
    );
  }
}
