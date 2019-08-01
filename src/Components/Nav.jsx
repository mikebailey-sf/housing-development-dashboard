import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Nav>
          <NavLink href="#">Dev Time by Units Added</NavLink> <NavLink href="#">Dev times by Size Category</NavLink> <NavLink href="#">Dev Times by Stage</NavLink> <NavLink disabled href="#">About</NavLink>
        </Nav>
      </div>
    );
  }
}