import React from "react";
import Goods from "./Goods";
import "./GoodsList.scss";

class GoodsList extends React.Component {
  render() {
    const { hoverHandler, mouseOver, products } = this.props;
    return (
      <article className="GoodsList">
        <ul>
          {products.map((products) => (
            <li key={products.subcategory} className={products.subcategory}>
              {products.list.map((list) => (
                <Goods
                  url={list.url}
                  src={list.img[1]}
                  src2={list.img[0]}
                  name={list.name}
                  id={list.id}
                  is_new={list.checkNew}
                  mouseOver={mouseOver}
                  hoverHandler={(url) => hoverHandler(url)}
                  key={list.url}
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
