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
      seasonalPoints: {}
    };
  }

  async componentDidMount() {
    const playerData = await requests.getPlayer(this.props.match.params.id);
    let seasonalPoints = {};
    playerData.stats.map(s => {
      s.season = `${s.season.substring(0, 4)}-${s.season.substring(6, 8)}`;
      s.points = s.stat.assists + s.stat.goals;
      seasonalPoints[s.season]
        ? (seasonalPoints[s.season] += s.points)
        : (seasonalPoints[s.season] = s.points);
    });
    this.setState({
      player: playerData.player,
      stats: playerData.stats,
      seasonalPoints: seasonalPoints
    });
  }
  render() {
    const { player, stats, seasonalPoints } = this.state;
    return (
      <div>
        <h1>{player.fullName}</h1>
        <PlayerStatsChart data={seasonalPoints} />
        <PlayerStatsTable
          stats={stats.map(s => {
            s.stat.season = `${s.season.substring(0, 4)}-${s.season.substring(
              6,
              8
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
