import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
// import './NavbarComp.css';

export default class NavbarComp extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" className="navbar-dark bg-dark" light expand="md">
          <NavbarBrand href="/">MATHCOMBAT</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/schools_edit">Schools</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Modules
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem>
                    <Link to="/tables" style={{ textDecoration: 'none', color: 'black' }}>
                      x en ÷
                    </Link>
                  </DropdownItem>
                  <DropdownItem >
                    <Link to="/sums" style={{ textDecoration: 'none', color: 'black' }}>
                    + en -
                    </Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    PEMDAS
                  </DropdownItem>
                  <DropdownItem>
                    Tyd
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Login</NavLink>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
