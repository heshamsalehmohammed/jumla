import './navBar.scss';
import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import auth from '../../../services/authService';
import Navbar from 'react-bootstrap/Navbar'; 
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

class NavBar extends React.Component {
  render() {
    const user = auth.getCurrentUser();
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="custom-nav">
          <Link className="navbar-brand" to="/">
            Jumla
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link  as={Link}  className="nav-item nav-link" to="/movies">
                Movies
              </Nav.Link>
              <Nav.Link  as={Link}  className="nav-item nav-link" to="/customers">
                Customers
              </Nav.Link>
              <Nav.Link  as={Link}  className="nav-item nav-link" to="/rentals">
                Rentals
              </Nav.Link>
            </Nav>
            <Nav>
              {!user && (
                <React.Fragment>
                  <Nav.Link as={Link} className="nav-item nav-link" to="/login">
                    Login
                  </Nav.Link>
                  <Nav.Link  as={Link}  className="nav-item nav-link" to="/register">
                    Register
                  </Nav.Link>
                </React.Fragment>
              )}
              {user && (
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown" className="dropdown-menu-right">
                  <NavDropdown.Item  as={Link}  className="nav-item nav-link pl-3" to="/profile">
                    {user.name}
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item  as={Link}  className="nav-item nav-link pl-3" to="/logout">
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default NavBar;
