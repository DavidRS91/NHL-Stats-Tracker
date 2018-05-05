import React, { Component } from "react";
import requests from "../lib/requests";
import PlayerSummary from "./PlayerSummary";

class PlayerSummaries extends Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  async componentDidMount() {
    const players = await requests.getAllPlayers();
    console.log(players[0]);
    this.setState({
      players: players
    });
  }

  render() {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {this.state.players.map(p => <PlayerSummary player={p} />)}
      </div>
    );
  }
}

export default PlayerSummaries;
