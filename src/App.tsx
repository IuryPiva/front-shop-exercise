import React from "react";

import { Route, Switch } from "react-router-dom";

import { Container } from "@material-ui/core";

import { Home } from "pages/Home";
import { Cart } from "pages/Cart";

import { AppBar } from "components/AppBar/AppBar";

import 'App.css';

function App() {
  return (
    <>
      <AppBar />
      <Container maxWidth="sm" className="pt-12">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/cart" component={Cart} exact />
        </Switch>
      </Container>
    </>
  );
}

export default App;
