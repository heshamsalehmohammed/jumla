import initialState from '../initialState';
import actionsTypes from '../actionTypes/cartActionTypes';

const cartReducer = (state = initialState.cartState, action) => {
  switch (action.type) {
    case actionsTypes.INCREASE_CART_PRODUCT_COUNT: {
      let product = state.cartProducts.find(
        (op) =>
          op.productId === action.payload.productId &&
          op.stockDetailId === action.payload.stockDetailId
      );
      if (product) {
        return {
          ...state,
          cartProducts: state.cartProducts.map((op) => ({
            ...op,
            count:
              op.productId === action.payload.productId &&
              op.stockDetailId === action.payload.stockDetailId
                ? op.count + action.payload.increasingAmount
                : op.count,
          })),
        };
      }
      return {
        ...state,
        cartProducts: [
          ...state.cartProducts,
          {
            productId: action.payload.productId,
            stockDetailId: action.payload.stockDetailId,
            count: action.payload.increasingAmount,
          },
        ],
      };
    }
    case actionsTypes.DECREASE_CART_PRODUCT_COUNT: {
      let product = state.cartProducts.find(
        (op) =>
          op.productId === action.payload.productId &&
          op.stockDetailId === action.payload.stockDetailId
      );

      if ((product?.count ?? 0) - action.payload.decreasingAmount <= 0) {
        return {
          ...state,
          cartProducts: [
            ...cartProductsWithoutProduct(
              state.cartProducts,
              action.payload.productId,
              action.payload.stockDetailId
            ),
          ],
        };
      }
      return {
        ...state,
        cartProducts: state.cartProducts.map((op) => ({
          ...op,
          count:
            op.productId === action.payload.productId &&
            op.stockDetailId === action.payload.stockDetailId
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
              action.payload.productId,
              action.payload.stockDetailId
            ),
          ],
        };
      }
      return {
        ...state,
        cartProducts: state.cartProducts.map((op) => ({
          ...op,
          count:
            op.productId === action.payload.productId &&
            op.stockDetailId === action.payload.stockDetailId
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
            action.payload.productId,
            action.payload.stockDetailId
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
    case actionsTypes.EMPTY_WISHLIST: {
      return {
        ...state,
        wishlistProducts: [],
      };
    }
    case actionsTypes.ADD_PRODUCT_TO_CART: {
      return {
        ...state,
        cartProducts: [
          ...state.cartProducts,
          {
            productId: action.payload.productId,
            stockDetailId: action.payload.stockDetailId,
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

const cartProductsWithoutProduct = (cartProducts, productId, stockDetailId) => {
  return cartProducts.filter(
    (op) => !(productId === op.productId && stockDetailId === op.stockDetailId)
  );
};

const wishlistProductsWithoutProduct = (wishlistProducts, productId) => {
  return wishlistProducts.filter((op) => productId !== op.productId);
};

export default cartReducer;
