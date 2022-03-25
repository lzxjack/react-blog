import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore } from 'redux';

import allReducers from './reducers';

const store =
  process.env.NODE_ENV === 'development'
    ? createStore(allReducers, composeWithDevTools())
    : createStore(allReducers);

export default store;
