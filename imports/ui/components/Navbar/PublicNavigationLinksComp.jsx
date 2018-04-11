import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Nav,
  NavItem,
} from 'reactstrap';
import './PublicNavigationLinksComp.less';

const PublicNavigationLinksComp = () => (
  <Nav className="ml-auto" navbar>
    <NavItem className="public-navbar-main-options">
      <NavLink to="/auth/login" activeClassName="active">Login</NavLink>
    </NavItem>
    <NavItem className="public-navbar-main-options">
      <NavLink to="/auth/signup" activeClassName="active">signup</NavLink>
    </NavItem>
  </Nav>
);

export default PublicNavigationLinksComp;
