import './quickShoppingCart.scss';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Link, NavLink} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {withRouter} from 'react-router-dom';
import QuickShoppingCartItem from './quickShoppingCartItem/quickShoppingCartItem';

const QuickShoppingCart = withRouter((props) => {
  const {user, history} = props;
  const {t, i18n} = useTranslation();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const seeFullDetailsButtonHandler = () => {
    handleClose();
    history.push('/dashboard/cart');
  };

  const orderedProducts = useSelector(
    (state) => state.cartState.orderedProducts
  );

  const renderCartItems = () => {
    return orderedProducts.map((orderedProduct) => {
      return (
        <QuickShoppingCartItem key={orderedProduct.productId} orderedProduct={orderedProduct} />
      );
    });
  };

  return (
    <>
      <Container
        onClick={handleShow}
        className="quick-cart-button text-center"
        style={{
          color: '#fe3f40',
        }}>
        <Row className="m-1 justify-content-center">
          <Badge bg="secondary" bsPrefix="quick-cart-badge">
            {orderedProducts.length}
          </Badge>
        </Row>
        <Row className="m-1">
          <span className="fa fa-shopping-basket"></span>
        </Row>
        <Row className="m-1">
          <span className="aa-cart-title">SHOPPING CART</span>
        </Row>
      </Container>

      <Offcanvas show={show} onHide={handleClose} placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Quick Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container className="h-100 p-0 pb-4">
            {renderCartItems()}
            <Row
              className="text-center p-2 see-full-details-row"
              style={{
                color: '#fe3f40',
                cursor: 'pointer',
              }}
              onClick={seeFullDetailsButtonHandler}>
              See Full Details
            </Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
});

export default QuickShoppingCart;
