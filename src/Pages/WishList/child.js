/** @format */
import React, { Component } from "react";

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.doParentToggleFromChild = this.doParentToggleFromChild.bind(this);
    this.doParentToggleFromChild = this.doParentToggleFromChild.bind(this);

    this.counter = this.props.counter;
  }
  doParentToggleFromChild() {
    this.props.parentToggle(++this.counter);
  }
  render() {
    return (
      <div>
        {this.props.counter}I am a child
        <button onClick={this.doParentToggleFromChild}>Toggle</button>
      </div>
    );
  }
}

export default Child;
