import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import MenuData from "./MenuData";

class Menu2 extends Component {
  render() {
    const { secondSubMenu } = this.props;
    return (
      <ul className={this.props.searchActive ? "invisible" : "Menu2"}>
        {Object.keys(
          MenuData[`celine ${secondSubMenu[1]}`][secondSubMenu[2]]
        ).map((key) => (
          <li key={key}>
            <NavLink
              to={`/${secondSubMenu[1]}/${secondSubMenu[2]}/${
                MenuData[`celine ${secondSubMenu[1]}`][secondSubMenu[2]][key]
              }`}
              activeStyle={{ fontWeight: "bold" }}
            >
              {MenuData[`celine ${secondSubMenu[1]}`][secondSubMenu[2]][key]}
            </NavLink>
          </li>
        ))}
      </ul>
    );
  }
}

export default Menu2;
