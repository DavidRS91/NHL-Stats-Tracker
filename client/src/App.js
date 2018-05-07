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

  async componentDidMount() {
    const response = await requests.rootRequest();
    console.log("mounting");
    this.setState({
      message: response.message
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        {/* <PlayerSummaries /> */}
      </div>
    );
  }
}

export default App;
