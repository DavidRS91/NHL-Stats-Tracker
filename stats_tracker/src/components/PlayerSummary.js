import React, { Component } from "react";
import { Card, Col, Row } from "antd";

class PlayerSummary extends Component {
  render() {
    const { jerseyNumber, person, position } = this.props.player;
    return (
      <Card
        title={`#${jerseyNumber ? jerseyNumber : ""} ${person.fullName} • ${
          position.name
        }`}
        style={{ width: "29.3%", margin: "2%" }}
      />
    );
  }
}

export default PlayerSummary;
