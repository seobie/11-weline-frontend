import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import MenuData from "./MenuData";

class Menu1 extends Component {
  render() {
    const { firstSubMenu } = this.props;
    return (
      <ul className={this.props.searchActive ? "invisible" : "Menu1"}>
        {Object.keys(MenuData[`celine ${firstSubMenu}`]).map((key) => (
          <li key={key}>
            <NavLink
              to={`/${firstSubMenu}/${key}`}
              activeStyle={{ fontWeight: "bold" }}
            >
              {key}
            </NavLink>
          </li>
        ))}
      </ul>
    );
  }
}

export default Menu1;
