import actionTypes from '../actionTypes/cartActionTypes';

export function cart_IncreaseProductCount(productId, increasingAmount) {
  return {
    type: actionTypes.INCREASE_PRODUCT_COUNT,
    payload: {
      productId,
      increasingAmount,
    },
  };
}

export function cart_DecreaseProductCount(productId, decreasingAmount) {
  return {
    type: actionTypes.DECREASE_PRODUCT_COUNT,
    payload: {
      productId,
      decreasingAmount,
    },
  };
}

export function cart_UpdateProductCount(productId, count) {
  return {
    type: actionTypes.UPDATE_PRODUCT_COUNT,
    payload: {
      productId,
      count,
    },
  };
}

export function cart_RemoveProduct(productId) {
  return {
    type: actionTypes.REMOVE_PRODUCT,
    payload: {
      productId,
    },
  };
}

export function cart_RemoveProducts(productsIds) {
  return {
    type: actionTypes.REMOVE_PRODUCTS,
    payload: {
      productsIds,
    },
  };
}

export function cart_EmptyCart() {
  return {
    type: actionTypes.EMPTY_CART,
  };
}

export function cart_AddProduct(productId, count) {
  return {
    type: actionTypes.DECREASE_PRODUCT_COUNT,
    payload: {
      productId,
      count,
    },
  };
}
