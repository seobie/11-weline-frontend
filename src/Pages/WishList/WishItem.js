/** @format */

import React, { Component } from "react";

export default class WishItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCheckClicked: false,
    };
  }

  checkClick = () => {
    this.setState({
      isCheckClicked: !this.state.isCheckClicked,
    });
  };

  render() {
    const { list } = this.props;
    return (
      <div>
        <div className="itemWishList">
          <div className="itemImage">
            <img src={list.img[0]} />
            <img src={list.img[1]} />
            <img src={list.img[2]} />
            <img src={list.img[3] !== undefined ? list.img[3] : null} />
          </div>
          <div className="itemBox">
            <div className="itemDetail">
              <div>
                <div className="item">{this.props.list.name}</div>
                <div>DOCK WASH</div>
              </div>
              <div>
                <button onClick={this.removeItem} className="remove">
                  REMOVE
                </button>
              </div>
            </div>
            <div className="checkboxContainer">
              <div
                onClick={this.checkClick}
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
