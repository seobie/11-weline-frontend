import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class ShopListRowItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <li
        className="item"
        onClick={() =>
          this.props.history.push(
            `${this.props.match.params.mainCategory}/${this.props.match.params.category}/${this.props.match.params.id}`
          )
        }
      >
        <img src={item.img} />
        <div className="itemText">
          <p>{item.name}</p>
          <p>{item.season}</p>
        </div>
      </li>
    );
  }
}

export default withRouter(ShopListRowItem);
