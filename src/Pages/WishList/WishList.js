import React, { Component } from "react";
import WishItem from "./WishItem";
import Checkout from "./CheckOut";
import "./WishList.scss";

export default class WishList extends Component {
  constructor() {
    super();
    this.state = {
      wishItems: [],
      totalPrice: 0,
      purchase: false,
    };
  }

  // componentDidMount = () => {
  //   fetch("http://10.58.6.1:8000/user/wishlist", {
  //     method: "GET",
  //     headers: {
  //       Authorization:
  //         "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.BAwk01jYJjCSMdifZqmwPWbLi65xV4usBNGiZ8jScPE",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       this.setState({
  //         wishItems: result.wish_list,
  //       });
  //     });
  // };

  // 로컬 json 에 연결하는 컴디마
  componentDidMount = () => {
    fetch("http://localhost:3000/wishlist.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          wishItems: res.wish_list.map((obj) => ({
            ...obj,
            isSelected: false,
          })),
        });
      });
  };

  selectHandler = (id) => {
    console.log(id);
    const { wishItems } = this.state;
    let selectedItems = wishItems.map((obj) => {
      return {
        ...obj,
        isSelected: id === obj.id ? !obj.isSelected : obj.isSelected,
      };
    });
    this.setState({ wishItems: selectedItems }, () => {
      this.priceHandler();
    });
  };

  priceHandler = () => {
    const { wishItems } = this.state;
    let tempTotal = wishItems.reduce((acc, cur) => {
      if (cur.isSelected) {
        return acc + cur.price * cur.quantity;
      } else {
        return acc;
      }
    }, 0);
    this.setState({
      totalPrice: tempTotal,
    });
  };

  removeItem = (id) => {
    const { wishItems } = this.state;
    let filtered = wishItems.filter((el) => el.id !== id);
    this.setState({
      wishItems: filtered,
    });
  };

  purchaseHandler = () => {
    this.setState({ purchase: !this.state.purchase });
  };

  render() {
    const { wishItems, totalPrice, purchase } = this.state;
    console.log(this.state.purchase);
    return (
      <>
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
              {wishItems.length > 0 &&
                wishItems.map((el, idx) => {
                  return (
                    <WishItem
                      selectHandler={this.selectHandler}
                      priceHandler={this.priceHandler}
                      removeItem={this.removeItem}
                      // state={this.state}
                      list={el}
                      key={idx}
                      id={el.id}
                      price={el.price}
                      name={el.name}
                      img={el.img}
                      quantity={el.quantity}
                      isSelected={el.isSelected}
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
                      <tbody>
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
                      </tbody>
                    </table>
                    <div className="payIcons">
                      <img src="https://www.celine.com/on/demandware.static/-/Sites/default/dw173887ed/images/slot/creditcard/visa.svg" />
                      <img src="https://www.celine.com/on/demandware.static/-/Sites/default/dw00d3ee67/images/slot/creditcard/amex.svg" />
                      <img src="https://www.celine.com/on/demandware.static/-/Sites/default/dwbb732df3/images/slot/creditcard/mastercard.svg" />
                      <img src="https://www.celine.com/on/demandware.static/-/Sites/default/dwf6eb4474/images/slot/creditcard/paypal.png" />
                    </div>
                    <button className="checkout" onClick={this.purchaseHandler}>
                      CHECKOUT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={purchase ? "slide" : "none"}>
          <Checkout purchaseHandler={this.purchaseHandler} />
        </div>
      </>
    );
  }
}
