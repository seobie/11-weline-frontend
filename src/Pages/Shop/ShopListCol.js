import React from "react";
import { withRouter } from "react-router-dom";
import GoodsList from "../../Components/GoodsList";
import config from "../../config";
import "./ShopListCol.scss";

class ShopListCol extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      mouseOver: "",
      item_list: [{ category: "", products: [] }],
    };
  }

  componentDidMount = () => {
    fetch(
      `${
        config.API
      }/product/categories?q=${this.props.match.params.category.toUpperCase()}`
    )
      .then((response) => response.json())
      .then((response) => this.setState(response));
  };

  componentDidUpdate(prevprops) {
    if (prevprops.match.params.category !== this.props.match.params.category) {
      fetch(
        `${
          config.API
        }/product/categories?q=${this.props.match.params.category.toUpperCase()}`
      )
        .then((response) => response.json())
        .then((response) => this.setState(response));
    }
  }

  hoverHandler = (url) => {
    if (url) {
      this.setState({
        mouseOver: url,
      });
    } else {
      this.setState({
        mouseOver: "",
      });
    }
  };

  render() {
    let { item_list, mouseOver } = this.state;
    console.log(this.state);
    return (
      <div className="ShopListCol">
        <aside></aside>
        <main>
          <header>
            <span>{item_list[0].category}</span>
          </header>
          <GoodsList
            products={item_list[0].products}
            mouseOver={mouseOver}
            hoverHandler={(url) => this.hoverHandler(url)}
          />
          <nav>
            <a href="https://www.celine.com/en-int/home">
              {this.state.data[0]}
            </a>
            <span>/</span>
            <a href="https://www.celine.com/en-int/celine-women/">
              {this.state.data[1]}
            </a>
            <span>/</span>
            <a href="https://www.celine.com/en-int/celine-women/shoes/">
              {this.state.data[2]}
            </a>
            <span>/</span>
            <span>{this.state.item_list[0].category}</span>
          </nav>
        </main>
      </div>
    );
  }
}

export default withRouter(ShopListCol);
