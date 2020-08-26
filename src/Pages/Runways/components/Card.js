import React, { Component } from "react";
import "./Card.scss";

export default class Card extends Component {
  render() {
    return (
      <div className="Card">
        <li className="container">
          <div>
            <img alt="runway" src={this.props.imgUrl} />
          </div>
          <p className="cardNumber">
            <span>{this.props.imgOrder}</span>
          </p>
        </li>
      </div>
    );
  }
}
