import initialState from '../initialState';
import actionsTypes from '../actionTypes/lookupActionTypes';

const lookupReducer = (state = initialState.lookupState, action) => {
  switch (action.type) {
    case actionsTypes.SET_INVENTORY_STATUSES: {
      return {
        ...state,
        InventoryStatuses: action.payload.inventoryStatuses,
      };
    }
    case actionsTypes.SET_PRICE_CURRENCIES: {
      return {
        ...state,
        PriceCurrencies: action.payload.priceCurrencies,
      };
    }
    case actionsTypes.SET_ACCOUNT_TYPES: {
      return {
        ...state,
        AccountTypes: action.payload.accountTypes,
      };
    }
    case actionsTypes.SET_PRIVILEGES: {
      return {
        ...state,
        Privileges: action.payload.privileges,
      };
    }
    default:
      return state;
  }
};

export default lookupReducer;
