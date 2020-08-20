/** @format */
import React, { Component } from "react";
import ShopListRowItem from "./ShopListRowItem";

export default class ShopListRowItems extends Component {
  constructor() {
    super();
    this.state = {
      scroll: 0,
    };
    this.ulRef = React.createRef();
  }

  // runScroll = (e) => {
  //   console.log("runScroll");
  //   document.getElementsByClassName("itemList")[0].scrollTo({
  //     left: 3000,
  //     behavior: "smooth",
  //   });
  // };j

  autoScroll = (e) => {
    console.log("autoScroll");
    // window.scrollTo(e.current.offsetLeft, 0);
  };

  stopScroll = (e) => {
    console.log("stopScroll");
  };

  render() {
    console.log(this.ulRef);
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
                ref={this.ulRef}
                onMouseEnter={this.autoScroll}
                onMouseLeave={this.stopScroll}
              ></div>
              <div className="rangeRight"></div>
              <ul className="itemList">
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
