import React from "react";
import ShopTab from "../../Components/ShopTab";
import "./Shop.scss";
import "../WishList/Payment.scss";

class Shop extends React.Component {
  constructor() {
    super();
    this.state = {
      accordion: [],
    };
  }

  componentDidMount = () => {
    fetch("Data/MockData/accordian.json")
      .then((response) => response.json())
      .then(({ accordion }) => this.setState({ accordion }));
  };

  render() {
    return (
      <div className="Shop">
        <aside />
        <main>
          <ul>
            {this.state.accordion.map((tab, idx) => (
              <ShopTab
                tabName={tab.tabName}
                key={idx}
                src={tab.src}
                src2={tab.src2}
                href={tab.href}
                text={tab.text}
                hover={this.props.hover}
                link={tab.link}
                hoverHandler={this.props.hoverHandler}
              />
            ))}
          </ul>
        </main>
      </div>
    );
  }
}

export default Shop;
