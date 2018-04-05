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
    return (
      <Nav className="ml-auto auth-nav-links-comp" navbar>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle color="success" nav caret>
            Modules
          </DropdownToggle>
          <DropdownMenu >
            <DropdownItem>
              <NavLink to="/practice/modules/tables" style={{ textDecoration: 'none', color: 'black' }}>
                x en ÷
              </NavLink>
            </DropdownItem>
            <DropdownItem >
              <NavLink to="/practice/modules/sums" style={{ textDecoration: 'none', color: 'black' }}>
              + en -
              </NavLink>
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
          <NavLink to="/admin/school_list">Schools</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="" onClick={this.logoutFN}>Logout</NavLink>
        </NavItem>
      </Nav>
    );
  }
}
