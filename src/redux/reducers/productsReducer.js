import initialState from '../initialState';
import actionsTypes from '../actionTypes/productsActionTypes';

const productsReducer = (state = initialState.productsState, action) => {
  switch (action.type) {
    case actionsTypes.PLAPLA: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default productsReducer;
