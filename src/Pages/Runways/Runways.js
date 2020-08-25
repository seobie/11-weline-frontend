import React, { Component } from "react";
import Card from "./components/Card";
import "./Runways.scss";

export default class Runways extends Component {
  state = {
    runways: [
      "https://twicpics.celine.com/products/dw115a002c/images/collections_recast/summer2021_men_look_01_01.jpg?sw=1333&sh=1998&sm=fit&strip=false",
      "https://twicpics.celine.com/products/dw84104065/images/collections_recast/summer2021_men_look_01_02.jpg?sw=1333&sh=1998&sm=fit&strip=false",
      "https://twicpics.celine.com/products/dwd7427098/images/collections_recast/summer2021_men_look_01_03.jpg?sw=1333&sh=1998&sm=fit&strip=false",
      "https://twicpics.celine.com/products/dw55fe313a/images/collections_recast/summer2021_men_look_02_01.jpg?sw=1333&sh=1998&sm=fit&strip=false",
      "https://twicpics.celine.com/products/dw84a66a3d/images/collections_recast/summer2021_men_look_02_02.jpg?sw=1333&sh=1998&sm=fit&strip=false",
    ],
  };

  componentDidMount() {
    fetch("api주소")
      .then((res) => res.json())
      .then((res) => this.setState({ runways: res }));
  }

  render() {
    return (
      <div className="Runways">
        <p>01 of 200</p>
        <ul className="runwayslist">
          {this.state.runways.map((el, idx) => {
            return <Card imgUrl={el} imgOrder={idx + 1} />;
          })}
        </ul>
      </div>
    );
  }
}
