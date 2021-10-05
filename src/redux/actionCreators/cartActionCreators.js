import actionTypes from '../actionTypes/cartActionTypes';

export function setMethodList(pla) {
  return {
    type: actionTypes.SET_METHOD_ATTR,
    payload: {
      pla: pla,
    },
  };
}
