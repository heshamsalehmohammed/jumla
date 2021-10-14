import actionTypes from '../actionTypes/cartActionTypes';

export function cart_IncreaseProductCount(productId, increasingAmount) {
  return {
    type: actionTypes.INCREASE_CART_PRODUCT_COUNT,
    payload: {
      productId,
      increasingAmount,
    },
  };
}

export function cart_DecreaseProductCount(productId, decreasingAmount) {
  return {
    type: actionTypes.DECREASE_CART_PRODUCT_COUNT,
    payload: {
      productId,
      decreasingAmount,
    },
  };
}

export function cart_UpdateProductCount(productId, count) {
  return {
    type: actionTypes.UPDATE_CART_PRODUCT_COUNT,
    payload: {
      productId,
      count,
    },
  };
}

export function cart_RemoveProduct(productId) {
  return {
    type: actionTypes.REMOVE_PRODUCT_FROM_CART,
    payload: {
      productId,
    },
  };
}

export function cart_RemoveProducts(productsIds) {
  return {
    type: actionTypes.REMOVE_PRODUCTS_FROM_CART,
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
    type: actionTypes.ADD_PRODUCT_TO_CART,
    payload: {
      productId,
      count,
    },
  };
}

export function wishlist_AddProduct(productId) {
  return {
    type: actionTypes.ADD_PRODUCT_TO_WISHLIST,
    payload: {
      productId,
    },
  };
}


export function wishlist_RemoveProduct(productId) {
  return {
    type: actionTypes.REMOVE_PRODUCT_FROM_WISHLIST,
    payload: {
      productId,
    },
  };
}

export function wislist_RemoveProducts(productsIds) {
  return {
    type: actionTypes.REMOVE_PRODUCTS_FROM_CART,
    payload: {
      productsIds,
    },
  };
}

export function wislist_EmptyWishlist() {
  return {
    type: actionTypes.EMPTY_WISHLIST
  };
}