import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import MenuData from "./MenuData";

class FirstSubMenu extends Component {
  render() {
    const { searchActive, firstSubMenu } = this.props;
    return (
      <ul className={searchActive ? "invisible" : "FirstSubMenu"}>
        {MenuData[`celine ${firstSubMenu[1]}`] &&
          Object.keys(MenuData[`celine ${firstSubMenu[1]}`]).map((key) => (
            <li key={key}>
              <NavLink
                to={`/${firstSubMenu[1]}/${key.replace(/ /gi, "-")}`}
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

export default FirstSubMenu;
