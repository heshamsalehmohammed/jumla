// @ts-check
import {createStore} from 'redux';
import rootReducer from './reducers';
import initialState from './initialState';

const store = createStore(
  rootReducer,
  initialState,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
