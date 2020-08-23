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
    console.log("child render");
    console.log(this.props.itemlist && this.props.itemlist["BOOTS"]); // undefined
    console.log(
      this.props.itemlist !== undefined && this.props.itemlist["BOOTS"]
    ); // undefined
    return (
      <div className="shopListRowItems">
        <div className="wholeBox">
          <div className="categoryBox">
            <div className="categoryHeader">
              <a>
                <h3 className="categoryTitle">
                  {this.props.itemlist !== undefined &&
                    Object.keys(this.props.itemlist)}
                </h3>
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
              <ul className="itemlist" ref={this.ulRef}>
                {this.props.itemlist["BOOTS"] &&
                  this.props.itemlist["BOOTS"].map((item, idx) => {
                    return <ShopListRowItem key={idx} item={item} />;
                  })}
                {this.props.itemlist["WEDGES"] &&
                  this.props.itemlist["WEDGES"].map((item, idx) => {
                    return <ShopListRowItem key={idx} item={item} />;
                  })}
                {this.props.itemlist["ESPADRILLES"] &&
                  this.props.itemlist["ESPADRILLES"].map((item, idx) => {
                    return <ShopListRowItem key={idx} item={item} />;
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
