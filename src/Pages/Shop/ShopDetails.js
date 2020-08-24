import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ShopDetails.scss";

const directory = ["celine women", "shoes", "boots"];

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
  constructor() {
    super();
    this.state = {
      detailData: {},
      imgClicked: "",
      zoomed: false,
      sidePanel: false,
    };
  }
  componentDidMount() {
    fetch("http://10.58.3.133:8000/product/detail/4")
      .then((res) => res.json())
      .then((res) => this.setState({ detailData: res }));
  }

  showOriginal = (index) => {
    this.setState({ imgClicked: index });
  };

  zoomToggle = () => {
    this.setState({ zoomed: !this.state.zoomed });
  };

  sidePanel = () => {
    this.setState({ sidePanel: !this.state.sidePanel });
  };

  render() {
    console.log(this.props.history);
    // console.log(this.state.detailData.img);
    console.log(this.state);
    return (
      <div className="ShopDetails">
        <div className="detailWrapper">
          <div className="returnToListing">
            <Link to="/">return to listing</Link>
          </div>
          <div className="detailContainer">
            <div
              className={this.state.sidePanel ? "sidePanel" : "hiddenPanel"}
              onClick={this.sidePanel}
            >
              <div class="scrollingArea">
                <h1 class="a-text f-title">
                  Returns and exchanges (WITHIN 14 DAYS)
                </h1>
                <div class="f-body a-text">
                  <div class="f-body f-body--em a-text">
                    How do I return or exchange something I ordered online?
                  </div>
                  <div class="f-body">
                    <p>
                      Items purchased online may be returned via post mail
                      CELINE.com (by scheduling a pickup at no charge) or in an
                      eligible CELINE boutique.
                    </p>
                    <p>&nbsp;</p>
                    <p>
                      <br />
                      <span class="ls-2">
                        TO SCHEDULE A PICKUP AT NO CHARGE:
                      </span>
                      <br />
                      <br />1 - Please call our{" "}
                      <a href="https://www.celine.com/en-gb/help">
                        Client Service
                      </a>{" "}
                      to schedule a pickup.
                      <br />
                      2 - Carefully wrap the item in its original packaging to
                      protect against damages in transit. Please include the
                      return request form or original invoice.
                      <br />
                      3 - Affix the prepaid return shipping label included in
                      your original order to the package.
                      <br />
                      4 - Hand over the package to the carrier. If you prefer to
                      use a different carrier, you will need to cover the cost
                      of the shipment and insurance.
                      <br />
                      <br />
                      If you wish to return an item, please contact our Client
                      Service within 14 calendar days from the date of delivery.
                      Exchanges can be made within 30 calendar days from the
                      date of delivery.
                    </p>
                    <p>
                      <br />
                      Articles must be unworn, unused and in sellable condition,
                      with all original tags attached. They must be accompanied
                      by the return request form included in the original order.
                      <br />
                      <br />
                      Personalized, altered, and made-to-order items are not
                      eligible for return.
                      <br />
                      <br />
                      If you are unsure about the scent you have purchased, the
                      maison celine invites you to try your fragrance with the
                      complimentary sample in each order before unsealing the
                      fragrance bottle. Any perfume that isn’t returned in its
                      original, intact packaging (the clear film covering the
                      perfume casing must still be sealed) will be refused.
                      <br />
                      <br />
                      Please note that refunds may take several working days to
                      appear in your account, depending on your credit card
                      issuer.
                      <br />
                      <br />
                      You may use other postal services at your own risk. CELINE
                      is not liable for goods returned using any method other
                      than our collection service.
                    </p>
                    <p>&nbsp;</p>
                    <p>
                      <br />
                      RETURNS AND EXCHANGES IN-STORE:
                    </p>
                    <p>&nbsp;</p>
                    You may return products purchased online, at no charge:
                    <br />
                    - for a refund, to any CELINE free standing store using the
                    same currency as the one used to purchase the item
                    (excluding department stores, outlets &amp; airports);
                    <br />- for an exchange, to any CELINE free standing store
                    in europe (excluding department stores, outlets &amp;
                    airports). Please note that exchange in store is possible
                    only for an item with equivalent or higher price, except in
                    Italy (equivalent price only). The original invoice must
                    accompany all returns.<p></p>
                    <p>&nbsp;</p>
                    <p>
                      <br />
                      Purchases made in CELINE boutiques may follow a different
                      return policy.
                    </p>
                    <p>&nbsp;</p>
                  </div>

                  <div class="f-body f-body--em a-text">Return conditions</div>
                  <div class="f-body">
                    <p>
                      Returned items must be unused, with all original tags,
                      accessories, and instruction booklets attached. It must
                      include the original Returns form.
                    </p>

                    <p>&nbsp;</p>

                    <p>
                      Items that have been damaged, worn, soiled, or altered may
                      not be accepted for return and may be sent back to the
                      customer.
                    </p>

                    <p>
                      <br />
                      Eyewear cannot be returned after frames have been fitted
                      with prescription or replacement lenses.
                    </p>

                    <p>&nbsp;</p>

                    <p>
                      PERFUME THAT IS NOT RETURNED IN ITS ORIGINAL PACKAGING
                      (CLEAR PROTECTIVE FILM INTACT) WILL BE REFUSED.
                    </p>

                    <p>&nbsp;</p>

                    <p>&nbsp;</p>

                    <p>&nbsp;</p>

                    <p>&nbsp;</p>

                    <p>
                      Please refer to the{" "}
                      <a
                        class="link--on-white-bg"
                        href="https://www.celine.com/en-gb/terms-and-conditions/terms-of-sales.html"
                      >
                        Terms and Conditions
                      </a>{" "}
                      applicable in your country.
                    </p>

                    <p>&nbsp;</p>

                    <p>&nbsp;</p>

                    <p>&nbsp;</p>
                  </div>

                  <div class="f-body f-body--em a-text">
                    When can I expect my refund?
                  </div>
                  <div class="f-body">
                    <p>
                      Celine will do everything possible to ensure you are
                      promptly refunded. Returns with refund are processed
                      within 14 days of your order cancellation. A confirmation
                      email will be sent to you once your return has been
                      processed and your account has been credited. <br />
                      Refunds will be issued to the original method of payment
                      only.
                    </p>
                  </div>

                  <div class="f-body f-body--em a-text">
                    Are delivery charges and return shipping costs refundable?
                  </div>
                  <div class="f-body">
                    <p>
                      {" "}
                      CELINE offers free express shipping, concierge delivery
                      &amp; collect in store services.{" "}
                    </p>
                    <br />
                    <p>
                      There are no return costs, as pre paid labels are inserted
                      in your parcel.
                    </p>
                  </div>

                  <div class="f-body f-body--em a-text">
                    Can I return my item in a Celine store?
                  </div>
                  <div class="f-body">
                    <p>
                      You may return products purchased online to any celine
                      free standing store using the same currency as the one
                      used to purchase the item (excluding department stores,
                      outlets &amp; airports), at no charge.{" "}
                    </p>
                    <br />
                    <p>The original invoice must accompany all returns. </p>
                    <br />
                    <p>
                      A different return policy may apply to purchases made in
                      CELINE boutiques.
                    </p>
                  </div>

                  <div class="f-body f-body--em a-text">
                    Can I use a different carrier for my return shipping?
                  </div>
                  <div class="f-body">
                    <p>
                      You may use other postal services at your own risk. CELINE
                      is not liable for goods returned using any method other
                      than our collection service.
                    </p>
                    <p></p>
                  </div>

                  <div class="f-body f-body--em a-text">
                    I misplaced my return label. How do I obtain a new one?
                  </div>
                  <div class="f-body">
                    <p>
                      Please contact our{" "}
                      <a href="https://www.celine.com/en-gb/help">
                        Client Service
                      </a>{" "}
                      so we may send you a new one.
                    </p>
                  </div>

                  <div class="f-body f-body--em a-text">
                    Can I receive my refund on a credit card that is different
                    from the one I used for the order?
                  </div>
                  <div class="f-body">
                    <p>
                      {" "}
                      For security reasons, we are only authorized to refund the
                      original method of payment used for the purchase.{" "}
                    </p>
                    <p></p>
                  </div>

                  <div class="f-body f-body--em a-text">
                    Can I return a gift for a refund?
                  </div>
                  <div class="f-body">
                    <p>
                      For security reasons, only the original method of payment
                      may be refunded.{" "}
                    </p>
                    <br />
                    <p>
                      If you'd like to exchange your gift for another item,
                      please contact our{" "}
                      <a href="https://www.celine.com/en-gb/help">
                        Client Service
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="detailedPictures">
              <ul>
                {this.state.detailData.img &&
                  this.state.detailData.img.map((picture, idx) => (
                    <li
                      key={idx}
                      className={
                        this.state.detailData.img.length % 2
                          ? "oddList"
                          : "evenList"
                      }
                    >
                      <img
                        alt={`details ${idx + 1}`}
                        src={picture}
                        className={
                          this.state.imgClicked === idx && this.state.zoomed
                            ? "clickedImg"
                            : ""
                        }
                        onClick={() => {
                          this.showOriginal(idx);
                          this.zoomToggle();
                        }}
                      />
                    </li>
                  ))}
                {/* {itemPics.map((picture, idx) => (
                  <li
                    key={idx}
                    className={itemPics.length % 2 ? "oddList" : "evenList"}
                  >
                    <img
                      className={
                        this.state.imgClicked === idx && this.state.zoomed
                          ? "clickedImg"
                          : ""
                      }
                      src={picture}
                      alt=""
                      onClick={() => {
                        this.showOriginal(idx);
                        this.zoomToggle();
                      }}
                    />
                  </li>
                ))} */}
              </ul>
            </div>
            <div className="itemDescriptions">
              <h1>{this.state.detailData.name}</h1>
              {/* <h1>CHAT BOTTÉ OVER-THE-KNEE FLAT BOOT IN SUEDE CALFSKIN</h1> */}
              <h1>{this.state.detailData.price}</h1>
              {/* <h1>1,200 GBP</h1> */}
              <p>{this.state.detailData.description}</p>
              {/* <p>
                100% CALFSKIN
                <br />
                0.2 IN (5 MM) HEEL
                <br />
                ELONGATED ALMOND TOE SHAPE
                <br />
                DECORATIVE LACES WITH DANGLING TASSELS
                <br />
                SLIP ON
                <br />
                LEATHER INSOLE
                <br />
                LEATHER THIN OUTSOLE
                <br />
                REFERENCE : 339703117C.38NO
              </p> */}
              <div className="productDetails" onClick={this.sidePanel}>
                + product details
              </div>
              <div className="optionWrapper">
                <div className="option">
                  <div className="optionLabel">
                    colors
                    <select name="option">
                      {/* {Object.keys(options).map((option, idx) => (
                        <option key={idx} value={option}>
                          {option}
                        </option>
                      ))} */}
                      <option value={this.state.detailData["color_name"]}>
                        {this.state.detailData["color_name"]}
                      </option>
                    </select>
                  </div>
                  <div className="buttons">
                    <div onClick={this.sidePanel}>
                      RETURNS AND EXCHANGES (WITHIN 14 DAYS)
                    </div>
                    <div onClick={this.sidePanel}>
                      DELIVERY (2-5 BUSINESS DAYS)
                    </div>
                    <div>find in store</div>
                    <div className="contactUs">contact us</div>
                    <div className="addToWishlist">add to wishlist</div>
                    <div className="saved">saved</div>
                    <div className="share">share</div>
                  </div>
                </div>
                <button>find in store</button>
              </div>
            </div>
          </div>
          <div className="recentlyViewed">
            <h2>recently viewed</h2>
            <ul>
              {Object.keys(recentlyViewed).map((item, idx) => (
                <li key={idx}>
                  <img src={recentlyViewed[item]} alt={item} />
                </li>
              ))}
            </ul>
          </div>
          <nav className="itemDirectory">
            <ul>
              <li>
                <Link to="/">Celine</Link>
              </li>
              {directory.map((el) => (<li key={el}>{el}</li>: before))}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
