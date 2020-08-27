import React, { Component } from "react";
import ShopDetailsData from "./ShopDetailsData";
import "./Option.scss";

class Option extends Component {
  constructor() {
    super();
    this.state = {
      isSelectActive: false,
      chosenOption: "",
    };
  }

  chooseOption = (idx) => {
    this.setState({
      chosenOption: ShopDetailsData[this.props.optionName][idx],
    });
  };

  handleSelect = () => {
    this.setState({ isSelectActive: !this.state.isSelectActive });
  };

  render() {
    const { isSelectActive } = this.state;
    const { handleSelect, chooseOption } = this;
    const { title, options, optionName } = this.props;

    return (
      <div className="Option">
        {title}
        <div>
          <div className="selector" onClick={handleSelect}>
            {this.state.chosenOption}
          </div>
          <span className="arrow" />
        </div>
        <div className={isSelectActive ? "optionNames" : "inActiveOptions"}>
          <ul>
            {ShopDetailsData[optionName] &&
              ShopDetailsData[optionName].map((el, idx) => (
                <li
                  onClick={() => {
                    chooseOption(idx);
                    handleSelect();
                  }}
                >
                  {options && (
                    <img
                      src={ShopDetailsData[options][idx]}
                      alt={`option ${idx}`}
                    />
                  )}
                  {ShopDetailsData[optionName][idx]}
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Option;
