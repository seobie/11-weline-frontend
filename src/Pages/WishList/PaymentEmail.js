import React from "react";
import EmailGoods from "../../Components/EmailGoods";
import "./PaymentEmail.scss";

class PaymentEmail extends React.Component {
  constructor() {
    super();
    this.state = {
      Goods: [
        {
          category: "A",
          List: [
            {
              name: "신발",
              href: "주소",
              src: "사진",
              price: "가격",
              colour: "색",
            },
          ],
        },
      ],
    };
  }
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
          <p>CLICK ON EACH ONE FOR MORE INFORMATION.</p>
          <EmailGoods href={} src="" name="" price="" colour="" />
        </main>
      </div>
    );
  }
}

export default PaymentEmail;
