/** @format */
import React, { Component } from "react";

class Parent extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    this.doParentToggle = this.doParentToggle.bind(this);
  }
  doParentToggle(_counterFromChild) {
    this.setState({
      counter: _counterFromChild,
    });
  }
  render() {
    return (
      <div>
        <Child
          counter={this.state.counter}
          parentToggle={this.doParentToggle}
        />
      </div>
    );
  }
}

export default Parent;
