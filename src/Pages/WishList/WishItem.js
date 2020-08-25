/** @format */

import React, { Component } from "react";

export default class WishItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("child render");
    const {
      list,
      id,
      name,
      img,
      price,
      selectedItems,
      selectedObj,
    } = this.props;

    return (
      <div>
        <div className="itemWishList">
          <div className="itemImage">
            <img src={img[0]} />
            <img src={img[1]} />
            <img src={img[2]} />
            <img src={img[3] !== undefined ? img[3] : null} />
          </div>
          <div className="itemBox">
            <div className="itemDetail">
              <div className="itemData">
                <div>{name}</div>
                <div>{list.option}</div>
                <div className="quantity">
                  <div>QUANTITY :</div>
                  <button
                    className="quantityButton"
                    // onClick={console.log(
                    //   "this.props.list.quantity>>",
                    //   this.props.list.quantity
                    // )}
                  >
                    -
                  </button>
                  <div> 1 </div>
                  <button className="quantityButton"> + </button>
                </div>
              </div>
              <div className="priceBox">
                <div className="itemPrice">{`${price.toLocaleString()} USD`}</div>
                <button
                  onClick={() => this.props.methods.removeItem(id)}
                  className="remove"
                >
                  REMOVE
                </button>
              </div>
            </div>
            <div className="checkboxContainer">
              <div
                onClick={() => {
                  this.props.methods.handleSelect(id);
                  selectedObj.selected
                    ? (selectedObj.selected = false)
                    : (selectedObj.selected = true);
                }}
                className={
                  selectedObj.id === id && selectedObj.selected
                    ? "checkArea checkboxOn"
                    : "checkArea checkboxOff"
                }
              >
                <div>
                  <div className="check"></div>
                </div>
              </div>
              <div className="text">SELECT</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
