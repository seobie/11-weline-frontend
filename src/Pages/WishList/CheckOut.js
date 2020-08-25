import React from "react";
import ShoppingMethod from "./ShoppingMethod";
import Service from "./Service";
import "./CheckOut.scss";

class CheckOut extends React.Component {
  constructor() {
    super();
    this.state = {
      btnClick: "shoppingMethod",
      shoppingMethod: {
        title: "",
        firstName: "",
        lastName: "",
        company: "",
        streetName: "",
        aptFloor: "",
        city: "",
        zip: "",
        countryCode: "",
        contactPhone: "",
      },
      service: {},
    };
  }

  visibleHandler = (e) => {
    this.setState({ btnClick: e.target.name });
  };
  render() {
    const { shoppingMethod, btnClick, service } = this.state;
    return (
      <div className="CheckOut">
        <div className="largeTab">
          <div className="nameTab">1. EMAIL</div>
          <div className="mainTab">TEAGYU1058@GMAIL.COM</div>
        </div>
        <div className="largeTab">
          <div className="nameTab">2. SHOPPING METHOD</div>
          <div className="mainTab">
            <div
              className={
                btnClick !== "ShoppingMethod" ? "editDate" : "editDateNone"
              }
            >
              SHIP TO ADDRESS
              <button name="ShoppingMethod" onClick={this.visibleHandler}>
                EDIT
              </button>
            </div>
            <ShoppingMethod
              shoppingMethod={shoppingMethod}
              btnClick={btnClick}
            />
          </div>
        </div>
        <div className="largeTab">
          <div className="nameTab">3. SERVICE</div>
          <div className="mainTab">
            <div
              className={
                btnClick !== "Service" && btnClick !== "ShoppingMethod"
                  ? "editDate"
                  : "editDateNone"
              }
            >
              SHIP TO ADDRESS
              <button name="Service" onClick={this.visibleHandler}>
                EDIT
              </button>
            </div>
            <Service service={service} btnClick={btnClick} />
          </div>
        </div>
        <div className="largeTab">
          <div className="nameTab">4. PAYMENT</div>
          <div className="mainTab"></div>
        </div>
      </div>
    );
  }
}

export default CheckOut;
