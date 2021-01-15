import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Asteroids from "./components/asteroids";
import Home from "./components/home";
import "./w3.css"

function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/asteroid" component={Asteroids} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );

}

export default App;
