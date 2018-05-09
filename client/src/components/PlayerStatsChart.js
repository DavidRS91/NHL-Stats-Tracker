import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class PlayerStatsChart extends Component {
  render() {
    const { data } = this.props;
    return (
      <Bar
        data={{
          labels: Object.keys(data),
          datasets: [
            {
              data: Object.values(data),
              label: "Points"
            }
          ]
        }}
      />
    );
  }
}

export default PlayerStatsChart;
