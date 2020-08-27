import React from "react";
import "./Service.scss";

class Service extends React.Component {
  render() {
    const { visibleHandler, btnClick } = this.props;
    return (
      <div className={btnClick === "Service" ? "Service" : "none"}>
        <input type="checkbox" id="isGift" />
        <label htmlFor="isGift">IS THIS A GIFT?</label>
        <br />
        <input type="text" />
        <button name="Payment" onClick={(btnClick) => visibleHandler(btnClick)}>
          CONTINUE
        </button>
      </div>
    );
  }
}

export default Service;
