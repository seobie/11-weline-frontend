import React, { Component } from "react";
import Card from "./components/Card";
import Nav from "../Nav/Nav";
import "./Runways.scss";

export default class Runways extends Component {
  state = {
    runways: [],
    numberOfItems: 1,
    hover: "",
  };

  componentDidMount = () => {
    fetch("http://10.58.0.44:8000/product/runway")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          runways: res.list,
        });
      });
  };

  handleScroll = (e) => {
    this.setState({
      numberOfItems: parseInt(e.target.scrollLeft / 330 + 1),
    });
  };

  hoverHandler = (e) => {
    this.setState({ hover: e.toUpperCase() });
  };

  render() {
    return (
      <div className="Runways">
        <div className="runwaysContainer">
          <p className="numberOfItems">
            <span>{this.state.numberOfItems}</span>
            &nbsp;OF&nbsp;{this.state.runways.length}
          </p>
          <ul className="runwaysList" onScroll={this.handleScroll}>
            {this.state.runways.map((el, idx) => {
              return <Card imgUrl={el} imgOrder={idx + 1} />;
            })}
          </ul>
          <Nav hover={this.state.hover} hoverHandler={this.hoverHandler} />
        </div>
      </div>
    );
  }
}
