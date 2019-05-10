import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NavTabs from "./components/NavTabs"
// import "./components/style.css";

function App() {
  return (   
    <Router>
      <div className="wrapping">
    <NavTabs />
        <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route component={NoMatch} /> */}
        </Switch>
        </div>
    </Router>
  );
}

export default App;
