/** @format */

import React, { Component } from "react";
import "./WishList.scss";

export default class WishList extends Component {
  render() {
    return (
      <div className="wishList">
        <div className="wishWhole">
          <div className="wishNav">
            <div>MY INFORMATION</div>
            <div>ADDRESS BOOK</div>
            <div>WISHLIST</div>
          </div>
          <div className="wishBox">
            <div className="wishHeader">
              <div className="purchase">
                <div>PURCHASE BY EMAIL</div>
                <div className="buttonDiv">
                  <button>SEND</button>
                </div>
              </div>
              <div className="select">
                <div>
                  <button>SELECT ALL</button>
                </div>
                <div>
                  <button>LOG OUT</button>
                </div>
              </div>
            </div>
            <div className="itemWishList">
              <div className="itemImage">
                <img src="http://localhost:3000/Images/WishList/blouse1.webp" />
                <img src="http://localhost:3000/Images/WishList/blouse2.webp" />
                <img src="http://localhost:3000/Images/WishList/blouse3.webp" />
              </div>
              <div className="itemBox">
                <div className="itemDetail">
                  <div>
                    <div>LONG JACKET IN STRIPED WOOL FABRIC</div>
                    <div>DOCK WASH</div>
                  </div>
                  <div>
                    <button>REMOVE</button>
                  </div>
                </div>
                <div>SELECT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
