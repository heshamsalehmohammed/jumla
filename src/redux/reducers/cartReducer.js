import initialState from '../initialState';
import actionsTypes from '../actionTypes/cartActionTypes';

const cartReducer = (state = initialState.cartState, action) => {
  switch (action.type) {
    case actionsTypes.INCREASE_PRODUCT_COUNT: {
      return {
        ...state,
        orderedProducts: state.orderedProducts.map((op) => ({
          ...op,
          count:
            op.productId === action.payload.productId
              ? op.count + action.payload.increasingAmount
              : op.count,
        })),
      };
    }
    case actionsTypes.DECREASE_PRODUCT_COUNT: {
      let product = state.orderedProducts.find(
        (op) => op.productId === action.payload.productId
      );

      if ((product.count - action.payload.decreasingAmount) <= 0) {
        return {
          ...state,
          orderedProducts: [
            ...orderedProductsWithoutProduct(
              state.orderedProducts,
              action.payload.productId
            ),
          ],
        };
      }
      return {
        ...state,
        orderedProducts: state.orderedProducts.map((op) => ({
          ...op,
          count:
            op.productId === action.payload.productId
              ? op.count - action.payload.decreasingAmount
              : op.count,
        })),
      };
    }
    case actionsTypes.UPDATE_PRODUCT_COUNT: {
      if (action.payload.count === 0) {
        return {
          ...state,
          orderedProducts: [
            ...orderedProductsWithoutProduct(
              state.orderedProducts,
              action.payload.productId
            ),
          ],
        };
      }
      return {
        ...state,
        orderedProducts: state.orderedProducts.map((op) => ({
          ...op,
          count:
            op.productId === action.payload.productId
              ? action.payload.count
              : op.count,
        })),
      };
    }
    case actionsTypes.REMOVE_PRODUCT: {
      return {
        ...state,
        orderedProducts: [
          ...orderedProductsWithoutProduct(
            state.orderedProducts,
            action.payload.productId
          ),
        ],
      };
    }
    case actionsTypes.REMOVE_PRODUCTS: {
      return {
        ...state,
        orderedProducts: [
          ...state.orderedProducts.filter(
            (op) => !action.payload.productsIds.includes(op.productId)
          ),
        ],
      };
    }
    case actionsTypes.EMPTY_CART: {
      return {
        ...state,
        orderedProducts: [],
      };
    }
    case actionsTypes.ADD_PRODUCT: {
      return {
        ...state,
        orderedProducts: [
          ...state.orderedProducts,
          {
            productId: action.payload.productId,
            count: action.payload.count,
          },
        ],
      };
    }
    default:
      return state;
  }
};

const orderedProductsWithoutProduct = (orderedProducts, productId) => {
  return orderedProducts.filter((op) => productId !== op.productId);
};

export default cartReducer;
