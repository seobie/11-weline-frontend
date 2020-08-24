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
      this.ulRef.current.scrollLeft += 3;
      if (!this.state.isMouseOn) {
        clearInterval(intervalScroll);
      }
    }, 10);
  };

  autoScrollLeft = () => {
    const intervalScroll = setInterval(() => {
      this.ulRef.current.scrollLeft -= 3;
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
                {this.props.itemlist[Object.keys(this.props.itemlist)[0]] &&
                  this.props.itemlist[Object.keys(this.props.itemlist)[0]].map(
                    (item, idx) => {
                      return <ShopListRowItem key={idx} item={item} />;
                    }
                  )}
                {this.props.itemlist[Object.keys(this.props.itemlist)[1]] &&
                  this.props.itemlist[Object.keys(this.props.itemlist)[1]].map(
                    (item, idx) => {
                      return <ShopListRowItem key={idx} item={item} />;
                    }
                  )}
                {this.props.itemlist[Object.keys(this.props.itemlist)[2]] &&
                  this.props.itemlist[Object.keys(this.props.itemlist)[2]].map(
                    (item, idx) => {
                      return <ShopListRowItem key={idx} item={item} />;
                    }
                  )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
