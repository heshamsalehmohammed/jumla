import actionTypes from '../actionTypes/cartActionTypes';

export function cart_IncreaseProductCount(productId,stockDetailId, increasingAmount) {
  return {
    type: actionTypes.INCREASE_CART_PRODUCT_COUNT,
    payload: {
      productId,
      stockDetailId,
      increasingAmount,
    },
  };
}

export function cart_DecreaseProductCount(productId,stockDetailId, decreasingAmount) {
  return {
    type: actionTypes.DECREASE_CART_PRODUCT_COUNT,
    payload: {
      productId,
      stockDetailId,
      decreasingAmount,
    },
  };
}

export function cart_UpdateProductCount(productId,stockDetailId, count) {
  return {
    type: actionTypes.UPDATE_CART_PRODUCT_COUNT,
    payload: {
      productId,
      stockDetailId,
      count,
    },
  };
}

export function cart_UpdateProductProfit(productId,stockDetailId, profitAmountPerPiece) {
  return {
    type: actionTypes.UPDATE_CART_PRODUCT_PROFIT,
    payload: {
      productId,
      stockDetailId,
      profitAmountPerPiece,
    },
  };
}

export function cart_RemoveProduct(productId, stockDetailId) {
  return {
    type: actionTypes.REMOVE_PRODUCT_FROM_CART,
    payload: {
      productId,
      stockDetailId
    },
  };
}

export function cart_RemoveProducts(productsIds) {// lesa
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

export function cart_AddProduct(productId, stockDetailId, count,profitAmountPerPiece) {
  return {
    type: actionTypes.ADD_PRODUCT_TO_CART,
    payload: {
      productId,
      stockDetailId,
      count,
      profitAmountPerPiece
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

export function wishlist_RemoveProducts(productsIds) {
  return {
    type: actionTypes.REMOVE_PRODUCTS_FROM_WISHLIST,
    payload: {
      productsIds,
    },
  };
}

export function wishlist_EmptyWishlist() {
  return {
    type: actionTypes.EMPTY_WISHLIST,
  };
}
