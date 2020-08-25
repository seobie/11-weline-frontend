import React from "react";
import "./ShoppingMethod.scss";

class ShoppingMethod extends React.Component {
  constructor() {
    super();
    this.state = { isCheck: false, howToSend: "shipToAdress" };
  }

  descriptionHandler = () => {
    this.setState({ isCheck: !this.state.isCheck });
  };

  sendHandler = (e) => {
    this.setState({ howToSend: e.target.id });
  };

  render() {
    return (
      <div
        className={
          this.props.btnClick === "ShoppingMethod" ? "ShoppingMethod" : "none"
        }
      >
        <input
          name="howToSend"
          id="shipToAdress"
          type="radio"
          onClick={this.sendHandler}
          checked={this.state.howToSend === "shipToAdress"}
        />
        <label for="shipToAdress">SHIP TO ADRESS</label>
        <input
          name="howToSend"
          id="collectInStore"
          type="radio"
          onClick={this.sendHandler}
        />
        <label for="collectInStore">COLLECT IN STORE</label>
        <div className="changeContry">
          <span>KOREA</span>
          <button>CHANGE CONTRY</button>
        </div>
        <div
          className={
            this.state.howToSend === "shipToAdress" ? "shipToAdress" : "none"
          }
        >
          <select className="title" name="Title">
            <option>MRS.</option>
            <option>MS.</option>
            <option>MR.</option>
          </select>
          <input className="firstName" name="first name" type="text" />
          <input name="last name" type="text" />
          <input name="company(optional)" type="text" />
          <input name="street name" type="text" />
          <input name="apt/floor(optional)" type="text" />
          <input name="city" type="text" />
          <input name="zip" type="text" />
          <select className="contryCode" name="contry code">
            <option>+44</option>
          </select>
          <input className="contactPhone" name="contact phone" type="text" />
          <br />
          <input
            className="saveAdress"
            name="save adress"
            id="save adress"
            type="checkbox"
          />
          <label for="save adress">SAVE ADDRESS TO YOUR ACCOUNT</label>
        </div>

        <div
          className={
            this.state.howToSend === "collectInStore"
              ? "collectInStore"
              : "none"
          }
        >
          <p>SHOW MAP</p>
          <input name="shopAdress" id="shopAdress" type="radio" />
          <label for="shopAdress">대충 긴 주소</label>
          <input
            name="Proxy receipt"
            id="Proxy receipt"
            type="checkbox"
            onClick={this.descriptionHandler}
          />
          <label for="Proxy receipt">SOMEONE ELSE WILL COLLECT MY ORDER.</label>
          <div className={this.state.isCheck ? "Description" : "none"}>
            IF YOU HAVE AUTHORIZED SOMEONE ELSE TO PICK UP YOUR ORDER, THEY WILL
            BE REQUIRED TO PRESENT THE FOLLOWING:
            <p>-YOUR ORIGINAL METHOD OFPAYMENT OR PAYPAL CONFIRMATION EMAIL</p>
            <p>
              -YOUR VALID, GOVERNMENT-ISSUED ID -YOUR ORDER CONFIRMATION EMAIL
            </p>
            <p>
              -A VALID, GOVERNMENT-ISSUED ID FOR THE PERSON COLLECTING THE ORDER
            </p>
          </div>
          <select className="title" name="Title">
            <option>MRS.</option>
            <option>MS.</option>
            <option>MR.</option>
          </select>
          <input name="first name" type="text" />
          <input name="last name" type="text" />
          <select name="contry code">
            <option>+44</option>
          </select>
          <input name="contact phone" type="text" />
        </div>
        <button>CONTINUE</button>
      </div>
    );
  }
}

export default ShoppingMethod;
