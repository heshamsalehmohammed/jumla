import './navBar.scss';
import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import auth from '../../../services/authService';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {withTranslation} from 'react-i18next';

class NavBar extends React.Component {
  render() {
    const user = auth.getCurrentUser();
    const {t} = this.props;
    return (
      <>
        <Navbar
          collapseOnSelect
          expand="lg"
          className="fixed-top custom-nav p-4">
          <Link className="navbar-brand" to="/">
            {t('nav.home')}
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} className="nav-item nav-link" to="/">
                {t('nav.about')}
              </Nav.Link>
              <Nav.Link as={Link} className="nav-item nav-link" to="/">
                {t('nav.services')}
              </Nav.Link>
              <Nav.Link as={Link} className="nav-item nav-link" to="/">
                {t('nav.products')}
              </Nav.Link>
              <Nav.Link as={Link} className="nav-item nav-link" to="/">
                {t('nav.offers')}
              </Nav.Link>
              <Nav.Link as={Link} className="nav-item nav-link" to="/">
                {t('nav.contactUs')}
              </Nav.Link>
            </Nav>
            <Nav>
              {!user && (
                <React.Fragment>
                  <Nav.Link as={Link} className="nav-item nav-link" to="/auth">
                    {t('nav.join')}
                  </Nav.Link>
                </React.Fragment>
              )}
              {user && (
                <NavDropdown
                  title="Dropdown"
                  id="collasible-nav-dropdown"
                  className="dropdown-menu-right">
                  <NavDropdown.Item
                    as={Link}
                    className="nav-item nav-link pl-3"
                    to="/profile">
                    {user.name}
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    as={Link}
                    className="nav-item nav-link pl-3"
                    to="/logout">
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

export default withTranslation()(NavBar);
