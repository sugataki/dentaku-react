import React, { useContext } from 'react';
import AppContext from '../contexts/AppContexts';

import { 
  NUM_BUTTON_CLICKED, 
  DOT_BUTTON_CLICKED 
} from '../actions/index';

import '../css/Button.scss';


const NumberButton = (props) => {

  const { dispatch } = useContext(AppContext);

  const handleClick = () => {
    
    const number = props.number;
    if(!(number === '.')) {
      dispatch({
        type: NUM_BUTTON_CLICKED,
        number
      })
    } else {
      dispatch({
        type: DOT_BUTTON_CLICKED,
        number
      })
    }
  }

  return (
  <button className="btn" onClick={handleClick}>{props.number}</button>
  )
}

export default NumberButton;