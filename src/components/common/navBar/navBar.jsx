import './navBar.scss';
import React from 'react';
import auth from '../../../services/authService';
import {Link, NavLink} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {withTranslation} from 'react-i18next';
import NavProfileDropDown from '../navProfileDropDown/navProfileDropDown';

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
            <Nav>{user && <NavProfileDropDown user={user} />}</Nav>
            <Nav className="mr-auto">
              <Nav.Link as={Link} className="nav-item nav-link" to="/#about">
                {t('nav.about')}
              </Nav.Link>
              <Nav.Link as={Link} className="nav-item nav-link" to="/#services">
                {t('nav.services')}
              </Nav.Link>
              <Nav.Link as={Link} className="nav-item nav-link" to="/#products">
                {t('nav.products')}
              </Nav.Link>
              <Nav.Link as={Link} className="nav-item nav-link" to="/#offers">
                {t('nav.offers')}
              </Nav.Link>
              <Nav.Link as={Link} className="nav-item nav-link" to="/#contact">
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
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default withTranslation()(NavBar);
