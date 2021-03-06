import './MainNav.scss';
import React, {Component} from 'react';
import auth from '../../../../services/authService';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {withTranslation} from 'react-i18next';

import NavProfileDropDown from '../../../common/navProfileDropDown/navProfileDropDown';

export default withTranslation()(
  class MainNav extends Component {
    constructor(props) {
      super(props);
      this.state = {
        navClass: '',
      };
      this.scrollHandler = this.scrollHandler.bind(this);
    }

    scrollHandler(e) {
      if (
        e.target.scrollingElement.scrollTop === 0 &&
        this.state.navClass !== ''
      ) {
        this.setState({
          navClass: '',
        });
      }

      if (
        e.target.scrollingElement.scrollTop !== 0 &&
        this.state.navClass !== 'scroll'
      ) {
        this.setState({
          navClass: 'scroll',
        });
      }
    }

    componentDidMount() {
      document.addEventListener('scroll', this.scrollHandler);
    }

    componentWillUnmount() {
      document.removeEventListener('scroll', this.scrollHandler);
    }

    render() {
      const user = auth.getCurrentUser();
      const {t} = this.props;
      return (
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="light"
          variant="light"
          fixed="top"
          className={`main-nav ${this.state.navClass}`}>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className={'justify-content-md-center text-center'}>
            <Nav className="mr-auto">
              <NavProfileDropDown user={user} />
              <Nav.Link
                as={Link}
                className="nav-item nav-link p-2"
                to="/dashboard/products">
                All Products
              </Nav.Link>
              <Nav.Link
                as={Link}
                className="nav-item nav-link p-2"
                to="/dashboard/wishlist">
                Wishlist
              </Nav.Link>
              <Nav.Link
                as={Link}
                className="nav-item nav-link  p-2"
                to="/dashboard/cart">
                My Cart
              </Nav.Link>
              <Nav.Link
                as={Link}
                className="nav-item nav-link  p-2"
                to="/dashboard/checkout">
                Checkout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }
  }
);
