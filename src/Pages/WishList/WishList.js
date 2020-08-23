/** @format */

import React, { Component } from "react";
import WishItem from "./WishItem";
import "./WishList.scss";

export default class WishList extends Component {
  constructor() {
    super();
    this.state = {
      wishItems: [
        {
          id: 0,
          name: "STRIPE RIBBON BLOUSE",
          img: [
            "http://localhost:3000/Images/WishList/blouse1.webp",
            "http://localhost:3000/Images/WishList/blouse2.webp",
            "http://localhost:3000/Images/WishList/blouse3.webp",
          ],
        },
        {
          id: 1,
          name: "TANNED PUMPS",
          img: [
            "http://localhost:3000/Images/WishList/boots1.webp",
            "http://localhost:3000/Images/WishList/boots2.webp",
            "http://localhost:3000/Images/WishList/boots3.webp",
            "http://localhost:3000/Images/WishList/boots4.webp",
          ],
        },
        {
          id: 2,
          name: "CLEAR DROPS",
          img: [
            "http://localhost:3000/Images/WishList/jewerly1.webp",
            "http://localhost:3000/Images/WishList/jewerly2.webp",
            "http://localhost:3000/Images/WishList/jewerly3.webp",
          ],
        },
        {
          id: 3,
          name: "PATTERNED CROSS BAG",
          img: [
            "http://localhost:3000/Images/WishList/leather1.webp",
            "http://localhost:3000/Images/WishList/leather2.webp",
            "http://localhost:3000/Images/WishList/leather3.webp",
            "http://localhost:3000/Images/WishList/leather4.webp",
          ],
        },
        {
          id: 4,
          name: "NIGHT REPTILE",
          img: [
            "http://localhost:3000/Images/WishList/perfume1.webp",
            "http://localhost:3000/Images/WishList/perfume2.webp",
            "http://localhost:3000/Images/WishList/perfume3.webp",
          ],
        },
      ],
    };
  }

  removeItem = (id) => {
    this.setState((prevState) => ({
      wishItems: prevState.wishItems.id.filter((el) => el !== id),
    }));
  };

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
              <div className="title">
                <div>MY ITEMS</div>
                <div className="buttonDiv"></div>
              </div>
              <div className="selectAll">
                <div>
                  <button>SELECT ALL</button>
                </div>
                <div className="logOut">
                  <button>LOG OUT</button>
                </div>
              </div>
            </div>
            {this.state.wishItems.map((el, idx) => {
              return <WishItem key={idx} list={el} />;
            })}
            <div className="purchaseBox">
              <div>
                <div className="purchaseBorder">
                  <div>TOTAL</div>
                  <div>$ 2050</div>
                </div>
                <div className="purchaseText">
                  <div>PURCHASE BY EMAIL</div>
                  <div>CHECKOUT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
