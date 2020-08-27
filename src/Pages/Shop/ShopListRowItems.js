import React, { Component } from "react";
import ShopListRowItem from "./ShopListRowItem";
import "./ShopListRowItems.scss";

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
    const { itemlist } = this.props;
    return (
      <div className="shopListRowItems">
        <div className="wholeBox">
          <div className="categoryBox">
            <div className="categoryHeader">
              <a>
                <h3 className="categoryTitle">
                  {itemlist !== undefined && Object.keys(itemlist)}
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
                {itemlist[Object.keys(itemlist)[0]] &&
                  itemlist[Object.keys(itemlist)[0]].map((item, idx) => {
                    return <ShopListRowItem key={idx} item={item} />;
                  })}
                {itemlist[Object.keys(itemlist)[1]] &&
                  itemlist[Object.keys(itemlist)[1]].map((item, idx) => {
                    return <ShopListRowItem key={idx} item={item} />;
                  })}
                {itemlist[Object.keys(itemlist)[2]] &&
                  itemlist[Object.keys(itemlist)[2]].map((item, idx) => {
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
