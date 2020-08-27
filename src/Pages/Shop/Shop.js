import React from "react";
import ShopTab from "../../Components/ShopTab";
import "./Shop.scss";

class Shop extends React.Component {
  constructor() {
    super();
    this.state = {
      hover: "NEW WINTER PART 1",
      accordion: [],
    };
  }

  componentDidMount = () => {
    fetch("Data/MockData/accordian.json")
      .then((response) => response.json())
      .then(({ accordion }) => this.setState({ accordion }));
  };

  enterHandler = (tabName) => {
    this.setState({ hover: tabName });
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
                hover={this.state.hover}
                link={tab.link}
                enterHandler={(tabName) => this.enterHandler(tabName)}
              />
            ))}
          </ul>
        </main>
      </div>
    );
  }
}

export default Shop;
