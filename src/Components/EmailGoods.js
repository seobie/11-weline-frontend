import React from "react";
import "./EmailGoods.scss";

class EmailGoods extends React.Component {
  render() {
    let { href, src, name, price, colour } = this.props;
    return (
      <a href={href} className="EmailGoods">
        <img alt="goods pic" src={src} />
        <div>
          <h3>{name}</h3>
          <h3 className="price">{price}</h3>
        </div>
        <p>{colour}</p>
      </a>
    );
  }
}

export default EmailGoods;
