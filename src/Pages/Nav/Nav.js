import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import MenuData from "./MenuData";
import Menu1 from "./Menu1";
import Menu2 from "./Menu2";
import SearchResultItem from "./SearchResultItem";
import "./Nav.scss";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      searchActive: false,
      searchResult: false,
    };
  }

  handleChange = (e) => {
    if (e.target.value) {
      this.setState({ searchResult: true });
    } else {
      this.setState({ searchResult: false });
    }
  };

  handleSearch = () => {
    this.setState({ searchActive: !this.state.searchActive });
  };

  render() {
    const getPathName = window.location.pathname.split("/");
    const { searchActive, searchResult } = this.state;
    const { handleSearch } = this;

    return (
      <nav className="Nav">
        <div className={searchResult ? "searchResult" : "invisible"}>
          <div className="leftSpace"></div>
          <div className="rightSpace">
            <ul>
              <SearchResultItem />
            </ul>
          </div>
        </div>
        <div className="upper">
          <div className="leftContainer">
            <div className="logo">
              <Link to="/">
                <img
                  alt="logo"
                  src="https://www.celine.com/on/demandware.static/Sites-Celine_NONTRANSAC_V2-Site/-/default/dw1bd73729/img/logo/logo-celine.svg"
                />
              </Link>
            </div>
            <div className="navContainer">
              <div
                className={searchActive ? "searchInputActive" : "searchInput"}
              >
                <input type="text" onChange={this.handleChange} />
                <button onClick={handleSearch}>close</button>
              </div>
              <ul className={searchActive ? "invisible" : ""}>
                {Object.keys(MenuData).map((key) => (
                  <li key={key}>
                    <NavLink
                      to={`/${key.slice(7)}`}
                      activeStyle={{
                        fontWeight: "bold",
                      }}
                    >
                      {key}
                    </NavLink>
                  </li>
                ))}
              </ul>
              {getPathName[1] ? (
                <Menu1
                  searchActive={searchActive}
                  firstSubMenu={getPathName[1]}
                />
              ) : (
                ""
              )}
              {getPathName[2] ? (
                <Menu2
                  searchActive={searchActive}
                  secondSubMenu={getPathName}
                />
              ) : (
                ""
              )}
            </div>
          </div>
          <div className={searchActive ? "invisible" : "rightContainer"}>
            <div role="search">
              <button onClick={handleSearch}>search</button>
            </div>
            <div className={searchActive ? "invisible" : "rightBtns"}>
              <div>
                <button>sign in / register</button>
              </div>
              <div>
                <button>store locator</button>
              </div>
              <div>
                <button>shopping bag</button>
              </div>
            </div>
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
