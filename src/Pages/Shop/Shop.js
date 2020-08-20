import React, { Component } from "react";
import "../../Styles/common.scss";
import "./Shop.scss";

class Shop extends Component {
  render() {
    return (
      <div className="Shop">
        <aside></aside>
        <main>
          <ul>
            <li className="ACCESSORIES">
              <a href="?">
                <img
                  alt="manu pic"
                  src="https://www.celine.com/on/demandware.static/-/Library-Sites-Celine-SharedLibrary/default/dwae4f7a92/navigation-recast/16.WOMEN_WINTER_20_PART_2_SGL.jpg"
                />
                <span>ACCESSORIES</span>
              </a>
            </li>
            <li>
              <a href="?">
                <img
                  alt="manu pic"
                  src="https://www.celine.com/on/demandware.static/-/Library-Sites-Celine-SharedLibrary/default/dwe22fbd6b/navigation-recast/16.WOMEN_WINTER_20_PART_2_JWL.jpg"
                />
                <span>JEWELLERY</span>
              </a>
            </li>
            <li>
              <a href="?">
                <img
                  alt="manu pic"
                  src="https://www.celine.com/on/demandware.static/-/Library-Sites-Celine-SharedLibrary/default/dwc694a6c4/navigation-recast/16.WOMEN_WINTER_20_PART_2_SLG.jpg"
                />
                <span>SMALL LEATHER GOODS</span>
              </a>
            </li>
            <li>
              <a href="?">
                <img
                  alt="manu pic"
                  src="https://www.celine.com/on/demandware.static/-/Library-Sites-Celine-SharedLibrary/default/dw22f941c4/navigation-recast/16.WOMEN_WINTER_20_PART_2_BAGS.jpg"
                />
                <span>HANDBAGS</span>
              </a>
            </li>
            <li>
              <a href="?">
                <img
                  alt="manu pic"
                  src="https://www.celine.com/on/demandware.static/-/Library-Sites-Celine-SharedLibrary/default/dw58420ebe/navigation-recast/16.WOMEN_WINTER_20_PART_2_SHOES_STATIQUE.jpg"
                  //src="https://www.celine.com/on/demandware.static/-/Library-Sites-Celine-SharedLibrary/default/dw21798fca/navigation-recast/16.WOMEN_WINTER_20_PART_2_SHOES.gif"
                />
                <span>SHOES</span>
              </a>
            </li>
            <li>
              <a href="?">
                <img
                  alt="manu pic"
                  src="https://www.celine.com/on/demandware.static/-/Library-Sites-Celine-SharedLibrary/default/dw3dbadd67/navigation-recast/16.WOMEN_WINTER_20_PART_2_RTW_02.jpg"
                />
                <span>READY TO WEAR</span>
              </a>
            </li>
            <li>
              <a href="?">
                <img
                  alt="manu pic"
                  src="https://www.celine.com/on/demandware.static/-/Library-Sites-Celine-SharedLibrary/default/dwaf401b49/navigation-recast/16.WOMEN_WINTER_20_PART_1_CHARMS.jpg"
                />
                <span>CHARMS COLLECTION</span>
              </a>
            </li>
            <li>
              <a href="?">
                <img
                  alt="manu pic"
                  src="https://www.celine.com/on/demandware.static/-/Library-Sites-Celine-SharedLibrary/default/dw026a1b09/navigation-recast/16.WOMEN_WINTER_20_PART_2_NC.jpg"
                />
                <span>NEW WINTER PART 1</span>
              </a>
            </li>
          </ul>
        </main>
      </div>
    );
  }
}

export default Shop;
