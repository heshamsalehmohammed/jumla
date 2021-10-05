
import initialState from '../initialState';
import actionsTypes from '../actionTypes/cartActionTypes';


const cartReducer = (state = initialState.cartState, action) => {
    switch (action.type) {
        case actionsTypes.SET_FILTER_OPTION: {
            return {
                ...state,
                filterState: {
                    ...state.filterState,
                    [action.payload.FilterOptionName]:
                        action.payload.FilterOptionValue
                }
            };
        }
        default:
            return state;
    }
};


export default cartReducer;
