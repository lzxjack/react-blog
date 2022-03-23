import { combineReducers } from 'redux';

import artSum from './artSum';
import avatar from './avatar';
import email from './email';
import link from './link';
import name from './name';
import navShow from './navShow';

export default combineReducers({
  navShow,
  artSum,
  avatar,
  email,
  link,
  name
});
