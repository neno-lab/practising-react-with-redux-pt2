import { combineReducers } from 'redux';
import courses from './courseReducer'; // mozemo je nazvati po volji jer je ta funckija export defaultana
import authors from './authorReducer';
import apiCallsInProgress from './apiStatusReducer';

const rootReducer = combineReducers({
  courses: courses,
  authors: authors,
  apiCallsInProgress: apiCallsInProgress,
});

export default rootReducer;
