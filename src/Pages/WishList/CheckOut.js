import React from "react";
import ShoppingMethod from "./ShoppingMethod";
import Service from "./Service";
import Payment from "./Payment";
import "./CheckOut.scss";

class CheckOut extends React.Component {
  constructor() {
    super();
    this.state = {
      btnClick: "ShoppingMethod",
      firstName: "",
      lastName: "",
      company: "",
      streetName: "",
      aptFloor: "",
      city: "",
      contryCode: "",
      title: "",
      contactPhone: "",
      zip: "",
    };
  }

  visibleHandler = (e) => {
    this.setState({
      btnClick: e.target.name,
    });
  };

  inputHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const {
      btnClick,
      service,
      payment,
      firstName,
      lastName,
      streetName,
      city,
      contryCode,
      contactPhone,
      title,
      zip,
    } = this.state;
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
                btnClick !== "ShoppingMethod" ? "editDate" : "editDateNone"
              }
            >
              SHIP TO ADDRESS
              <button name="ShoppingMethod" onClick={this.visibleHandler}>
                EDIT
              </button>
            </div>
            <ShoppingMethod
              btnClick={btnClick}
              firstName={firstName}
              lastName={lastName}
              streetName={streetName}
              city={city}
              contryCode={contryCode}
              title={title}
              zip={zip}
              contactPhone={contactPhone}
              visibleHandler={(btnClick) => this.visibleHandler(btnClick)}
              inputHandler={(e) => this.inputHandler(e)}
            />
          </div>
        </div>
        <div className="largeTab">
          <div className="nameTab">3 SERVICE</div>
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
            <Service
              service={service}
              btnClick={btnClick}
              visibleHandler={(btnClick) => this.visibleHandler(btnClick)}
            />
          </div>
        </div>
        <div className="largeTab">
          <div className="nameTab">4 PAYMENT</div>
          <div className="mainTab">
            <Payment payment={payment} btnClick={btnClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default CheckOut;
