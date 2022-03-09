import { createStore } from 'redux';
import allReducers from './reducers';
import { composeWithDevTools } from '@redux-devtools/extension';

const enhancers = process.env.NODE_ENV === 'development' ? composeWithDevTools() : undefined;

export default createStore(allReducers, enhancers);
