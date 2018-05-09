import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import PlayerSummaries from "./components/PlayerSummaries";
import PlayerShowPage from "./pages/players/PlayerShowPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={PlayerSummaries} />
            <Route exact path="/players/:id" component={PlayerShowPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
