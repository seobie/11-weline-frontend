import React, { Component } from "react";
import "../../Styles/common.scss";
import "./Shop.scss";

class Shop extends Component {
  constructor() {
    super();
    this.state = {
      Accordion: [],
    };
  }

  componentDidMount = () => {
    fetch("/Data/MockData/Shop.json")
      .then((response) => response.json())
      .then((response) => {
        this.setState({ Accordion: response.Accordion });
      });
  };
  render() {
    return (
      <div className="Shop">
        <aside></aside>
        <main>
          <ul>
            {this.state.Accordion.map((tab) => (
              <li className={tab.tabName}>
                <a href={tab.href}>
                  <img alt="manu pic" src={tab.src} />
                  <span>{tab.text[0]}</span>
                </a>
              </li>
            ))}
          </ul>
        </main>
      </div>
    );
  }
}

export default Shop;
