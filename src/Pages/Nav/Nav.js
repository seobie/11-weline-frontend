import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import "./Nav.scss";

const menu = {
  "celine women": {
    women: {
      "new winter part1": [],
      "charms collection": [],
      "ready to wear": [],
      shoes: [
        "boots",
        "wedges",
        "espadrilles",
        "clogs",
        "flats",
        "sandals",
        "pumps",
        "sneakers",
      ],
      handbags: [],
      "small leather goods": [],
      jewellery: [],
      accessories: [],
    },
  },
  "celine men": { men: [] },
  "celine haute parfumerie": { parfumerie: [] },
  "celine collections": { collections: [] },
  "celine masion de couture": { masion_de_couture: [] },
  "celine main": { "": [] },
  "celine shopdetails": { shopdetails: "shopdetails" },
};

const menuTab = {
  "new winter part1": [],
  "charms collection": [1, 2, 3, 4, 5, 6],
  "ready to wear": [7, 8, 9, 10, 11],
  shoes: [1, 2, 3, 4],
  handbags: [4, 3, 2, 1],
  "small leather goods": [1, 1, 1, 1, 1],
  jewellery: [2, 2, 2, 2, 2, 2],
  accessories: [3, 3, 3, 3, 3],
};
class Nav extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: 0,
    };
  }

  handleClick = () => {
    console.log("hello");
  };
  render() {
    return (
      <nav className="Nav">
        <div className="upper">
          <div className="leftContainer">
            <div className="logo">
              <img
                src="https://www.celine.com/on/demandware.static/Sites-Celine_NONTRANSAC_V2-Site/-/default/dw1bd73729/img/logo/logo-celine.svg"
                alt="logo"
              />
            </div>
            <div className="navContainer">
              <ul className="categories">
                {Object.keys(menu).map((key, idx) => (
                  <li key={idx} onClick={() => this.handleClick(idx)}>
                    <NavLink
                      to={Object.keys(menu[key])[0]}
                      activeStyle={{
                        fontWeight: "bold",
                        color: "red",
                      }}
                    >
                      {key}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <ul>
                {Object.keys(menuTab).map((key) => (
                  <li key={key}>
                    <NavLink to={key}>{key}</NavLink>{" "}
                  </li>
                ))}
              </ul>
              <ul>
                {Object.keys(menuTab).map((key, idx) => (
                  <li key={idx}>
                    <NavLink to={menuTab[key]}>{menuTab[key]}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="rightContainer">
            <div>search</div>
            <div>sign in / register</div>
            <div>store locator</div>
            <div>wishlist</div>
          </div>
        </div>
        <div className="bottom">
          <div className="location">
            <div>location</div>
            <div>language</div>
            <div>sitemap</div>
          </div>
          <div className="messenger">
            <div>messenger</div>
            <div>whatsapp</div>
            <div>contact us</div>
            <div>legal terms</div>
            <div>privacy policy</div>
            <div>faq</div>
          </div>
          <div className="socialMedia">
            <div>instagram</div>
            <div>facebook</div>
            <div>wechat</div>
            <div>youtube</div>
          </div>
          <div className="newsletter">
            <div>celine newsletter</div>
            <div>mail</div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
