import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { skaterGraphData } from "../lib/helpers";

class SkaterStatsChart extends Component {
  render() {
    const { data } = this.props;
    const graphData = skaterGraphData(data);
    return <Line data={graphData} />;
  }
}

export default SkaterStatsChart;
