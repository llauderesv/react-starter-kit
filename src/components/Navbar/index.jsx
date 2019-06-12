import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import sykesLogo from '../../assets/images/sykesLogo.png';

const NavbarComponent = () => {
  return (
    <Navbar bg="light" variant="light" sticky="top">
      <NavLink exact className="navbar-brand" to="/">
        <img src={sykesLogo} />
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
  );
};

export default NavbarComponent;
