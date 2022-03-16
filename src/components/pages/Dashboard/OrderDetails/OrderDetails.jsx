import './OrderDetails.scss';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {getProductTotalPrice} from '../../../../services/cartService';
import Table from 'react-bootstrap/Table';
import CheckoutAccordionForm from '../Checkout/CheckoutAccordionForm/CheckoutAccordionForm';

const OrderDetails = withRouter((props) => {
  let {
    match: {
      params: {id: orderId},
    },
  } = props;

  orderId = Number(orderId);

  const orders = useSelector((state) => state.ordersState.orders);
  const order = orders.find((o) => o.id === orderId);
  const orderProducts = useSelector((state) => state.productsState.products);

  const dispatch = useDispatch();

  const nameBodyTemplate = (rowData) => {
    const product = orderProducts.find((op) => op.id === rowData.productId);
    return (
      <Link
        to={`/dashboard/productdetails/${rowData.productId}/${rowData.stockDetailId}`}>
        {product.name}
      </Link>
    );
  };

  const imageBodyTemplate = (rowData) => {
    const product = orderProducts.find((op) => op.id === rowData.productId);
    return (
      <img
        src={product.mainImage}
        alt={product.mainImage}
        className="product-image"
      />
    );
  };

  const categoryBodyTemplate = (rowData) => {
    const product = orderProducts.find((op) => op.id === rowData.productId);
    return <span>{product.categoryName}</span>;
  };

  const statusBodyTemplate = (rowData) => {
    const product = orderProducts.find((op) => op.id === rowData.productId);
    return (
      <span
        className={`product-badge status-${product.inventoryStatus.toLowerCase()}`}>
        {product.inventoryStatus}
      </span>
    );
  };

  const countBodyTemplate = (rowData) => {
    return <span>{rowData.count}</span>;
  };

  const profitBodyTemplate = (rowData) => {
    const product = orderProducts.find((op) => op.id === rowData.productId);
    return (
      <span>{rowData.profitAmountPerPiece + ' ' + product.priceCurrency}</span>
    );
  };

  const totalPriceBodyTemplate = (rowData) => {
    const product = orderProducts.find((op) => op.id === rowData.productId);
    return (
      <span>
        {getProductTotalPrice(product, {
          profitAmountPerPiece: rowData.profitAmountPerPiece,
        }) +
          ' ' +
          product.priceCurrency}
      </span>
    );
  };

  return (
    <>
      <Row className="justify-content-center order-row p-2">
        <Col md={10} className="order-column">
          <h3 className="text-center pb-2">Order Details</h3>
          <DataTable
            className="order-datatable"
            value={order.productsDetails}
            dataKey="id">
            <Column
              field="name"
              header="Name"
              body={nameBodyTemplate}
              sortable
            />
            <Column header="Image" body={imageBodyTemplate} />
            <Column
              field="category"
              header="Category"
              sortable
              body={categoryBodyTemplate}
            />
            <Column
              field="inventoryStatus"
              header="Status"
              sortable
              body={statusBodyTemplate}
            />
            <Column
              field="count"
              header="Count"
              body={countBodyTemplate}
              style={{width: '20%'}}
            />
            <Column
              field="profit"
              header="Profit Per Piece"
              body={profitBodyTemplate}
              style={{width: '20%'}}
            />
            <Column
              field="totalPrice"
              header="Total Price"
              sortable
              body={totalPriceBodyTemplate}
            />
          </DataTable>
        </Col>
      </Row>
      <Row className=" d-flex justify-content-center pt-2">
        <Col
          xs={10}
          md={4}
          className=" d-flex flex-column">
          <h3 className="text-center">Order Totals</h3>
          <Table
            className="order-summury-table"
            striped
            bordered
            hover
            variant="light">
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td>
                  {order.priceDetails.subTotal +
                    ' ' +
                    order.priceDetails.currency}
                </td>
              </tr>
              <tr>
                <td>Tax</td>
                <td>
                  {order.priceDetails.tax + ' ' + order.priceDetails.currency}
                </td>
              </tr>
              <tr>
                <td>Discount</td>
                <td>
                  {order.priceDetails.discount +
                    ' ' +
                    order.priceDetails.currency}
                </td>
              </tr>
              <tr>
                <td>Total</td>
                <td>
                  {order.priceDetails.total + ' ' + order.priceDetails.currency}
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col
          xs={10}
          md={6}
          className=" d-flex flex-column">
          <CheckoutAccordionForm orderShippingDetails={order.shippingDetails} />
        </Col>
      </Row>
    </>
  );
});

export default OrderDetails;
