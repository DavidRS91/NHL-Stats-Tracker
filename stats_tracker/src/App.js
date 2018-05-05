import React, { Component } from "react";
import "./App.css";
import "antd/dist/antd.css";
import PlayerSummaries from "./components/PlayerSummaries";

class App extends Component {
  render() {
    return (
      <div>
        <PlayerSummaries />
      </div>
    );
  }
}

export default App;
