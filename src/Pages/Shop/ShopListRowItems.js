/** @format */
import React, { Component } from "react";
import ShopListRowItem from "./ShopListRowItem";

export default class ShopListRowItems extends Component {
  constructor() {
    super();
    this.state = {
      isMouseOn: false,
    };
    this.ulRef = React.createRef();
  }

  autoScrollRight = () => {
    const intervalScroll = setInterval(() => {
      this.ulRef.current.scrollLeft += 2;
      if (!this.state.isMouseOn) {
        clearInterval(intervalScroll);
      }
    }, 10);
  };

  autoScrollLeft = () => {
    const intervalScroll = setInterval(() => {
      this.ulRef.current.scrollLeft -= 2;
      if (!this.state.isMouseOn) {
        clearInterval(intervalScroll);
      }
    }, 10);
  };

  changMouseState = () => {
    this.setState({
      isMouseOn: !this.state.isMouseOn,
    });
  };

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
            <div className="listBox">
              <div
                className="rangeLeft"
                onMouseEnter={() => {
                  this.autoScrollLeft();
                  this.changMouseState();
                }}
                onMouseLeave={this.changMouseState}
              ></div>
              <div
                className="rangeRight"
                onMouseEnter={() => {
                  this.autoScrollRight();
                  this.changMouseState();
                }}
                onMouseLeave={this.changMouseState}
              ></div>
              <ul className="itemList" ref={this.ulRef}>
                {this.props.itemList.list.map((el) => {
                  return <ShopListRowItem item={el} />;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
