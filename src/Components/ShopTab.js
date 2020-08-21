import React from "react";

class ShopTab extends React.Component {
  render() {
    let { tabName, href, src, text } = this.props;
    return (
      <li className={true ? tabName : "hoverLi"}>
        <a href={href}>
          <img alt="manu pic" src={src} />
          <span>{text[0]}</span>
          <span>{text[1]}</span>
          <span>{text[2]}</span>
        </a>
      </li>
    );
  }
}

export default ShopTab;
