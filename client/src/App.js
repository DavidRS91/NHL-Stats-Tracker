import React, { Component } from "react";
import "./App.css";
import "antd/dist/antd.css";
import PlayerSummaries from "./components/PlayerSummaries";
import requests from "./lib/requests";

class App extends Component {
  constructor() {
    super();
    this.state = { message: "No Message" };
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <PlayerSummaries />
      </div>
    );
  }
}

export default App;
