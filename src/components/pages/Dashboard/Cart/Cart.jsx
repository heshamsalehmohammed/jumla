import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import './Cart.scss';
import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import {
  cart_RemoveProduct,
  cart_EmptyCart,
} from '../../../../redux/actionCreators/cartActionCreators';
import {
  getSubtotalPrice,
  getProductTotalPrice,
} from '../../../../services/cartService';
import ProductValueDecreaseIncreaseButton from './../../../common/productValueDecreaseIncreaseButton/productValueDecreaseIncreaseButton';

const Cart = (props) => {
  const cartProducts = useSelector((state) => state.cartState.cartProducts);
  const cartProductsIds = cartProducts.map((cp) => cp.productId);
  const cartProductsDetails = useSelector((state) =>
    state.productsState.products.filter((p) => cartProductsIds.includes(p.id))
  );

  const dispatch = useDispatch();

  const removeAllHandler = () => {
    dispatch(cart_EmptyCart());
  };

  const header = (
    <div className="table-header-container">
      <Button label="Remove All" onClick={removeAllHandler}>
        <i className="fa fa-trash m-1"></i> Remove All
      </Button>
    </div>
  );

  const imageBodyTemplate = (rowData) => {
    return (
      <img
        src={rowData.mainImage}
        alt={rowData.mainImage}
        className="product-image"
      />
    );
  };

  const nameBodyTemplate = (rowData) => {
    const orderedProduct = cartProducts.find(
      (cp) => cp.productId === rowData.id
    );
    return (
      <Link
        to={`/dashboard/productdetails/${rowData.id}/${orderedProduct.stockDetailId}`}>
        {rowData.name}
      </Link>
    );
  };

  const priceBodyTemplate = (rowData) => {
    const orderedProduct = cartProducts.find(
      (cp) => cp.productId === rowData.id
    );
    return (
      getProductTotalPrice(rowData, orderedProduct) + rowData.priceCurrency
    );
  };

  const statusBodyTemplate = (rowData) => {
    return (
      <span
        className={`product-badge status-${rowData.inventoryStatus.toLowerCase()}`}>
        {rowData.inventoryStatus}
      </span>
    );
  };

  const categoryBodyTemplate = (rowData) => {
    return <span>{rowData.categoryName}</span>;
  };

  const trashClickHandler = (productId, stockDetailId) => {
    dispatch(cart_RemoveProduct(productId, stockDetailId));
  };

  const countBodyTemplate = (rowData) => {
    const orderedProduct = cartProducts.find(
      (cp) => cp.productId === rowData.id
    );
    return (
      <ProductValueDecreaseIncreaseButton
        productId={rowData.id}
        stockDetailId={orderedProduct.stockDetailId}
        productCount={orderedProduct.count}
      />
    );
  };

  const deleteBodyTemplate = (rowData) => {
    const orderedProduct = cartProducts.find(
      (cp) => cp.productId === rowData.id
    );
    return (
      <span>
        <i
          style={{
            color: '#fe3f40',
          }}
          className="fa fa-trash cart-item-trash-icon"
          aria-hidden="true"
          onClick={() =>
            trashClickHandler(rowData.id, orderedProduct.stockDetailId)
          }></i>
      </span>
    );
  };

  const discount = 0;
  const tax = 0;
  const subtotalPrice = getSubtotalPrice(cartProducts, cartProductsDetails);
  const totalPrice = subtotalPrice - discount;

  return (
    <Row className="justify-content-center cart-row p-2">
      <Col md={10} className="cart-column">
        <DataTable
          className="cart-datatable"
          value={cartProductsDetails}
          dataKey="id"
          header={header}>
          <Column field="name" header="Name" body={nameBodyTemplate} sortable />
          <Column header="Image" body={imageBodyTemplate} />
          <Column
            field="price"
            header="Price"
            sortable
            body={priceBodyTemplate}
          />
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
          <Column field="delete" header="Delete" body={deleteBodyTemplate} />
        </DataTable>
      </Col>
      <Col
        xs={10}
        md={4}
        className=" d-flex justify-content-center flex-column">
        {cartProducts.length > 0 && (
          <>
            <h3 className="text-center">Cart Totals</h3>
            <Table
              className="cart-summury-table"
              striped
              bordered
              hover
              variant="light">
              <tbody>
                <tr>
                  <td>Subtotal</td>
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
            <Button as={Link} to="/dashboard/checkout">
              Proceed To Checkout
            </Button>
          </>
        )}
      </Col>
    </Row>
  );
};

export default Cart;
