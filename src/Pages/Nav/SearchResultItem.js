import React, { Component } from "react";
import "./SearchResultItem.scss";

class SearchResultItem extends Component {
  render() {
    return (
      <li className="SearchResultItem">
        <div className="item">
          <div className="itemImages">
            <img
              src="https://twicpics.celine.com/products/dw85215f2c/images/large/337993416C.01WE_1_FALL20_742142v3.jpg?sw=1156&sh=1600&sm=fit&strip=false"
              alt=""
            />
            <img
              src="https://twicpics.celine.com/products/dw999d9f53/images/large/337993416C.01WE_2_FALL20_742205v3.jpg?sw=1156&sh=1600&sm=fit&strip=false"
              alt=""
            />
          </div>
          <figcaption>
            <h2>
              CELINE TRIOMPHE LOW LACE-UP SNEAKER PLAIN LOGO IN CALFSKIN AND
              SUEDE CALFSKIN
            </h2>
            <span>420 GBP</span>
          </figcaption>
        </div>
      </li>
    );
  }
}

export default SearchResultItem;
