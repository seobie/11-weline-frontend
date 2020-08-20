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
  // };
  componentDidMount = () => {
    // var intervalId = setInterval();
  };

  scrollCount = (e) => {
    console.log("autoScroll");
    this.setState({ scroll: this.state.scroll + 1 });
    console.log(this.state.scroll);
    console.log(this.ulRef.current.scrollLeft);
  };

  stopScroll = (e) => {
    console.log("stopScroll");
    console.log(this.ulRef);
    if (this.state.scroll === 10) {
      clearInterval(this.scrollCount);
    }
  };

  autoScroll = () => {
    console.log("scrollcount");
    setInterval(this.scrollCount, 1000);
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
                onMouseEnter={this.autoScroll}
                onMouseLeave={this.stopScroll}
              ></div>
              <div
                className="rangeRight"
                onMouseEnter={this.autoScroll}
                onMouseLeave={this.stopScroll}
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
