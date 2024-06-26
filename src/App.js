import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NewReleases from "./pages/NewReleases";
import BeatStore from "./pages/BeatStore";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/new-releases" component={NewReleases} />
        <Route path="/beat-store" component={BeatStore} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
};

export default App;
