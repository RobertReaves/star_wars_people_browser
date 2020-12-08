import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";

export default function App() {
  return (
    <Router>
        <Route path="/"/>
        <Switch>
          <Route path="/details/:id" render={ props => <Details { ...props } /> } />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}