import React from "react";
import "./Goods.scss";

class Goods extends React.Component {
  render() {
    return (
      <a href={this.props.href} className="Goods">
        <img alt="상품 사진" src={this.props.src} />
        <h2>{this.props.name}</h2>
        <div className="new">{this.props.new ? "new" : ""}</div>
      </a>
    );
  }
}

export default Goods;
