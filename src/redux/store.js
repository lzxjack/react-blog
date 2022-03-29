import { createStore } from 'redux';
import allReducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store =
  process.env.NODE_ENV === 'development'
    ? createStore(allReducers, composeWithDevTools())
    : createStore(allReducers);

export default store;
