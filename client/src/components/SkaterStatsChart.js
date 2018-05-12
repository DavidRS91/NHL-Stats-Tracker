import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class SkaterStatsChart extends Component {
  render() {
    const { data } = this.props;
    return (
      <Line
        data={{
          labels: data.map(s => s.season),
          datasets: []
        }}
        options={{
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }}
      />
    );
  }
}

export default SkaterStatsChart;
