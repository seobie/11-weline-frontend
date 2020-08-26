import React, { Component } from "react";
import "./Video.scss";

class Video extends Component {
  render() {
    const { src, description } = this.props.videos.Main;
    return (
      <div className="Video">
        <div className="wrapper">
          <iframe title="mainVideo" src={src} allowFullScreen={true} />
          <div className="description">
            <div className="descriptionHeader"></div>
            <div className="descriptionMain">{description}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Video;
