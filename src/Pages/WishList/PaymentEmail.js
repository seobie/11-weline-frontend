import React from "react";
import { Link } from "react-router-dom";
import EmailGoodsList from "../../Components/EmailGoodsList";
import "./PaymentEmail.scss";

class PaymentEmail extends React.Component {
  constructor() {
    super();
    this.state = {
      Goods: [],
    };
  }

  componentDidMount = () => {
    fetch("/data/mockData/Goods.json")
      .then((response) => response.json())
      .then((Goods) => this.setState({ Goods }));
  };

  render() {
    return (
      <div className="PaymentEmail">
        <aside>
          <div>
            <a href="?">
              <img alt="logo" src="./Images/unnamed.png" />
            </a>
          </div>
        </aside>
        <main>
          <p>HAS SHARED A SELECTION OF CELINE ITEMS WITH YOU.</p>
          <p className="Seperation">CLICK ON EACH ONE FOR MORE INFORMATION.</p>
          <EmailGoodsList Goods={this.state.Goods} />
          <footer>
            <div>
              FOR FURTHER INFORMATION, OUR CLIENT SERVICES TEAM CAN BE REACHED
              AT CLIENTSERVICE.EU@CELINE.COM, MONDAY TO SATURDAY 10AM TO 7PM
              (PARIS TIME).
            </div>
            <table className="navList">
              <tr>
                <td>
                  <Link to="/Shop">CELINE WOMEN</Link>
                </td>
                <td>
                  <a href="https://www.instagram.com/celine/">INSTAGRAM</a>
                </td>
                <td>
                  <a href="https://www.celine.com/en-int/help">CONTACT US</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="https://www.celine.com/en-int/celine-men/">
                    CELINE MEN
                  </a>
                </td>
                <td>
                  <a href="https://www.facebook.com/celineofficial/">
                    FACEBOOK
                  </a>
                </td>
                <td>
                  <a href="https://www.celine.com/en-int/faq?fid=faqquestions&q=shopping">
                    FAQ
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="https://www.celine.com/en-int/celine-haute-parfumerie/">
                    CELINE HAUTE PARFUMERIE
                  </a>
                </td>
                <td>
                  <a href="https://www.celine.com/en-int/recast-staticpage-99.html">
                    WECHAT
                  </a>
                </td>
                <td>
                  <a href="https://www.celine.com/en-int/privacy-policy.html">
                    PRIVACY POLICY
                  </a>
                </td>
              </tr>
            </table>
          </footer>
        </main>
      </div>
    );
  }
}

export default PaymentEmail;
