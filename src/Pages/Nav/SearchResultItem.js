import React, { Component } from "react";
import "./SearchResultItem.scss";

class SearchResultItem extends Component {
  render() {
    const { products } = this.props;
    console.log(products);
    return (
      <>
        {products &&
          products.map((el, idx) => (
            <li key={idx} className="SearchResultItem">
              <div className="item">
                <div className="itemImages">
                  <img src={el.img[1]} alt={`${el.name} 1`} />
                  <img src={el.img[0]} alt={`${el.name} 2`} />
                </div>
                <figcaption>
                  <h2>{el.name.slice(6)}</h2>
                  <span>{`${el.price.slice(0, el.price.length - 3)} GBP`}</span>
                </figcaption>
              </div>
            </li>
          ))}
      </>
    );
  }
}

export default SearchResultItem;
