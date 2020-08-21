import React from "react";
import ShopTab from "../../Components/ShopTab";
import "./Shop.scss";

class Shop extends React.Component {
  constructor() {
    super();
    this.state = {
      Accordion: [],
    };
  }

  componentDidMount = () => {
    fetch("Data/MockData/Accordion.json")
      .then((response) => response.json())
      .then(({ Accordion }) => this.setState({ Accordion }));
  };

  render() {
    return (
      <div className="Shop">
        <aside></aside>
        <main>
          <ul>
            {this.state.Accordion.map((tab, idx) => (
              <ShopTab
                TabName={tab.TabName}
                key={idx}
                src={tab.src}
                href={tab.href}
                text={tab.text}
              />
            ))}
          </ul>
        </main>
      </div>
    );
  }
}

export default Shop;
