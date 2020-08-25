/** @format */

import React, { Component } from "react";
import WishItem from "./WishItem";
import "./WishList.scss";

export default class WishList extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
      wishItems: [],
      selectedObj: {},
      selectedItems: [],
      quantity: 0,
      totalPrice: 0,
    };
  }

  // 로컬 json 에 연결하는 컴디마
  componentDidMount = () => {
    console.log("componentDidMount");
    fetch("http://localhost:3000/wishlist.json")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          wishItems: result,
          // wishItems: result.map((el) => ({ ...el, selected: false })),
        });
      });
  };

  // access token 보내는 컴디마
  // componentDidMount = () => {
  //   fetch("http://10.58.6.1:8000/user/wishadd", {
  //     method: "POST",
  //     headers: {
  //       Authorization:
  //         "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6N30.k9CXE2QeEZUFs4HFYMMJOfoKJxWDgvVtcSJU_WrucG4"
  //     },
  //     body: JSON.stringify({
  //       product_id: wishlist.id,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       if (response.token) {
  //         localStorage.setItem("wtw-token", response.token);
  //       }
  //     }));
  // };

  handleSelect = (id) => {
    const { wishItems, selectedObj, selectedItems, totalPrice } = this.state;
    console.log("handleSelect method");
    const selectedItemObj = wishItems.find((el) => el.id === id);
    this.setState(
      {
        selectedItems: [...selectedItems, selectedItemObj],
        selectedObj: selectedItemObj,
        totalPrice: totalPrice + selectedItemObj.price,
      }
      // () => {
      //   selectedItemObj.selected
      //     ? (selectedItemObj.selected = false)
      //     : (selectedItemObj.selected = true);
      // }
    );
  };

  // 수량 더하기, 최종 수량의 가격 곱하기
  removeItem = (id) => {
    const { wishItems, totalPrice } = this.state;
    const removedItem = wishItems[id];
    const newWishItems = wishItems.filter((el) => {
      return el.id !== id;
    });
    this.setState({
      wishItems: [...newWishItems],
      totalPrice: totalPrice - removedItem.price,
    });
    if (newWishItems.length === 0) {
      this.setState({
        message: "NO ITEMS IN YOUR ORDER",
      });
    }
  };

  render() {
    const {
      message,
      wishItems,
      selectedObj,
      selectedItems,
      quantity,
      totalPrice,
    } = this.state;
    console.log("parent render");
    return (
      <div className="wishList">
        <div className="wishWhole">
          <div className="wishBox">
            <div className="wishHeader">
              <div className="title">
                <div>SHOPPING BAG</div>
              </div>
              <div className="selectAll">
                <div className="selectbutton">
                  <button>SELECT ALL</button>
                </div>
                <div className="logOut">
                  <button>BACK</button>
                </div>
              </div>
            </div>
            {wishItems.map((el) => {
              return (
                <WishItem
                  methods={{
                    handleSelect: (id) => this.handleSelect(id),
                    removeItem: (num) => this.removeItem(num),
                  }}
                  arr={wishItems}
                  selectedItems={selectedItems}
                  selectedObj={selectedObj}
                  list={el}
                  key={el.idx}
                  id={el.id}
                  price={el.price}
                  name={el.name}
                  img={el.img}
                  selected={el.selected}
                />
              );
            })}
            <div className="purchaseSec">
              <div className="purchaseBox">
                <div className="purchaseTotal">
                  <div>TOTAL</div>
                  <div className="priceTotal">{`${totalPrice.toLocaleString()} USD`}</div>
                </div>
                <div className="purchaseInfo">
                  <table>
                    <tr>
                      TAX
                      <td>7440 DKK</td>
                    </tr>
                    <tr>
                      SHIPPING
                      <td>FREE</td>
                    </tr>
                    <tr>
                      PAYMENT OPTIONS
                      <td>TERMS OF SALES</td>
                    </tr>

                    <tr>
                      SHIPPING & PACKAGING
                      <td>CLIENT SERVICES</td>
                    </tr>
                    <tr>
                      RETURNS AND EXCHANGES
                      <td>PHONE +45 80 40 02 03</td>
                    </tr>
                  </table>
                  <div className="payIcons">
                    <img src="https://www.celine.com/on/demandware.static/-/Sites/default/dw173887ed/images/slot/creditcard/visa.svg" />
                    <img src="https://www.celine.com/on/demandware.static/-/Sites/default/dw00d3ee67/images/slot/creditcard/amex.svg" />
                    <img src="https://www.celine.com/on/demandware.static/-/Sites/default/dwbb732df3/images/slot/creditcard/mastercard.svg" />
                    <img src="https://www.celine.com/on/demandware.static/-/Sites/default/dwf6eb4474/images/slot/creditcard/paypal.png" />
                  </div>
                  <button className="checkout">CHECKOUT</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
