import React, { Component } from "react";
import { Table } from "antd";
import { sumIntegers, sumTimeOnIce } from "../lib/helpers";

class SkaterStatsTable extends Component {
  render() {
    const { stats } = this.props;
    return (
      <div>
        <Table
          pagination={false}
          columns={skaterColumns}
          dataSource={stats.map(s => {
            s.team = s.team.name;
            s.goals = s.stat.goals;
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
              assists: sumIntegers("assists", stats),
              games: sumIntegers("games", stats),
              goals: sumIntegers("goals", stats),
              points: sumIntegers("points", stats),
              season: "Total: ",
              timeOnIce: sumTimeOnIce("timeOnIce", stats)
            }
          ]}
        />
      </div>
    );
  }
}

export default SkaterStatsTable;

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
