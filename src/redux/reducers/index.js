import {combineReducers} from 'redux';
import cartReducer from './cartReducer';
import productsReducer from './productsReducer';

const rootReducer = combineReducers({
  cartState: cartReducer,
  productsState: productsReducer,
});

export default rootReducer;
