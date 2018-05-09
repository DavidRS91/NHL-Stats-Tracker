import React, { Component } from "react";
import requests from "../../lib/requests";
import PlayerStatsTable from "../../components/PlayerStatsTable";

class PlayerShowPage extends Component {
  constructor() {
    super();
    this.state = {
      player: {},
      stats: []
    };
  }

  async componentDidMount() {
    const playerData = await requests.getPlayer(this.props.match.params.id);
    this.setState({
      player: playerData.player,
      stats: playerData.stats
    });
  }
  render() {
    const { player, stats } = this.state;
    return (
      <div>
        <h1>{player.fullName}</h1>
        <PlayerStatsTable stats={stats.map(s => s.stat)} />
      </div>
    );
  }
}

export default PlayerShowPage;
