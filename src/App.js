import React from "react";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import loginPage from "./components/login/loginPage";
import pageNotFound from "./components/pageNotFound";
import instructionsPage from "./components/welcome/instructionsPage";
import sectionsPage from "./components/welcome/sectionsPage";
import testStart from "./components/exam/testStart";
function App() {
  return (
    <div className="container-fluid">
      <Switch>
        <Route exact path="/" component={loginPage} />
        <Route path="/instructions" component={instructionsPage} />
        <Route path="/sections" component={sectionsPage} />
        <Route path="/testStart" component={testStart} />
        <Route component={pageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
