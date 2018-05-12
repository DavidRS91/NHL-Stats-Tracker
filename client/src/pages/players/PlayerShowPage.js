import React, { Component } from "react";
import requests from "../../lib/requests";
import SkaterStatsTable from "../../components/SkaterStatsTable";
import SkaterStatsChart from "../../components/SkaterStatsChart";

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
    const { stats } = playerData;

    this.setState({
      player: playerData,
      stats: stats
    });
  }
  render() {
    const { player, stats } = this.state;
    return (
      <div>
        <h1>{player.fullName}</h1>
        {player.primaryPosition && player.primaryPosition.code === "G" ? (
          <div>Goalie Placeholder</div>
        ) : (
          <div>
            <SkaterStatsChart data={stats} />
            <SkaterStatsTable stats={stats} />
          </div>
        )}
      </div>
    );
  }
}

export default PlayerShowPage;
