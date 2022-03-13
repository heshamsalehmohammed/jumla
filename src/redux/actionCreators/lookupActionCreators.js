import actionTypes from '../actionTypes/lookupActionTypes';

export function setInventoryStatuses(inventoryStatuses) {
  return {
    type: actionTypes.SET_INVENTORY_STATUSES,
    payload: {
      inventoryStatuses,
    },
  };
}

export function setPriceCurrencies(priceCurrencies) {
  return {
    type: actionTypes.SET_PRICE_CURRENCIES,
    payload: {
      priceCurrencies,
    },
  };
}


export function setAccountTypes(accountTypes) {
  return {
    type: actionTypes.SET_ACCOUNT_TYPES,
    payload: {
      accountTypes,
    },
  };
}

export function setPrivileges(privileges) {
  return {
    type: actionTypes.SET_PRIVILEGES,
    payload: {
      privileges,
    },
  };
}