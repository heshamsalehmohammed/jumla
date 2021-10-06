import actionTypes from '../actionTypes/productsActionTypes';

export function plapla(pla) {
  return {
    type: actionTypes.plapla,
    payload: {
      pla: pla,
    },
  };
}
