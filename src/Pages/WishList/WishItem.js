/** @format */

import React, { Component } from "react";

export default class WishItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCheckClicked: false,
      total: 0,
    };
  }

  checkClick = (id) => {
    this.setState({
      isCheckClicked: !this.state.isCheckClicked,
    });
    console.log("sumPriceStart");
    this.state.isCheckClicked && this.sumPrice(id);
  };

  sumPrice = (id) => {
    console.log(id);
    if (id === id) {
      console.log("sumpriceIfTrue");
      this.setState({
        // total: +id,
        // total += id.price
        // 그다음에 this.state.total을 부모로 쏴주기?
      });
    }
  };

  render() {
    const { key, id, name, img, price } = this.props;
    return (
      <div>
        <div className="itemWishList">
          <div className="itemImage">
            <img src={img[0]} />
            <img src={img[1]} />
            <img src={img[2]} />
            <img src={img[3] !== undefined ? img[3] : null} />
          </div>
          {/* total[id].price */}
          <div className="itemBox">
            <div className="itemDetail">
              <div className="itemData">
                <div>{name}</div>
                <div>DOCK WASH</div>
                <div className="quantity">
                  <div>QUANTITY :</div>
                  <button className="quantityButton"> - </button>
                  <div> 1 </div>
                  <button className="quantityButton"> + </button>
                </div>
              </div>
              <div className="priceBox">
                <div className="itemPrice">{`${price} USD`}</div>
                <button
                  onClick={() => this.props.removeItem(id)}
                  className="remove"
                >
                  REMOVE
                </button>
              </div>
            </div>

            <div className="checkboxContainer">
              <div
                onClick={() => this.checkClick(id)}
                // onChange={this.sumPrice}
                className={
                  this.state.isCheckClicked ? "checkboxOn" : "checkboxOff"
                }
              >
                <div className="check"></div>
              </div>
              <div className="text">SELECT</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
