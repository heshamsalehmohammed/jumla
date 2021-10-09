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
  const {productId, productCount} = props;
  const {t, i18n} = useTranslation();

  const dispatch = useDispatch();

  const decreaseClickHandler = (productId) => {
    dispatch(cart_DecreaseProductCount(productId, 1));
  };
  const countChangeHandler = (e, productId) => {
    dispatch(cart_UpdateProductCount(productId, Number(e.target.value)));
  };
  const increaseClickHandler = (productId) => {
    dispatch(cart_IncreaseProductCount(productId, 1));
  };

  return (
    <div className="input-group justify-content-center test-center increase-decrease-group">
      <div
        className={`value-button decrease ${i18n.language}`}
        value="Decrease Value"
        onClick={() => decreaseClickHandler(productId)}>
        <i className="fa fa-minus"></i>
      </div>
      <input
        type="number"
        id="number"
        value={productCount}
        onChange={(e) => countChangeHandler(e, productId)}
        autoComplete="off"
      />
      <div
        className={`value-button increase  ${i18n.language}`}
        value="Increase Value"
        onClick={() => increaseClickHandler(productId)}>
        <i className="fa fa-plus"></i>
      </div>
    </div>
  );
};

export default ProductValueDecreaseIncreaseButton;
