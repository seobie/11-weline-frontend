import React from "react";
import "./Service.scss";

class Service extends React.Component {
  render() {
    return (
      <div
        className={this.props.btnClick === "Service" ? "Service" : "none"}
      ></div>
    );
  }
}

export default Service;
