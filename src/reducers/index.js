import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  courses    //es6 shorthand property name -- used throughout -> "state.courses"
});

export default rootReducer;