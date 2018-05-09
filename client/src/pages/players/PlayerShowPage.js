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
    let pointsBySeason = {};
    playerData.stats.map(s => {
      s.season = `${s.season.substring(0, 4)}-${s.season.substring(6, 8)}`;
      s.points = s.stat.assists + s.stat.goals;
      pointsBySeason[s.season]
        ? (pointsBySeason[s.season] += s.points)
        : (pointsBySeason[s.season] = s.points);
    });
    this.setState({
      player: playerData.player,
      stats: playerData.stats,
      pointsBySeason: pointsBySeason
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
