import React, { Component } from "react";
import { Card, Col, Row } from "antd";

class PlayerSummary extends Component {
  render() {
    const { player } = this.props;
    return (
      <Card
        title={`#${player.jerseyNumber ? player.jerseyNumber : ""} ${
          player.person.fullName
        } • ${player.position.name}`}
        style={{ width: "29.3%", margin: "2%" }}
      />
    );
  }
}

export default PlayerSummary;
