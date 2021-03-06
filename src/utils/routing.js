import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";
import { Box } from "@mui/system";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import NotFound from "../pages/NotFound/NotFound";

export default function Routing() {
  return (
    <Box container>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/about" component={About} />
        <Route exact path="/home" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Box>
  );
}
