import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import "./ShopDetails.scss";

const itemPics = [
  "https://twicpics.celine.com/products/dw2a049ab4/images/large/339703117C.38NO_0_FALL20_742753v2.jpg?sw=1900&sh=1900&sm=fit&strip=false",
  "https://twicpics.celine.com/products/dw208fcd48/images/large/339703117C.38NO_1_FALL20_742702v1.jpg?sw=1900&sh=1900&sm=fit&strip=false",
  "https://twicpics.celine.com/products/dwcf9b0128/images/large/339703117C.38NO_2_FALL20_742795v1.jpg?sw=1900&sh=1900&sm=fit&strip=false",
  "https://twicpics.celine.com/products/dw8d590640/images/large/339703117C.38NO_6_FALL20_742767v2.jpg?sw=1900&sh=1900&sm=fit&strip=false",
  "https://twicpics.celine.com/products/dw0eaab394/images/large/339703117C.38NO_7_FALL20_721371v2.jpg?sw=1900&sh=1900&sm=fit&strip=false",
];

const recentlyViewed = {
  itemName1:
    "https://twicpics.celine.com/products/dw1d90136d/images/large/339913190C.38NO_2_FALL20_741504v2.jpg?sw=1900&sh=1900&sm=fit&strip=false",
  itemName2:
    "https://twicpics.celine.com/products/dwd7bd6f4c/images/large/339183190C.38NO_1_FALL20_781755v1.jpg?sw=1900&sh=1900&sm=fit&strip=false",
  itemName3:
    "https://twicpics.celine.com/products/dw94abfe9e/images/large/338343363C.04LU_2_SUM20_602203v2.jpg?sw=1000&sh=1000&sm=fit&strip=false",
  itemName4:
    "https://twicpics.celine.com/products/dw6d942286/images/large/338443433C.04LU_2_SUM20_800868v2.jpg?sw=1000&sh=1000&sm=fit&strip=false",
  itemName5:
    "https://twicpics.celine.com/products/dw257ee05e/images/large/336623363C.04LU_2_SPR20_408513v2.jpg?sw=1000&sh=1000&sm=fit&strip=false",
  itemName6:
    "https://twicpics.celine.com/products/dw2a049ab4/images/large/339703117C.38NO_0_FALL20_742753v2.jpg?sw=1900&sh=1900&sm=fit&strip=false",
};

const options = {
  Black:
    "https://www.celine.com/on/demandware.static/-/Sites-masterCatalog/default/dw8a555928/images/swatch/38NO.jpg",
  option2: "option2",
  option3: "option3",
  option4: "option4",
};
export default class ShopDetails extends Component {
  render() {
    return (
      <div className="ShopDetails">
        <div className="detailWrapper">
          <div className="returnToListing">
            <Link to="/">return to listing</Link>
          </div>
          <div className="detailContainer">
            <div className="detailedPictures">
              <ul>
                {itemPics.map((picture) => (
                  <li className={itemPics.length % 2 ? "oddList" : "evenList"}>
                    <img src={picture} alt="" />
                  </li>
                ))}
              </ul>
            </div>
            <div className="itemDescriptions">
              <h1>CHAT BOTTÉ OVER-THE-KNEE FLAT BOOT IN SUEDE CALFSKIN</h1>
              <p>
                100% Calfskin
                <br />
                0.2 IN (5 MM) heel
                <br />
                Elongated almond toe shape
                <br />
                Decorative laces with dangling tassels
                <br />
                Slip on
                <br />
                Leather insole
                <br />
                Leather thin outsole
                <br />
                Reference : 339703117C.38NO
              </p>
              <div className="optionWrapper">
                <div className="option">
                  <div className="optionLabel">
                    colors
                    <select name="option">
                      {Object.keys(options).map((option, idx) => (
                        <option key={idx} value={option}>
                          {options[option]}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="contactUs">contact us</div>
                  <div className="addToWishlist">add to wishlist</div>
                  <div className="share">share</div>
                </div>
                <button>find in store</button>
              </div>
            </div>
          </div>
          <div className="recentlyViewed">
            <h2>recently viewed</h2>
            <ul>
              {Object.keys(recentlyViewed).map((item, idx) => (
                <li>
                  <img key={idx} src={recentlyViewed[item]} alt={item} />
                </li>
              ))}
            </ul>
          </div>
          <nav className="itemDirectory">
            <ul>
              <li>
                <Link to="/">Celine</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Nav />
      </div>
    );
  }
}
