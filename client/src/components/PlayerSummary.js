import React, { Component } from "react";
import { List } from "antd";
import { Link } from "react-router-dom";

class PlayerSummary extends Component {
  render() {
    const {
      fullName,
      primaryNumber,
      primaryPosition,
      nationality,
      shootsCatches,
      currentTeam,
      id
    } = this.props.player;
    return (
      <List.Item>
        <List.Item.Meta
          title={
            <Link to={`/players/${id}`}>
              #{primaryNumber || "NA"} {fullName} • {primaryPosition.code} •{" "}
              {currentTeam.name}
            </Link>
          }
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
// currentTeam:
//// id: 1
//// link: "/api/v1/teams/1"
//// name: "New Jersey Devils"
// firstName: "Taylor"
// fullName: "Taylor Hall"
// height: "6' 1""
// id: 8475791
// lastName: "Hall"
// link: "/api/v1/people/8475791"
// nationality: "CAN"
// primaryNumber: "9"
// primaryPosition:
//// abbreviation: "LW"
//// code: "L"
//// name: "Left Wing"
// rookie: false
// rosterStatus: "Y"
// shootsCatches: "L"
// weight: 205
