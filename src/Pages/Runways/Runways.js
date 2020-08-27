import React, { Component } from "react";
import Card from "./components/Card";
import "./Runways.scss";

export default class Runways extends Component {
  state = {
    runways: [
      // "https://twicpics.celine.com/products/dw115a002c/images/collections_recast/summer2021_men_look_01_01.jpg?sw=1333&sh=1998&sm=fit&strip=false",
      // "https://twicpics.celine.com/products/dw84104065/images/collections_recast/summer2021_men_look_01_02.jpg?sw=1333&sh=1998&sm=fit&strip=false",
      // "https://twicpics.celine.com/products/dwd7427098/images/collections_recast/summer2021_men_look_01_03.jpg?sw=1333&sh=1998&sm=fit&strip=false",
      // "https://twicpics.celine.com/products/dw55fe313a/images/collections_recast/summer2021_men_look_02_01.jpg?sw=1333&sh=1998&sm=fit&strip=false",
      // "https://twicpics.celine.com/products/dw84a66a3d/images/collections_recast/summer2021_men_look_02_02.jpg?sw=1333&sh=1998&sm=fit&strip=false",
      // "https://twicpics.celine.com/products/dw7165591f/images/collections_recast/summer2021_men_look_02_03.jpg?sw=1333&sh=1998&sm=fit&strip=false",
      // "https://twicpics.celine.com/products/dw131e9f73/images/collections_recast/summer2021_men_look_02_04.jpg?sw=1333&sh=1998&sm=fit&strip=false",
      // "https://twicpics.celine.com/products/dw0d0634c8/images/collections_recast/summer2021_men_look_03_01.jpg?sw=1333&sh=1998&sm=fit&strip=false",
      // "https://twicpics.celine.com/products/dw9dfb3a88/images/collections_recast/summer2021_men_look_03_02.jpg?sw=1333&sh=1998&sm=fit&strip=false",
      // "https://twicpics.celine.com/products/dw37493735/images/collections_recast/summer2021_men_look_03_03.jpg?sw=1333&sh=1998&sm=fit&strip=false",
    ],
    numberOfItems: 1,
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
      numberOfItems: parseInt(e.target.scrollLeft / 320 + 1),
    });
    // console.log(parseInt(e.target.scrollLeft / 330 + 1));
  };

  render() {
    return (
      <div className="Runways">
        <div className="container">
          <p className="numberOfItems">
            <span>{this.state.numberOfItems}</span>
            &nbsp;OF&nbsp;{this.state.runways.length}
          </p>
          <ul className="runwayslist" onScroll={this.handleScroll}>
            {this.state.runways.map((el, idx) => {
              return <Card imgUrl={el} imgOrder={idx + 1} />;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

//(e.target.scrollTop/200) +1
