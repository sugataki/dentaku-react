import { combineReducers } from 'redux';
import totalNumber from './totalNumber';
import inputNumber from './inputNumber';
import operation from './operation';


export default combineReducers({
  totalNumber,
  inputNumber,
  operation
});