import React, { StrictMode } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavItem,
} from 'reactstrap';

export default function NavBar() {
  return (
      <StrictMode>
      <Navbar expand='md' className='navbar justify-content-between'>
          <Nav className='mr-auto' navbar>
            <NavItem>
              <Link className='nav-bar' to='/'>Home</Link>
            </NavItem>
            <NavItem>
              <Link className='nav-bar' to='/flash-card'>Flash Cards</Link>
            </NavItem>
          </Nav>
      </Navbar>
    </StrictMode>
  );
}
