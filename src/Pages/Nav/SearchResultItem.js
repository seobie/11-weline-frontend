import React, { Component } from "react";
import "./SearchResultItem.scss";

class SearchResultItem extends Component {
  render() {
    const { products } = this.props;
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
                  <h2>{el.name}</h2>
                  <span>{`${el.price}0 GBP`}</span>
                </figcaption>
              </div>
            </li>
          ))}
      </>
    );
  }
}

export default SearchResultItem;
