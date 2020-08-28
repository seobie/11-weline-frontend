import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ShopListRowItems from "./ShopListRowItems";
import "./ShopListRow.scss";

class ShopListRow extends Component {
  constructor() {
    super();
    this.state = {
      list: {},
    };
  }

  componentDidMount = () => {
    fetch("http://10.58.0.44:8000/product/products", {
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
    console.log(this.state.list);
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

export default withRouter(ShopListRow);
