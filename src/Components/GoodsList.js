import React from "react";
import Goods from "./Goods";
import "./GoodsList.scss";

class GoodsList extends React.Component {
  render() {
    const { hoverHandler, mouseOver, products } = this.props;
    return (
      <article className="GoodsList">
        <ul>
          {products.map((products, idx) => (
            <li key={idx} className={products.subcategory}>
              {products.list.map((list, idx) => (
                <Goods
                  url={list.url}
                  src={list.img[1]}
                  src2={list.img[0]}
                  name={list.name}
                  is_new={list.checkNew}
                  mouseOver={mouseOver}
                  hoverHandler={(url) => hoverHandler(url)}
                  key={idx}
                />
              ))}
            </li>
          ))}
        </ul>
      </article>
    );
  }
}

export default GoodsList;
