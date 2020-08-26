import React from "react";
import "./Payment.scss";

class Payment extends React.Component {
  constructor() {
    super();
    this.state = { isCheck: true };
  }

  limitLength = (e) => {
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
  };
  checkboxHandler = () => {
    this.setState({ isCheck: !this.state.isCheck });
  };
  render() {
    const { btnClick } = this.props;
    const { isCheck } = this.state;
    return (
      <div className={btnClick === "Payment" ? "Payment" : "none"}>
        <input className="inputFull" type="text" />
        <input
          className="inputFull"
          type="number"
          maxLength="16"
          onInput={(e) => this.limitLength(e)}
        />
        <input
          className="inputHalf"
          type="number"
          maxLength="4"
          onInput={(e) => this.limitLength(e)}
        />
        <div className="half"></div>
        <input
          className="inputHalf"
          type="number"
          maxLength="3"
          onInput={(e) => this.limitLength(e)}
        />
        <div className="adress">
          <input id="adress" type="radio" />
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
