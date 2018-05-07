import React, { Component } from "react";
import { List } from "antd";

class PlayerSummary extends Component {
  render() {
    const {
      fullName,
      primaryNumber,
      primaryPosition,
      nationality,
      shootsCatches,
      currentTeam
    } = this.props.player;
    return (
      <List.Item>
        <List.Item.Meta
          title={`#${primaryNumber || "NA"} ${fullName} • ${
            primaryPosition.code
          } • ${currentTeam.name}`}
          description={`Nationality: ${nationality} • Shoots: ${shootsCatches}`}
        />
      </List.Item>
    );
  }
}

export default PlayerSummary;

// active: true
// alternateCaptain: true
// birthCity: "Calgary"
// birthCountry: "CAN"
// birthDate: "1991-11-14"
// birthStateProvince: "AB"
// captain: false
// currentAge: 26
// currentTeam: id: 1
// link: "/api/v1/teams/1"
// name: "New Jersey Devils"
// __proto__: Object
// firstName: "Taylor"
// fullName: "Taylor Hall"
// height: "6' 1""
// id: 8475791
// lastName: "Hall"
// link: "/api/v1/people/8475791"
// nationality: "CAN"
// primaryNumber: "9"
// primaryPosition: abbreviation: "LW"
// code: "L"
// name: "Left Wing"
// __proto__: Object
// rookie: false
// rosterStatus: "Y"
// shootsCatches: "L"
// weight: 205
