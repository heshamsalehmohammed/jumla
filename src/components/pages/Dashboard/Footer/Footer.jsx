import './Footer.scss';
import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {default as CommonFooter} from '../../../common/footer/footer';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer className="dashboard-footer">
        <Container className="dashboard-footer-container">
          <Row className="p-2 pt-4">
            <Col xs={12} md={4} className="text-center">
              <div className="footer-link-div">
                <Link> Link 1</Link>
              </div>
              <div>
                <Link> Link 2</Link>
              </div>
              <div>
                <Link> Link 3</Link>
              </div>
            </Col>
            <Col xs={12} md={4} className="text-center">
              <div>
                <Link> Link 1</Link>
              </div>
              <div>
                <Link> Link 2</Link>
              </div>
              <div>
                <Link> Link 3</Link>
              </div>
            </Col>
            <Col xs={12} md={4} className="text-center">
              <div>
                <Link> Link 1</Link>
              </div>
              <div>
                <Link> Link 2</Link>
              </div>
              <div>
                <Link> Link 3</Link>
              </div>
            </Col>
          </Row>
        </Container>
        <CommonFooter />
      </footer>
    );
  }
}
