import React, { Component } from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Games Played",
    dataIndex: "games",
    key: "games",
    width: "25%",
    align: "center"
  },
  {
    title: "Goals",
    dataIndex: "goals",
    key: "goals",
    width: "25%",
    align: "center"
  },
  {
    title: "Assists",
    dataIndex: "assists",
    key: "assists",
    width: "25%",
    align: "center"
  },
  {
    title: "Time On Ice",
    dataIndex: "timeOnIce",
    key: "timeOnIce",
    width: "25%",
    align: "center"
  }
];

class PlayerStatsTable extends Component {
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
        <Table pagination={false} columns={columns} dataSource={stats} />
        <Table
          id={"StatTotals"}
          columns={columns}
          pagination={false}
          showHeader={false}
          dataSource={[
            {
              games: this.sumIntegers("games"),
              assists: this.sumIntegers("assists"),
              timeOnIce: this.sumTimeOnIce("timeOnIce"),
              goals: this.sumIntegers("goals")
            }
          ]}
        />
      </div>
    );
  }
}

export default PlayerStatsTable;
