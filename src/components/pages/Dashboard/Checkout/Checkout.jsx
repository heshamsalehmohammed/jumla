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

import Table from 'react-bootstrap/Table';
import {
  getSubtotalPrice,
  getProductTotalPrice,
} from '../../../../services/cartService';
import CheckoutAccordionForm from './CheckoutAccordionForm/CheckoutAccordionForm';

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
      <Col md={4} className="checkout-summury-col  d-flex flex-column">
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
                    {
                      <Link
                        to={`/dashboard/productdetails/${product.id}/${co.stockDetailId}`}>
                        {product.name}
                      </Link>
                    }{' '}
                    X {co.count}
                  </td>
                  <td>{getProductTotalPrice(product, co) * co.count}</td>
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
        <CheckoutAccordionForm />
      </Col>
    </Row>
  );
};

export default Checkout;
