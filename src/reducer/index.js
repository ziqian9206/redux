import { combineReducers } from 'redux';
import productsReducer from './productReducer';
import cartReducer from './cartReducer';

const allReducers = {
  products: productsReducer,
  shoppingCart: cartReducer
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;