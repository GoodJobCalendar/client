import { combineReducers } from 'redux';
import date from './date';
import { job } from './job';
import schedule from './schedule';
import { search } from './search';
import user from './user';
import posting from './posting';

const rootReducer = combineReducers({
  date,
  job,
  schedule,
  search,
  user,
  posting,
});

export default rootReducer;
