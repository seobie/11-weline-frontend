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
    fetch("Data/MockData/accordion.json")
      .then((response) => response.json())
      .then(({ accordion }) => this.setState({ accordion }));
  };

  EnterHandler = (TabName) => {
    this.setState({ hover: TabName });
  };

  render() {
    return (
      <div className="Shop">
        <aside></aside>
        <main>
          <ul>
            {this.state.accordion.map((tab, idx) => (
              <ShopTab
                TabName={tab.TabName}
                key={idx}
                src={tab.src}
                src2={tab.src2}
                href={tab.href}
                text={tab.text}
                hover={this.state.hover}
                EnterHandler={(TabName) => this.EnterHandler(TabName)}
              />
            ))}
          </ul>
        </main>
      </div>
    );
  }
}

export default Shop;
