import React from "react";
import ShoppingMethod from "./ShoppingMethod";
import Service from "./Service";
import Payment from "./Payment";
import "./CheckOut.scss";

class CheckOut extends React.Component {
  constructor() {
    super();
    this.state = {
      btnClick: "Payment",
      shoppingMethod: {
        firstName: "",
        lastName: "",
        company: "",
        streetName: "",
        aptFloor: "",
        city: "",
        contryCode: "+82",
        title: "MRS.",
        contactPhone: "",
        zip: "",
      },
      service: {},
      payment: {
        nameOfCard: "",
        cardNumber: "",
        expDate: "",
        securityCode: "",
      },
    };
  }

  visibleHandler = (e) => {
    this.setState({
      btnClick: e.target.name,
    });
  };

  shoppingMethodHandler = (e) => {
    this.setState({
      shoppingMethod: {
        ...this.state.shoppingMethod,
        [e.target.name]: e.target.value,
      },
    });
  };

  paymentHandler = (e) => {
    this.setState({
      payment: {
        ...this.state.payment,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    const { btnClick, service, payment, shoppingMethod } = this.state;
    console.log(this.state);
    return (
      <div className="CheckOut">
        <div className="largeTab">
          <div className="nameTab">1 EMAIL</div>
          <div className="mainTab">TEAGYU1058@GMAIL.COM</div>
        </div>
        <div className="largeTab">
          <div className="nameTab">2 SHOPPING METHOD</div>
          <div className="mainTab">
            <div
              className={
                btnClick !== "ShoppingMethod" ? "editData" : "editDataNone"
              }
            >
              SHIP TO ADDRESS
              <button
                className="edit"
                name="ShoppingMethod"
                onClick={this.visibleHandler}
              >
                EDIT
              </button>
            </div>
            <ShoppingMethod
              btnClick={btnClick}
              shoppingMethod={shoppingMethod}
              visibleHandler={this.visibleHandler}
              shoppingMethodHandler={this.shoppingMethodHandler}
            />
          </div>
        </div>
        <div className="largeTab">
          <div className="nameTab">3 SERVICE</div>
          <div className="mainTab">
            <div
              className={
                btnClick !== "Service" && btnClick !== "ShoppingMethod"
                  ? "editData"
                  : "editDataNone"
              }
            >
              SHIP TO ADDRESS
              <button
                className="edit"
                name="Service"
                onClick={this.visibleHandler}
              >
                EDIT
              </button>
            </div>
            <Service
              service={service}
              btnClick={btnClick}
              visibleHandler={this.visibleHandler}
            />
          </div>
        </div>
        <div className="largeTab">
          <div className="nameTab">4 PAYMENT</div>
          <div className="mainTab">
            <Payment
              payment={payment}
              btnClick={btnClick}
              paymentHandler={this.paymentHandler}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CheckOut;
