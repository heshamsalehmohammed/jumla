import './SecondaryNav.scss';
import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import QuickShoppingCart from '../../../common/quickShoppingCart/quickShoppingCart';
import ShoppingSearchInput from './../../../common/shoppingSearchInput/shoppingSearchInput';

export default class SecondaryNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <QuickShoppingCart />
          </Col>
          <Col xs={12} className="d-flex col-md-6 col-sm-12 align-items-center">
            <ShoppingSearchInput />
          </Col>
          <Col className="text-center p-3">
            <Link to="/dashboard">
              <span
                className="fa fa-shopping-cart"
                style={{
                  fontSize: 'xx-large',
                  fontWeight: '800',
                  color: '#fe3f40',
                }}></span>
              <span>
                J
                <strong
                  style={{
                    color: '#fe3f40',
                  }}>
                  umla
                </strong>
              </span>
              <p
                style={{
                  color: '#fe3f40',
                  textShadow: '0 0 0.15em #fe3f40',
                }}>
                Your Shopping Partner
              </p>
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}
