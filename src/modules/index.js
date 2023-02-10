import { combineReducers } from 'redux';
import date from './date';
import { job } from './job';
import schedule from './schedule';
import { search } from './search';
import user from './user';

const rootReducer = combineReducers({
  date,
  job,
  schedule,
  search,
  user,
});

export default rootReducer;
