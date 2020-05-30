import {
  NUM_BUTTON_CLICKED,
  DOT_BUTTON_CLICKED,
  CLEAR_NUM_BUTTON_CLICKED
} from '../actions/index';

const inputNumber = (state = 0, action) => {
  switch(action.type) {
    case NUM_BUTTON_CLICKED:
      return parseFloat(state += action.number, 10);
    
    case DOT_BUTTON_CLICKED:
      state.toString(10);
      return state += action.number;
      
    case CLEAR_NUM_BUTTON_CLICKED:
      return state = 0;
      
    default:
      return state;
  }
}

export default inputNumber;