import './MainNav.scss';
import React, {Component} from 'react';
import auth from '../../../../services/authService';
import {Link, NavLink} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import {withTranslation} from 'react-i18next';

import NavProfileDropDown from '../../../common/navProfileDropDown/navProfileDropDown';

export default withTranslation()(
  class MainNav extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    componentDidMount() {}

    render() {
      const user = auth.getCurrentUser();
      const {t} = this.props;
      return (
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="light"
          variant="light"
          sticky="top"
          className="">
{/*           <Link className="navbar-brand" to="/">
            {t('nav.home')}
          </Link> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className={'justify-content-md-center'}>
            <Nav className="mr-auto">
              <NavProfileDropDown user={user}/>
              <Nav.Link as={Link} className="nav-item nav-link" to="/dashboard/wishlist">
                Wishlist
              </Nav.Link>
              <Nav.Link as={Link} className="nav-item nav-link" to="/dashboard/cart">
                My Cart
              </Nav.Link>
              <Nav.Link as={Link} className="nav-item nav-link" to="/dashboard/checkout">
                Checkout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }
  }
);
