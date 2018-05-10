import React, { Component } from "react";
import requests from "../../lib/requests";
import PlayerStatsTable from "../../components/PlayerStatsTable";
import PlayerStatsChart from "../../components/PlayerStatsChart";

class PlayerShowPage extends Component {
  constructor() {
    super();
    this.state = {
      player: {},
      stats: [],
      pointsBySeason: {}
    };
  }

  async componentDidMount() {
    const playerData = await requests.getPlayer(this.props.match.params.id);
    const playerStats = await requests.getPlayerStats(
      this.props.match.params.id
    );
    this.setState({
      player: playerData,
      stats: playerStats.stats,
      pointsBySeason: playerStats.pointsBySeason
    });
  }
  render() {
    const { player, stats, pointsBySeason } = this.state;
    return (
      <div>
        <h1>{player.fullName}</h1>
        <PlayerStatsChart data={pointsBySeason} />
        <PlayerStatsTable
          stats={stats.map(s => {
            s.stat.season = `${s.season.substring(0, 4)}-${s.season.substring(
              5,
              7
            )}`;
            s.stat.points = s.stat.assists + s.stat.goals;
            s.stat.team = s.team.name;
            return s.stat;
          })}
        />
      </div>
    );
  }
}

export default PlayerShowPage;
