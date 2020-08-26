import React from "react";
import "./ShoppingMethod.scss";

class ShoppingMethod extends React.Component {
  constructor() {
    super();
    this.state = {
      isCheck: false,
      isFocus: false,
      howToSend: "shipToAdress",
    };
  }

  descriptionHandler = () => {
    this.setState({ isCheck: !this.state.isCheck });
  };

  sendHandler = (e) => {
    this.setState({ howToSend: e.target.id });
  };

  limitLength = (e) => {
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
  };

  render() {
    const {
      visibleHandler,
      btnClick,
      shoppingMethodHandler,
      shoppingMethod,
    } = this.props;
    const { howToSend, isCheck } = this.state;
    return (
      <div
        className={btnClick !== "ShoppingMethod" ? "none" : "ShoppingMethod"}
      >
        <input
          name="howToSend"
          id="shipToAdress"
          type="radio"
          onClick={this.sendHandler}
          checked={howToSend === "shipToAdress"}
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
        <div className={howToSend === "shipToAdress" ? "shipToAdress" : "none"}>
          <select
            onBlur={(e) => shoppingMethodHandler(e)}
            name="title"
            className="title"
          >
            <option>MRS.</option>
            <option>MS.</option>
            <option>MR.</option>
          </select>
          <input
            className="firstName"
            name="firstName"
            type="text"
            onChange={(e) => shoppingMethodHandler(e)}
          />
          <input
            name="lastName"
            type="text"
            onChange={(e) => shoppingMethodHandler(e)}
          />
          <input
            name="company"
            type="text"
            onChange={(e) => shoppingMethodHandler(e)}
          />
          <input
            name="streetName"
            type="text"
            onChange={(e) => shoppingMethodHandler(e)}
          />
          <input
            name="aptFloor"
            type="text"
            onChange={(e) => shoppingMethodHandler(e)}
          />
          <input
            name="city"
            type="text"
            onChange={(e) => shoppingMethodHandler(e)}
          />
          <input
            name="zip"
            type="text"
            maxLength="6"
            onChange={(e) => shoppingMethodHandler(e)}
          />
          <select
            className="contryCode"
            name="contryCode"
            onBlur={(e) => shoppingMethodHandler(e)}
          >
            <option>+82</option>
          </select>
          <input
            className="contactPhone"
            name="contactPhone"
            type="number"
            maxLength="11"
            onInput={(e) => this.limitLength(e)}
            onChange={(e) => shoppingMethodHandler(e)}
          />
          <div className="labelheight">
            <input
              className="saveAdress"
              name="save adress"
              id="save adress"
              type="checkbox"
            />
            <label for="save adress">SAVE ADDRESS TO YOUR ACCOUNT</label>
          </div>
        </div>

        <div
          className={howToSend === "collectInStore" ? "collectInStore" : "none"}
        >
          <p className="text">SHOW MAP</p>
          <div className="adress">
            <input name="shopAdress" id="shopAdress" type="radio" />
            <label for="shopAdress">
              <h3>
                CELINE MOUNT STREETLONDON<span>DELIVERS FRIDAY 28</span>
              </h3>
              <p>
                103 MOUNTSTREET <span>AUGUST</span>
              </p>
              <p>LONDON W1K 2TJ</p>
              <p>+442074918200</p>
            </label>
          </div>
          <input
            name="Proxy receipt"
            id="Proxy receipt"
            type="checkbox"
            onClick={this.descriptionHandler}
          />
          <label for="Proxy receipt">SOMEONE ELSE WILL COLLECT MY ORDER.</label>
          <div className={isCheck ? "Description" : "none"}>
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
          <br />
          <select className="title" name="Title">
            <option>MRS.</option>
            <option>MS.</option>
            <option>MR.</option>
          </select>
          <input className="firstName" name="first name" type="text" />
          <input name="last name" type="text" />
          <select className="contryCode" name="contry code">
            <option>+44</option>
          </select>
          <input className="contactPhone" name="contact phone" type="text" />
        </div>
        <button
          className="continue"
          name="Service"
          onClick={(btnClick) => {
            visibleHandler(btnClick);
          }}
          disabled={
            !shoppingMethod.firstName ||
            !shoppingMethod.lastName ||
            !shoppingMethod.streetName ||
            !shoppingMethod.city ||
            !shoppingMethod.contryCode ||
            shoppingMethod.contactPhone.length < 11 ||
            !shoppingMethod.title ||
            shoppingMethod.zip.length < 6
          }
        >
          CONTINUE
        </button>
      </div>
    );
  }
}

export default ShoppingMethod;
