import React from "react";
import "./EmailGoods.scss";

class EmailGoods extends React.Component {
  render() {
    return (
      <a href="{this.props.href}" className="EmailGoods">
        <img alt="goods pic" src="{this.prop.src}" />
        <div>
          <div>{this.props.name}</div>
          <div>{this.props.price}</div>
        </div>
        <div>{this.props.colour}</div>
      </a>
    );
  }
}

export default EmailGoods;
