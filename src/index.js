import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './store';
import { addToCart,updateCart,deleteCart }  from './action/cartAction';

console.log("initial state: ", store.getState());

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

store.dispatch(addToCart('Coffee 500gm', 1, 250));
store.dispatch(addToCart('Flour 1kg', 2, 110));
store.dispatch(addToCart('Juice 2L', 1, 250));
// Update Cart
store.dispatch(updateCart('Flour 1kg', 5, 110));
// Delete from Cart
store.dispatch(deleteCart('Coffee 500gm'));
unsubscribe();


const App = <h1>Redux shopping cart</h1>

ReactDOM.render(
  <Provider store={store}>
    {App}
  </Provider>,
  document.getElementById('root')
)