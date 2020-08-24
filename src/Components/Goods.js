import React from "react";
import "./Goods.scss";

class Goods extends React.Component {
  render() {
    const {
      url,
      src,
      src2,
      name,
      mouseOver,
      hoverHandler,
      is_new,
    } = this.props;
    return (
      <a href={url} className="Goods">
        <img
          alt="상품 사진"
          src={mouseOver === url ? src : src2}
          onMouseEnter={() => hoverHandler(url)}
          onMouseOut={() => hoverHandler(false)}
        />
        <h2>{name}</h2>
        <div className="new">{is_new && "new"}</div>
      </a>
    );
  }
}

export default Goods;
