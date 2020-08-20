import React from "react";
import GoodsList from "../../Components/GoodsList";
import "./ShopListCol.scss";
import "../../Styles/common.scss";

class ShopListCol extends React.Component {
  constructor() {
    super();
    this.state = {
      mouseover: true,
      Goods: [
        {
          category: "A",
          List: [
            {
              key: "1",
              name: "CUBAINE MEDIUM BOOT IN CALFSKIN",
              src: "./Images/images.jpeg",
              src2: "./Images/images1.jpeg",
              new: true,
              href: "",
            },
          ],
        },
      ],
    };
  }

  /*componentDidMount = () => {
    fetch("주소", {
      method: "GET",
      body: JSON.stringify({}),
    })
      .then((response) => response.json())
      .then((response) => console.log(response));
  };*/

  HoverImgChanger = () => {
    this.setState({
      mouseover: !this.state.mouseover,
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="ShopListCol">
        <aside></aside>
        <main>
          <header>
            <span>BOOTS</span>
          </header>
          <GoodsList
            Goods={this.state.Goods}
            mouseover={this.state.mouseover}
          />
          <nav>
            <a href="?">WELINE</a>
            <span>/</span>
            <a href="?">WELINE WOMEN</a>
            <span>/</span>
            <a href="?">SHOES</a>
            <span>/</span>
            <span>BOOTS</span>
          </nav>
        </main>
      </div>
    );
  }
}

export default ShopListCol;
