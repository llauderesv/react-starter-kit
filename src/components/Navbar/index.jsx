import React, { Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <Fragment>
      <Navbar bg="dark" variant="dark" sticky="top">
        <NavLink exact className="navbar-brand" to="/">
          React
        </NavLink>
        <Nav className="mr-auto">
          <NavLink exact className="nav-link" role="button" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" role="button" to="/examples/counter">
            Examples
          </NavLink>
          <NavLink className="nav-link" role="button" to="/about">
            About
          </NavLink>
        </Nav>
      </Navbar>
    </Fragment>
  );
};

export default NavbarComponent;
