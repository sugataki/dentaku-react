import {
  PLUS_BUTTON_CLICKED,
  MINUS_BUTTON_CLICKED,
  MULTI_BUTTON_CLICKED,
  DIVIDE_BUTTON_CLICKED,
  EQUAL_BUTTON_CLICKED,
CLEAR_OPE_BUTTON_CLICKED
} from '../actions/index';

const operation = (state = '', action) => {
  switch(action.type) {
    case PLUS_BUTTON_CLICKED:
      return '+';
    
    case MINUS_BUTTON_CLICKED:
      return '-';

    case MULTI_BUTTON_CLICKED:
      return 'x';

    case DIVIDE_BUTTON_CLICKED:
      return '÷';

    case EQUAL_BUTTON_CLICKED:
      return '=';

    case CLEAR_OPE_BUTTON_CLICKED:
      return '+';
      
    default: 
      return state;
  }
}

export default operation;