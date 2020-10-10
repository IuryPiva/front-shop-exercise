import React from "react";

import { AppBar as MuiAppBar, Container, Toolbar } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";

import logo from "assets/OFN_logo.svg";

export const AppBar = () => (
  <MuiAppBar position="static">
    <Toolbar className="h-24 bg-gray-100 text-gray-700">
      <Container className="flex px-24" maxWidth="md">
        <Link to="/" className="flex-grow flex leading-4">
          <img src={logo} className="App-logo" alt="logo" />
          <span className="w-32 ml-4 pt-1/2">Open Food Network</span>
        </Link>
        <Link to="/cart" className="pt-1">
          <ShoppingCart />
          <span className="ml-2">My cart</span>
        </Link>
      </Container>
    </Toolbar>
  </MuiAppBar>
);
