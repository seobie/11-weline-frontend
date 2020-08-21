import React, { Component } from "react";
import "../../Styles/common.scss";
import "./Shop.scss";

class Shop extends Component {
  constructor() {
    super();
    this.state = {
      accordion: [],
    };
  }

  componentDidMount = () => {
    fetch("/Data/MockData/shop.json")
      .then((response) => response.json())
      .then((response) => {
        this.setState({ accordion: response.accordion });
      });
  };
  render() {
    return (
      <div className="Shop">
        <aside></aside>
        <main>
          <ul>
            {this.state.accordion.map((tab) => (
              <li>
                <a href={tab.href}>
                  <img alt="manu pic" src={tab.src} />
                  <span>{tab.text[0]}</span>
                  <span>{tab.text[1]}</span>
                  <span>{tab.text[2]}</span>
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
