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
                  src={this.props.mouseover ? list.src : list.src2}
                  name={list.name}
                  new={list.new}
                  mouseover={this.props.mouseover}
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
