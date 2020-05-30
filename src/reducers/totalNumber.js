import {
  ADD_NUMBER,
  MINUS_NUMBER,
  MULTI_NUMBER,
  DIVIDE_NUMBER,
  EQUAL_NUMBER,
  CLEAR_NUMBER
} from '../actions/index';

const totalNumber = (state = 0, action) => {
  switch(action.type) {
    case ADD_NUMBER:
      return state += action.number;

    case MINUS_NUMBER:
      return state -= action.number;

    case MULTI_NUMBER:
      return state *= action.number;

    case DIVIDE_NUMBER:
      return state /= action.number;

    case EQUAL_NUMBER:
      return state;

    case CLEAR_NUMBER:
      return state = 0;

    default:
      return state;
  }
}

export default totalNumber;