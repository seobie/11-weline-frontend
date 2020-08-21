import React from "react";
import GoodsList from "../../Components/GoodsList";
import "./ShopListCol.scss";

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
      .then((response) => {
        this.setState({ Goods: response.Goods });
      });
  };

  //HoverImgChanger = () => {
  //  this.setState({
  //    mouseover: !this.state.mouseover,
  //  });
  //};

  render() {
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
