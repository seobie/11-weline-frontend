import React from "react";
import "./Payment.scss";

class Payment extends React.Component {
  constructor() {
    super();
    this.state = { isCheck: true, isChange: [] };
  }

  limitLength = (e) => {
    let { value, maxLength } = e.target;
    if (value.length > maxLength) {
      e.target.value = value.slice(0, maxLength);
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

  purchaseHandler = () => {
    alert("결제가 완료되었습니다.");
  };

  render() {
    const { btnClick, payment, paymentHandler } = this.props;
    const { isCheck, isChange } = this.state;
    return (
      <div className={btnClick === "Payment" ? "Payment" : "none"}>
        <div className="placeholderContainor">
          <input
            type="text"
            className={
              isChange.indexOf("nameOfCard") !== -1 && !payment.nameOfCard
                ? "inputFocusOut"
                : ""
            }
            name="nameOfCard"
            placeholder="THIS FIELD IS REQUIRED."
            onChange={this.placeholderHandler}
            onKeyUp={paymentHandler}
          />
          <p>NAME OF CARD</p>
        </div>
        <div className="placeholderContainor">
          <input
            type="number"
            className={
              isChange.indexOf("cardNumber") !== -1 && !payment.cardNumber
                ? "inputFocusOut"
                : ""
            }
            name="cardNumber"
            maxLength="16"
            placeholder="THIS FIELD IS REQUIRED."
            onChange={this.placeholderHandler}
            onInput={this.limitLength}
            onKeyUp={paymentHandler}
          />
          <p>NUMBER</p>
        </div>
        <div className="placeholderContainorhalf">
          <input
            type="number"
            className={
              isChange.indexOf("expDate") !== -1 && !payment.expDate
                ? "inputFocusOut"
                : ""
            }
            name="expDate"
            maxLength="4"
            placeholder="THIS FIELD IS REQUIRED."
            onChange={this.placeholderHandler}
            onInput={this.limitLength}
            onKeyUp={paymentHandler}
          />
          <p>EXP DATE</p>
        </div>
        <div className="half"></div>
        <div className="placeholderContainorhalf">
          <input
            type="number"
            className={
              isChange.indexOf("securityCode") !== -1 && !payment.securityCode
                ? "inputFocusOut"
                : ""
            }
            name="securityCode"
            maxLength="3"
            placeholder="THIS FIELD IS REQUIRED."
            onChange={this.placeholderHandler}
            onInput={this.limitLength}
            onKeyUp={paymentHandler}
          />
          <p>SECURITY CODE</p>
        </div>
        <div className="address">
          <input id="address" type="radio" checked />
          <label htmlFor="address">
            <h3>MR. HAN TEAGYU</h3>
            <p>중동로</p>
            <p>KS009 BUCHUN, KOREA, REPUBLIC OF</p>
            <p>+82 01020849913</p>
          </label>
        </div>
        <div className="agree">
          <input onClick={this.checkboxHandler} id="agree" type="checkbox" />
          <label htmlFor="agree">
            <p>
              I AGREE WITH THE
              <a href="?">
                CONFIDENTIALITY AND DATA PROTECTION POLICY
              </a> AND <a href="?">THE TERMS OF USE</a>.
            </p>
          </label>
        </div>
        <button
          className="purchase"
          disabled={
            isCheck ||
            !payment.expDate ||
            !payment.nameOfCard ||
            payment.cardNumber.length < 16 ||
            payment.securityCode.length < 3
          }
          onClick={this.purchaseHandler}
        >
          PURCHASE
        </button>
      </div>
    );
  }
}

export default Payment;
