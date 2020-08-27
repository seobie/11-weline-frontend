import React, { Component } from "react";
import Shop from "../Shop/Shop";
import Nav from "../Nav/Nav";

class Title extends Component {
  constructor() {
    super();
    this.state = { hover: "NEW WINTER PART 1" };
  }

  hoverHandler = (e) => {
    this.setState({ hover: e.toUpperCase() });
  };
  render() {
    console.log(this.state.hover);
    return (
      <main className="Title">
        <Shop hover={this.state.hover} hoverHandler={this.hoverHandler} />
        <Nav hover={this.state.hover} hoverHandler={this.hoverHandler} />
      </main>
    );
  }
}

export default Title;
