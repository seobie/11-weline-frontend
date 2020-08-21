import React from "react";
import GoodsList from "../../Components/GoodsList";
import "./ShopListCol.scss";

class ShopListCol extends React.Component {
  constructor() {
    super();
    this.state = {
      mouseover: "",
      Goods: [],
    };
  }

  componentDidMount = () => {
    fetch("Data/MockData/Goods.json")
      .then((response) => response.json())
      .then(({ Goods }) => this.setState({ Goods }));
  };

  HoverHandler = (name) => {
    this.setState({
      mouseover: name,
    });
  };
  outHandler = () => {
    this.setState({
      mouseover: "",
    });
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
          <GoodsList
            Goods={Goods}
            mouseover={mouseover}
            HoverHandler={(name) => this.HoverHandler(name)}
            outHandler={(e) => this.outHandler(e)}
          />
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
