import initialState from '../initialState';
import actionsTypes from '../actionTypes/cartActionTypes';

const cartReducer = (state = initialState.cartState, action) => {
  switch (action.type) {
    case actionsTypes.INCREASE_CART_PRODUCT_COUNT: {
      return {
        ...state,
        cartProducts: state.cartProducts.map((op) => ({
          ...op,
          count:
            op.productId === action.payload.productId
              ? op.count + action.payload.increasingAmount
              : op.count,
        })),
      };
    }
    case actionsTypes.DECREASE_CART_PRODUCT_COUNT: {
      let product = state.cartProducts.find(
        (op) => op.productId === action.payload.productId
      );

      if (product.count - action.payload.decreasingAmount <= 0) {
        return {
          ...state,
          cartProducts: [
            ...cartProductsWithoutProduct(
              state.cartProducts,
              action.payload.productId
            ),
          ],
        };
      }
      return {
        ...state,
        cartProducts: state.cartProducts.map((op) => ({
          ...op,
          count:
            op.productId === action.payload.productId
              ? op.count - action.payload.decreasingAmount
              : op.count,
        })),
      };
    }
    case actionsTypes.UPDATE_CART_PRODUCT_COUNT: {
      if (action.payload.count === 0) {
        return {
          ...state,
          cartProducts: [
            ...cartProductsWithoutProduct(
              state.cartProducts,
              action.payload.productId
            ),
          ],
        };
      }
      return {
        ...state,
        cartProducts: state.cartProducts.map((op) => ({
          ...op,
          count:
            op.productId === action.payload.productId
              ? action.payload.count
              : op.count,
        })),
      };
    }
    case actionsTypes.REMOVE_PRODUCT_FROM_CART: {
      return {
        ...state,
        cartProducts: [
          ...cartProductsWithoutProduct(
            state.cartProducts,
            action.payload.productId
          ),
        ],
      };
    }
    case actionsTypes.REMOVE_PRODUCTS_FROM_CART: {
      return {
        ...state,
        cartProducts: [
          ...state.cartProducts.filter(
            (op) => !action.payload.productsIds.includes(op.productId)
          ),
        ],
      };
    }
    case actionsTypes.EMPTY_CART: {
      return {
        ...state,
        cartProducts: [],
      };
    }
    case actionsTypes.ADD_PRODUCT_TO_CART: {
      return {
        ...state,
        cartProducts: [
          ...state.cartProducts,
          {
            productId: action.payload.productId,
            count: action.payload.count,
          },
        ],
      };
    }
    case actionsTypes.ADD_PRODUCT_TO_WISHLIST: {
      return {
        ...state,
        wishlistProducts: [
          ...state.wishlistProducts,
          {
            productId: action.payload.productId,
          },
        ],
      };
    }
    case actionsTypes.REMOVE_PRODUCT_FROM_WISHLIST: {
      return {
        ...state,
        wishlistProducts: [
          ...wishlistProductsWithoutProduct(
            state.wishlistProducts,
            action.payload.productId
          ),
        ],
      };
    }
    case actionsTypes.REMOVE_PRODUCTS_FROM_WISHLIST: {
      return {
        ...state,
        wishlistProducts: [
          ...state.wishlistProducts.filter(
            (op) => !action.payload.productsIds.includes(op.productId)
          ),
        ],
      };
    }
    default:
      return state;
  }
};

const cartProductsWithoutProduct = (cartProducts, productId) => {
  return cartProducts.filter((op) => productId !== op.productId);
};

const wishlistProductsWithoutProduct = (wislistProducts, productId) => {
  return wislistProducts.filter((op) => productId !== op.productId);
};

export default cartReducer;
