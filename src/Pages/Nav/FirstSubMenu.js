import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import MenuData from "./MenuData";

class FirstSubMenu extends Component {
  render() {
    const { searchActive, firstSubMenu } = this.props;
    return (
      <ul className={searchActive ? "invisible" : "FirstSubMenu"}>
<<<<<<< HEAD
        {MenuData[`celine ${firstSubMenu[1].replace(/-/gi, " ")}`] &&
          Object.keys(
            MenuData[`celine ${firstSubMenu[1].replace(/-/gi, " ")}`]
          ).map((key) => (
            <li key={key}>
              <NavLink
                to={`/${firstSubMenu[1]}/${key.replace(/ /gi, "-")}`}
=======
        {MenuData[`celine ${firstSubMenu[1]}`] &&
          Object.keys(MenuData[`celine ${firstSubMenu[1]}`]).map((key) => (
            <li key={key}>
              <NavLink
                to={`/${firstSubMenu[1]}/${key}`}
>>>>>>> master
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
