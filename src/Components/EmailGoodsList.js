import React from "react";
import EmailGoods from "./EmailGoods";

class EmailGoodsList extends React.Component {
  render() {
    return (
      <article className="EmailGoodsList">
        {this.props.Goods.map((goods) => (
          <div>
            {goods.List.map((list) => (
              <EmailGoods
                href={list.href}
                src={list.src}
                name={list.name}
                colour={list.colour}
                price={list.price}
              />
            ))}
          </div>
        ))}
      </article>
    );
  }
}

export default EmailGoodsList;
