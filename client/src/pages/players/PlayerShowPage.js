import React, { Component } from "react";
import requests from "../../lib/requests";

class PlayerShowPage extends Component {
  constructor() {
    super();
    this.state = {
      player: {},
      stats: {}
    };
  }

  async componentDidMount() {
    const playerData = await requests.getPlayer(this.props.match.params.id);
    this.setState({
      player: playerData.player,
      stats: playerData.stats
    });
  }
  render() {
    return <p>TEST</p>;
  }
}

export default PlayerShowPage;
