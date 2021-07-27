import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import allRudecers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

// 暴露store
export default createStore(allRudecers, composeWithDevTools(applyMiddleware(thunk)));
