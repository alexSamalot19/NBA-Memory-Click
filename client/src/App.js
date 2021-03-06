import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

class App extends Component {
  state = {
    conference: "Eastern",
    EasternTiles: [
      "/img/IMG1.png",
      "/img/IMG2.png",
      "/img/IMG3.png",
      "/img/IMG4.png",
      "/img/IMG5.png",
      "/img/IMG6.png",
      "/img/IMG7.png",
      "/img/IMG8.png",
      "/img/IMG9.png",
      "/img/IMG10.png"
    ],
    WesternTiles: [
      "/img/IMG11.png",
      "/img/IMG12.png",
      "/img/IMG13.png",
      "/img/IMG14.png",
      "/img/IMG15.png",
      "/img/IMG16.png",
      "/img/IMG17.png",
      "/img/IMG18.png",
      "/img/IMG19.png",
      "/img/IMG20.png"
    ],
    score: 0,
    topScore: 0
  };

  clickedTiles = [];

  handleTileClick = evt => {
    //record click
    console.log(evt);

    const clickedTile = evt.target.src;

    if (this.clickedTiles.includes(clickedTile)) {
      this.clickedTiles.length = 0;
      this.setState({ score: 0 });
      return;
    }

    const newScore = this.state.score + 1;
    const topScore =
      newScore > this.state.topScore ? newScore : this.state.topScore;

    this.clickedTiles.push(clickedTile);
    if (this.state.conference === "Eastern") {
      const shuffled = this.state.EasternTiles.sort(() => 0.5 - Math.random());
      this.setState({
        EasternTiles: shuffled,
        score: newScore,
        topScore: topScore
      });
    } else {
      const shuffled = this.state.WesternTiles.sort(() => 0.5 - Math.random());
      this.setState({
        WesternTiles: shuffled,
        score: newScore,
        topScore: topScore
      });
    }
  };

  handleEasternClick = event => {
    this.setState({ conference: "Eastern" });
  };

  handleWesternClick = event => {
    this.setState({ conference: "Western" });
  };

  render() {
    return (
      <div className="App">
        <Navbar score={this.state.score} topScore={this.state.topScore} />
        <Jumbotron
          handleEasternClick={this.handleEasternClick}
          handleWesternClick={this.handleWesternClick}
          conference={this.state.conference}
          EasternTiles={this.state.EasternTiles}
          WesternTiles={this.state.WesternTiles}
          handleTileClick={this.handleTileClick}
        />
      </div>
    );
  }
}

export default App;
