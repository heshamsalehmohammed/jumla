import './quickShoppingCartItem.scss';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link, NavLink} from 'react-router-dom';
import {
  cart_IncreaseProductCount,
  cart_DecreaseProductCount,
  cart_UpdateProductCount,
  cart_RemoveProduct,
} from '../../../../redux/actionCreators/cartActionCreators';

const QuickShoppingCartItemgCartItem = (props) => {
  const {orderedProduct} = props;
  const dispatch = useDispatch();

  const product = useSelector((state) =>
    state.productsState.products.find((p) => p.id === orderedProduct.productId)
  );

  const trashClickHandler = () => {
    dispatch(cart_RemoveProduct(orderedProduct.productId));
  };
  const decreaseClickHandler = () => {
    dispatch(cart_DecreaseProductCount(orderedProduct.productId, 1));
  };
  const countChangeHandler = (e) => {
    dispatch(
      cart_UpdateProductCount(orderedProduct.productId, Number(e.target.value))
    );
  };
  const increaseClickHandler = () => {
    dispatch(cart_IncreaseProductCount(orderedProduct.productId, 1));
  };

  return (
    <Row className="cart-item mb-1">
      <Col xs={3} className="p-1">
        <Link to={`/dashboard/productdetails/${product.id}`}>
          <img
            className="img-fluid"
            src="https://i.imgur.com/ba3tvGm.jpg"
            alt="img"
          />
        </Link>
      </Col>
      <Col
        xs={8}
        className="text-center p-3 d-flex flex-column justify-content-between">
        <Link to={`/dashboard/productdetails/${product.id}`}>
          <div className="">
            <h4 className="cart-item-product-name">{product.name}</h4>
            <p>{product.price} EGP</p>
          </div>
        </Link>
        <div className="input-group justify-content-center test-center increase-decrease-group">
          <div
            className="value-button decrease"
            value="Decrease Value"
            onClick={decreaseClickHandler}>
            <i className="fa fa-minus"></i>
          </div>
          <input
            type="number"
            id="number"
            value={orderedProduct.count}
            onChange={countChangeHandler}
            autoComplete="off"
          />
          <div
            className="value-button increase"
            value="Increase Value"
            onClick={increaseClickHandler}>
            <i className="fa fa-plus"></i>
          </div>
        </div>
      </Col>
      <Col xs={1} className="text-center d-flex align-items-center p-0">
        <i
          style={{
            color: '#fe3f40',
          }}
          className="fa fa-trash cart-item-trash-icon"
          aria-hidden="true"
          onClick={trashClickHandler}></i>
      </Col>
    </Row>
  );
};

export default QuickShoppingCartItemgCartItem;
