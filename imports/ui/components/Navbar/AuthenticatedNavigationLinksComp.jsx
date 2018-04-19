import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { NavLink } from 'react-router-dom';
import {
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import './AuthenticatedNavigationLinksComp.less';

export default class AuthenticatedNavigationLinksComp extends Component {
  constructor(props) {
    super(props);
    this.logoutFN = this.logoutFN.bind(this);
  }

  logoutFN() {
    Meteor.logout((err) => {
      if (err) {
        console.log( err.reason );
      } else {
        this.props.toHomepage();
      }
    });
  }

  render() {
    let adminLinks;
    if (this.props.userIsAdmin) {
      adminLinks = (
        <NavItem className="auth-navbar-main-options">
          <NavLink to="/admin/school_list">Schools</NavLink>
        </NavItem>
      );
    } else {
      adminLinks = null;
    }
    return (
      <Nav className="ml-auto" navbar>
        <UncontrolledDropdown className="auth-navbar-main-options" nav inNavbar>
          <DropdownToggle color="success" nav caret>
            Practice
          </DropdownToggle>
          <DropdownMenu >
            <DropdownItem>
              <NavLink to="/practice/modules/tables">
                x or ÷
              </NavLink>
            </DropdownItem>
            <DropdownItem >
              <NavLink to="/practice/modules/sums">
              + or -
              </NavLink>
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              Sequences
            </DropdownItem>
            <DropdownItem>
              PEMDAS
            </DropdownItem>
            <DropdownItem>
              Fractions
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        {adminLinks}
        <NavItem className="auth-navbar-main-options">
          <NavLink to="" onClick={this.logoutFN}>Logout</NavLink>
        </NavItem>
      </Nav>
    );
  }
}
