import { combineReducers } from 'redux';

import artSum from './artSum';
import navShow from './navShow';

export default combineReducers({
  navShow,
  artSum
});
