import React from "react";
import "./Goods.scss";

class Goods extends React.Component {
  render() {
    let {
      href,
      src,
      src2,
      name,
      mouseover,
      HoverHandler,
      outHandler,
      checkNew,
    } = this.props;
    return (
      <a href={href} className="Goods">
        <img
          alt="상품 사진"
          src={mouseover === name ? src : src2}
          onMouseEnter={() => HoverHandler(name)}
          onMouseOut={(e) => outHandler(e)}
        />
        <h2>{name}</h2>
        <div className="new">{checkNew ? "new" : ""}</div>
      </a>
    );
  }
}

export default Goods;
