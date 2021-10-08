import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import './Checkout.scss';
import React, {useState, useEffect, useRef} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import {getSubtotalPrice} from '../../../../services/cartService'

const Checkout = (props) => {
  const cartProducts = useSelector((state) => state.cartState.cartProducts);
  const cartProductsIds = cartProducts.map((cp) => cp.productId);
  const cartProductsDetails = useSelector((state) =>
    state.productsState.products.filter((p) => cartProductsIds.includes(p.id))
  );

  const dispatch = useDispatch();

  const discount = 0;
  const tax = 0;
  const subtotalPrice = getSubtotalPrice(cartProducts, cartProductsDetails);
  const totalPrice = subtotalPrice - discount;


  return (
    <Row className="justify-content-center p-2">
      <Col
        md={4}
        className="checkout-summury-col  d-flex justify-content-center flex-column">
        <h3 className="text-center mb-2">Order Summary</h3>
        <Table
          className="cart-summury-table"
          striped
          bordered
          hover
          variant="light">
          <tbody>
            <tr>
              <td>Product</td>
              <td>Total</td>
            </tr>
            {cartProducts.map((co, index) => {
              let product = cartProductsDetails.find(
                (pd) => pd.id === co.productId
              );
              return (
                <tr key={index}>
                  <td>
                    {product.name} X {co.count}
                  </td>
                  <td>{product.price * co.count}</td>
                </tr>
              );
            })}
            <tr>
              <td>SubTotal</td>
              <td>{subtotalPrice}</td>
            </tr>
            <tr>
              <td>Tax</td>
              <td>{tax}</td>
            </tr>
            <tr>
              <td>Discount</td>
              <td>{discount}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>{totalPrice}</td>
            </tr>
          </tbody>
        </Table>
        <Button>Place Order</Button>
      </Col>
      <Col md={8}>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Billing Details</Accordion.Header>
            <Accordion.Body>
             
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Shipping Address</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col>
    </Row>
  );
};

export default Checkout;
