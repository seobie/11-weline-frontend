import React from "react";
import { Link } from "react-router-dom";

class ShopTab extends React.Component {
  render() {
    const {
      tabName,
      href,
      src,
      src2,
      text,
      hover,
      enterHandler,
      link,
    } = this.props;
    return (
      <li
        className={tabName === hover ? "hover" : "unhover"}
        onMouseEnter={() => enterHandler(tabName)}
      >
        <Link to={link}>
          <a href={href}>
            <img alt="manu pic" src={tabName === hover ? src : src2} />
            <button>
              <span className="first">{text[0]}</span>
              <span className="secound">{text[1]}</span>
              <span className="third">{text[2]}</span>
            </button>
          </a>
        </Link>
      </li>
    );
  }
}

export default ShopTab;
