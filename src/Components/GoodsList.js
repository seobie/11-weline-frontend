import React from "react";
import Goods from "./Goods";
import "./GoodsList.scss";

class GoodsList extends React.Component {
  render() {
    return (
      <article className="GoodsList">
        <ul>
          {this.props.Goods.map((goods) => (
            <li className={goods.category}>
              {goods.List.map((list, idx) => (
                <Goods
                  href={list.href}
                  src={list.src}
                  src2={list.src2}
                  name={list.name}
                  checkNew={list.checkNew}
                  mouseover={this.props.mouseover}
                  HoverHandler={(name) => this.props.HoverHandler(name)}
                  outHandler={(e) => this.props.HoverHandler(e)}
                  key={idx}
                />
              ))}
            </li>
          ))}
        </ul>
      </article>
    );
  }
}

export default GoodsList;
