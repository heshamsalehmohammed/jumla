import './productValueDecreaseIncreaseButton.scss';
import React from 'react';
import {useDispatch} from 'react-redux';
import {
  cart_IncreaseProductCount,
  cart_DecreaseProductCount,
  cart_UpdateProductCount,
} from '../../../redux/actionCreators/cartActionCreators';
import {useTranslation} from 'react-i18next';

const ProductValueDecreaseIncreaseButton = (props) => {
  const {productId, productCount, stockDetailId, classNames, styles} = props;
  const {t, i18n} = useTranslation();

  const dispatch = useDispatch();

  const decreaseClickHandler = (productId, stockDetailId) => {
    dispatch(cart_DecreaseProductCount(productId, stockDetailId, 1));
  };
  const countChangeHandler = (e, productId, stockDetailId) => {
    dispatch(
      cart_UpdateProductCount(productId, stockDetailId, Number(e.target.value))
    );
  };
  const increaseClickHandler = (productId, stockDetailId) => {
    dispatch(cart_IncreaseProductCount(productId, stockDetailId, 1));
  };

  return (
    <div
      className={`input-group justify-content-center test-center increase-decrease-group ${classNames}`}
      style={styles}>
      <div
        className={`value-button decrease ${i18n.language}`}
        value="Decrease Value"
        onClick={() => decreaseClickHandler(productId, stockDetailId)}>
        <i className="fa fa-minus"></i>
      </div>
      <input
        type="number"
        id="number"
        value={productCount}
        onChange={(e) => countChangeHandler(e, productId, stockDetailId)}
        autoComplete="off"
      />
      <div
        className={`value-button increase  ${i18n.language}`}
        value="Increase Value"
        onClick={() => increaseClickHandler(productId, stockDetailId)}>
        <i className="fa fa-plus"></i>
      </div>
    </div>
  );
};

export default ProductValueDecreaseIncreaseButton;
