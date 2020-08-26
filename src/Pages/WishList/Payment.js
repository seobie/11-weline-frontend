import React from "react";
import "./Payment.scss";

class Payment extends React.Component {
  constructor() {
    super();
    this.state = { isCheck: true, isChange: [] };
  }

  limitLength = (e) => {
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
  };

  checkboxHandler = () => {
    this.setState({ isCheck: !this.state.isCheck });
  };

  placeholderHandler = (e) => {
    if (this.state.isChange.indexOf(e.target.name) === -1) {
      this.setState({ isChange: [...this.state.isChange, e.target.name] });
    }
  };
  render() {
    const { btnClick, payment, paymentHandler } = this.props;
    const { isCheck, isChange } = this.state;
    return (
      <div className={btnClick === "Payment" ? "Payment" : "none"}>
        <div className="placeholderContainor">
          <input
            type="text"
            id={
              isChange.indexOf("nameOfCard") !== -1 && !payment.nameOfCard
                ? "inputFocusOut"
                : ""
            }
            name="nameOfCard"
            placeholder="THIS FIELD IS REQUIRED."
            onChange={this.placeholderHandler}
            onKeyUp={(e) => paymentHandler(e)}
          />
        </div>
        <div className="placeholderContainor">
          <input
            type="number"
            id={
              isChange.indexOf("cardNumber") !== -1 && !payment.cardNumber
                ? "inputFocusOut"
                : ""
            }
            name="cardNumber"
            maxLength="16"
            placeholder="THIS FIELD IS REQUIRED."
            onChange={this.placeholderHandler}
            onInput={(e) => this.limitLength(e)}
            onKeyUp={(e) => paymentHandler(e)}
          />
        </div>
        <div className="placeholderContainorhalf">
          <input
            type="number"
            id={
              isChange.indexOf("expDate") !== -1 && !payment.expDate
                ? "inputFocusOut"
                : ""
            }
            name="expDate"
            maxLength="4"
            placeholder="THIS FIELD IS REQUIRED."
            onChange={this.placeholderHandler}
            onInput={(e) => this.limitLength(e)}
            onKeyUp={(e) => paymentHandler(e)}
          />
        </div>
        <div className="half"></div>
        <div className="placeholderContainorhalf">
          <input
            type="number"
            id={
              isChange.indexOf("securityCode") !== -1 && !payment.securityCode
                ? "inputFocusOut"
                : ""
            }
            name="securityCode"
            maxLength="3"
            placeholder="THIS FIELD IS REQUIRED."
            onChange={this.placeholderHandler}
            onInput={(e) => this.limitLength(e)}
            onKeyUp={(e) => paymentHandler(e)}
          />
        </div>
        <div className="adress">
          <input id="adress" type="radio" checked />
          <label for="adress">
            <h3>MR. HAN TEAGYU</h3>
            <p>중동로</p>
            <p>KS009 BUCHUN, KOREA, REPUBLIC OF</p>
            <p>+82 01020849913</p>
          </label>
        </div>
        <div className="agree">
          <input onClick={this.checkboxHandler} id="agree" type="checkbox" />
          <label for="agree">
            <p>
              I AGREE WITH THE
              <a href="?">
                CONFIDENTIALITY AND DATA PROTECTION POLICY
              </a> AND <a href="?">THE TERMS OF USE</a>.
            </p>
          </label>
        </div>
        <button className="purchase" disabled={isCheck}>
          PURCHASE
        </button>
      </div>
    );
  }
}

export default Payment;
