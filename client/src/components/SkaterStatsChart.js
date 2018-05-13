import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import { skaterGraphData } from "../lib/helpers";

class SkaterStatsChart extends Component {
  render() {
    const { data } = this.props;
    const graphData = skaterGraphData(data);
    return <Bar data={graphData} />;
  }
}

export default SkaterStatsChart;
