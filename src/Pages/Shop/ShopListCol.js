import React from "react";
import GoodsList from "../../Components/GoodsList";
import "./ShopListCol.scss";
import "../../Styles/common.scss";

class ShopListCol extends React.Component {
  constructor() {
    super();
    this.state = {
      mouseover: true,
      Goods: [],
    };
  }

  componentDidMount = () => {
    fetch("Data/MockData/Goods.json")
      .then((response) => response.json())
      .then((Goods) => this.setState({ Goods }));
  };

  render() {
    let { Goods, mouseover } = this.state;
    return (
      <div className="ShopListCol">
        <aside></aside>
        <main>
          <header>
            <span>BOOTS</span>
          </header>
          <GoodsList Goods={Goods} mouseover={mouseover} />
          <nav>
            <a href="https://www.celine.com/en-int/home">WELINE</a>
            <span>/</span>
            <a href="https://www.celine.com/en-int/celine-women/">
              WELINE WOMEN
            </a>
            <span>/</span>
            <a href="https://www.celine.com/en-int/celine-women/shoes/">
              SHOES
            </a>
            <span>/</span>
            <span>BOOTS</span>
          </nav>
        </main>
      </div>
    );
  }
}

export default ShopListCol;
