import { Flex } from "@chakra-ui/core";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import BouncyMenu from "./containers/BouncyMenu";
import ScrollDemo from "./containers/ScrollDemo";
import Toggle from "./containers/Toggle";

function App() {
  return (
    <Router>
      <Flex minHeight="100vh" flexDirection="column">
        <Switch>
          <Route path="/scroll">
            <ScrollDemo />
          </Route>
          <Route path="/menu">
            <BouncyMenu />
          </Route>
          <Route path="/">
            <Toggle />
          </Route>
        </Switch>
      </Flex>
    </Router>
  );
}

export default App;
