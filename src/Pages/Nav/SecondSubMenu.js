import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import MenuData from "./MenuData";

class SecondSubMenu extends Component {
  render() {
    const { secondSubMenu, searchActive } = this.props;
    const [category, subCategory] = [
      `celine ${secondSubMenu[1]}`,
      secondSubMenu[2],
    ];
    const subCategoryObj = MenuData[category][subCategory];

    return (
      <ul className={searchActive ? "invisible" : "SecondSubMenu"}>
        {Object.keys(subCategoryObj).map((key) => (
          <li key={key}>
            <NavLink
              to={`/${secondSubMenu[1]}/${subCategory}/${subCategoryObj[key]}`}
              activeStyle={{ fontWeight: "bold" }}
            >
              {subCategoryObj[key]}
            </NavLink>
          </li>
        ))}
      </ul>
    );
  }
}

export default SecondSubMenu;
