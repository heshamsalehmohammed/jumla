import {combineReducers} from 'redux';
import cartReducer from './cartReducer';
import productsReducer from './productsReducer';
import ordersReducer from './ordersReducer';

const rootReducer = combineReducers({
  cartState: cartReducer,
  productsState: productsReducer,
  ordersState: ordersReducer,
});

export default rootReducer;
