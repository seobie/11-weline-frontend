import React, { Component } from "react";
import Video from "../../Components/Video/Video";
import Nav from "../Nav/Nav";
import "./Main.scss";

const videos = {
  Main: {
    src:
      "https://www.yuca.tv/custom/celine/player.php?uid=ebdbb4eb-4586-5873-abb3-aa161bf8b0b1&lang=en&type=standard&loop=true&mute=true&autorun=true&_=0.5787494838904113",
    description: [
      <span>
        CELINE HOMME
        <br />
        THE DANCING KID
        <br />
        CIRCUIT DU CASTELLET, FRANCE
        <br />
        JULY 13TH 2020
        <br />
        <br />
        MUSIC ORIGINAL SOUNDTRACK FOR CELINE
        <br />
        "THEY CALL ME TIAGO (THE DANCING KID CELINE EDIT)"
        <br />
        PERFORMED BY TIAGZ
        <br />
        COURTESY OF EPIC RECORDS BY ARRANGEMENT WITH SONY MUSIC ENTERTAINMENT
        <br />
        <br />
        STYLING AND DIRECTING "THE DANCING KID"
        <br />
        HEDI SLIMANE
        <br />
        <br />
        MAKE-UP ARTIST
        <br />
        CHRISTELLE COCQUET
        <br />
        <br />
        HAIRSTYLISTS
        <br />
        ESTHER LANGHAM AND ALEX BROWNSELL <br />
        <br />
      </span>,
    ],
  },
};
export default class Main extends Component {
  render() {
    return (
      <main className="Main">
        <Video videos={videos} />
        <Nav />
      </main>
    );
  }
}
