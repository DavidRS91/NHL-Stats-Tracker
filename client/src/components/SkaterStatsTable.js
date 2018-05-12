import React, { Component } from "react";
import { Table } from "antd";

const skaterColumns = [
  {
    title: "Season",
    dataIndex: "season",
    key: "season",
    width: "10%",
    align: "center"
  },
  {
    title: "Team",
    dataIndex: "team",
    key: "team",
    width: "20%",
    align: "center"
  },
  {
    title: "Games Played",
    dataIndex: "games",
    key: "games",
    width: "20%",
    align: "center"
  },
  {
    title: "Goals",
    dataIndex: "goals",
    key: "goals",
    width: "10%",
    align: "center"
  },
  {
    title: "Assists",
    dataIndex: "assists",
    key: "assists",
    width: "10%",
    align: "center"
  },
  {
    title: "Points",
    dataIndex: "points",
    key: "points",
    width: "15%",
    align: "center"
  },
  {
    title: "Time On Ice",
    dataIndex: "timeOnIce",
    key: "timeOnIce",
    width: "15%",
    align: "center"
  }
];

class SkaterStatsTable extends Component {
  constructor(props) {
    super(props);
    this.sumIntegers = this.sumIntegers.bind(this);
    this.sumTimeOnIce = this.sumTimeOnIce.bind(this);
  }

  sumIntegers(stat) {
    return this.props.stats.map(s => s[stat]).reduce((a, b) => a + b, 0);
  }

  sumTimeOnIce(stat) {
    let minutes = this.props.stats
      .map(s => parseInt(s[stat].split(":")[0], 10))
      .reduce((a, b) => a + b, 0);
    let seconds = this.props.stats
      .map(s => parseInt(s[stat].split(":")[1], 10))
      .reduce((a, b) => a + b, 0);
    minutes += Math.floor(seconds / 60);
    return `${minutes}:${seconds % 60}`;
  }

  render() {
    const { stats } = this.props;
    return (
      <div>
        <Table
          pagination={false}
          columns={skaterColumns}
          dataSource={stats.map(s => {
            (s.team = s.team.name), (s.goals = s.stat.goals);
            s.points = s.stat.points;
            s.assists = s.stat.assists;
            s.timeOnIce = s.stat.timeOnIce;
            s.games = s.stat.games;
            return s;
          })}
        />
        <Table
          id={"StatTotals"}
          columns={skaterColumns}
          pagination={false}
          showHeader={false}
          dataSource={[
            {
              assists: this.sumIntegers("assists"),
              games: this.sumIntegers("games"),
              goals: this.sumIntegers("goals"),
              points: this.sumIntegers("points"),
              season: "Total: ",
              timeOnIce: this.sumTimeOnIce("timeOnIce")
            }
          ]}
        />
      </div>
    );
  }
}

export default SkaterStatsTable;
