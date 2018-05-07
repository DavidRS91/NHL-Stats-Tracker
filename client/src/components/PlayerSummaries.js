import React, { Component } from "react";
import { List } from "antd";
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
    const response = await requests.getPlayers();
    console.log(response.players[15]);
    this.setState({
      players: response.players
    });
  }

  render() {
    return (
      <List>
        {this.state.players.map(p => <PlayerSummary key={p.id} player={p} />)}
      </List>
    );
  }
}

export default PlayerSummaries;
