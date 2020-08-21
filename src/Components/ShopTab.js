import React from "react";

class ShopTab extends React.Component {
  render() {
    let { TabName, href, src, text } = this.props;
    return (
      <li className={TabName}>
        <a href={href}>
          <img alt="manu pic" src={src} />
          <button>
            <span className="first">{text[0]}</span>
            <span className="secound">{text[1]}</span>
            <span className="third">{text[2]}</span>
          </button>
        </a>
      </li>
    );
  }
}

export default ShopTab;
