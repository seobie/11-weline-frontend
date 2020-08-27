import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import MenuData from "./MenuData";

class SecondSubMenu extends Component {
  render() {
    const { secondSubMenu, searchActive } = this.props;
    const subMenu = secondSubMenu.slice(1);
    const [category, subCategory] = subMenu;
    const subCategoryObj = MenuData[`celine ${category}`][subCategory];

    return (
      <ul className={searchActive ? "invisible" : "SecondSubMenu"}>
        {subCategoryObj &&
          Object.keys(subCategoryObj).map((key) => (
            <li key={key}>
              <NavLink
                to={`/${category}/${subCategory}/${subCategoryObj[key]}`}
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
