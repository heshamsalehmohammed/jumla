import {combineReducers} from 'redux';
import cartReducer from './cartReducer';
import productsReducer from './productsReducer';
import ordersReducer from './ordersReducer';
import lookupReducer from './lookupReducer';

const rootReducer = combineReducers({
  cartState: cartReducer,
  productsState: productsReducer,
  ordersState: ordersReducer,
  lookupState: lookupReducer
});

export default rootReducer;
