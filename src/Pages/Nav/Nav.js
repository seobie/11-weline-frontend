import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import MenuData from "./MenuData";
import FirstSubMenu from "./FirstSubMenu";
import SecondSubMenu from "./SecondSubMenu";
import SearchResultItem from "./SearchResultItem";
import config from "../../config";
import Login from "../Login/Login";
import "./Nav.scss";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      searchActive: false,
      searchResult: false,
      items: [],
      searchInput: "",
      sidePanel: false,
    };
  }

  handleInput = (e) => {
    this.setState(
      {
        searchInput: e.target.value,
        searchResult: e.target.value,
      },
      () => {
        fetch(`${config.API}/product/products?q=${this.state.searchInput}`)
          .then((res) => res.json())
          .then((res) => {
            this.setState({ items: res });
          });
      }
    );
  };

  changeHandler = (e) => {
    this.setState({ change: e });
  };

  handleSearch = () => {
    this.setState({ searchActive: !this.state.searchActive });
  };

  signInPanel = () => {
    this.setState({ sidePanel: !this.state.sidePanel });
  };

  render() {
    const getPathName = window.location.pathname.split("/");
    const pathName = getPathName.slice(1);
    const [mainMenu, subMenu] = pathName;
    const { searchActive, searchResult, items, sidePanel } = this.state;
    const { handleSearch, handleInput, signInPanel } = this;
    const filtered = items.products;

    return (
      <nav className="Nav">
        <div
          className={
            searchActive && searchResult ? "searchResult" : "invisible"
          }
        >
          <div className="leftSpace" />
          <div className="rightSpace">
            {filtered && !filtered.length && (
              <div className="noResult">
                <img
                  src="https://www.celine.com/on/demandware.static/-/Library-Sites-Celine-SharedLibrary/default/dwce2858c6/staticpages/Celine.com_WEB_AUCUN_RESULTAT.jpg"
                  alt="failed to search"
                />
                <h1>no results found for your search</h1>
              </div>
            )}
            <ul>
              <SearchResultItem products={filtered} />
            </ul>
          </div>
        </div>
        <div className={sidePanel ? "sidePanel" : "hiddenPanel"}>
          <Login functionFromNav={signInPanel} />
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
                <input
                  type="text"
                  onChange={(e) => {
                    handleInput(e);
                  }}
                />
                <button onClick={handleSearch}>close</button>
              </div>
              <ul className={searchActive ? "invisible" : ""}>
                {Object.keys(MenuData).map((key) => (
                  <li key={key}>
                    <NavLink
                      to={`/${key.slice(7).replace(/ /gi, "-")}`}
                      activeStyle={{
                        fontWeight: "bold",
                      }}
                    >
                      {key}
                    </NavLink>
                  </li>
                ))}
              </ul>
              {mainMenu && (
                <FirstSubMenu
                  searchActive={searchActive}
                  firstSubMenu={getPathName}
                  hover={this.props.hover}
                  hoverHandler={this.props.hoverHandler}
                />
              )}
              {subMenu && (
                <SecondSubMenu
                  searchActive={searchActive}
                  secondSubMenu={getPathName}
                />
              )}
            </div>
          </div>
          <div className={searchActive ? "invisible" : "rightContainer"}>
            <div role="search">
              <button onClick={handleSearch}>search</button>
            </div>
            <div className={searchActive ? "invisible" : "rightBtns"}>
              <div>
                <button onClick={signInPanel}>sign in / register</button>
              </div>
              <div>
                <button>store locator</button>
              </div>
              <div>
                <button>
                  <Link to="/wishlist">shopping bag</Link>
                </button>
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
