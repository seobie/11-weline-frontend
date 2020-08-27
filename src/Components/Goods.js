import React from "react";
import { withRouter } from "react-router-dom";
import "./Goods.scss";

class Goods extends React.Component {
  render() {
    const {
      url,
      src,
      src2,
      name,
      mouseOver,
      hoverHandler,
      is_new,
    } = this.props;
    return (
      <div
        className="Goods"
        onClick={() =>
          this.props.history.push(
            `/${this.props.title}/${this.props.mainCategoey}/${this.props.categoey}/${this.props.id}`
          )
        }
      >
        <img
          alt="상품 사진"
          src={mouseOver === url ? src : src2}
          onMouseEnter={() => hoverHandler(url)}
          onMouseOut={() => hoverHandler(false)}
        />
        <h2>{name}</h2>
        <div className="new">{is_new && "new"}</div>
      </div>
    );
  }
}

export default withRouter(Goods);
