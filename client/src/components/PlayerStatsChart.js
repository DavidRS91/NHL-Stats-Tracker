import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class PlayerStatsChart extends Component {
  render() {
    const { data } = this.props;
    return (
      <Bar
        // data={{
        //   labels: data.map(s => s.season),
        //   datasets: [
        //     {
        //       data: data.map(s => s.points),
        //       label: "Points",
        //       backgroundColor: "#aaaaaa",
        //       borderColor: "#fafafa"
        //     }
        //   ]
        // }}
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
