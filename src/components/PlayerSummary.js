import React, { Component } from "react";

class PlayerSummary extends Component {
  render() {
    const { player } = this.props;
    return (
      <div style={{ backgroundColor: "red", margin: "5px", color: "white" }}>
        <h3>{player.person.fullName}</h3>
      </div>
    );
  }
}

export default PlayerSummary;
