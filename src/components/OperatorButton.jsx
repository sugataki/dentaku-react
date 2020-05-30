import React, { useContext } from 'react';
import AppContext from '../contexts/AppContexts';

import {
  PLUS_BUTTON_CLICKED,
  MINUS_BUTTON_CLICKED,
  MULTI_BUTTON_CLICKED,
  DIVIDE_BUTTON_CLICKED,
  EQUAL_BUTTON_CLICKED,

  ADD_NUMBER,
  MINUS_NUMBER,
  MULTI_NUMBER,
  DIVIDE_NUMBER,
  EQUAL_NUMBER
} from '../actions/index';

import '../css/Button.scss';

const OperatorButton = (props) => {

  const { state, dispatch } = useContext(AppContext);

  
  const handleClick = () => {
    const previousOperation = state.operation;
    let operation = '';
    
    if(previousOperation === '+') {
      operation = ADD_NUMBER;
    } else if(previousOperation === '-') {
      operation = MINUS_NUMBER;
    } else if(previousOperation === 'x') {
      operation = MULTI_NUMBER;
    } else if(previousOperation === '÷') {
      operation = DIVIDE_NUMBER;
    } else if(previousOperation === '=') {
      operation = EQUAL_NUMBER;    
    }

    dispatch({
      type: operation,
      number: state.inputNumber
    })


    let btnOperator = props.operator;
    let operator = '';

    switch(btnOperator) {
      case '+':
        operator = PLUS_BUTTON_CLICKED;
        break;
      case '-':
        operator = MINUS_BUTTON_CLICKED;
        break;
      case 'x':
        operator = MULTI_BUTTON_CLICKED;
        break;
      case '÷':
        operator = DIVIDE_BUTTON_CLICKED;
        break;
      case '=':
        operator = EQUAL_BUTTON_CLICKED;
        break;
      default: 
        break;
    }

    dispatch({type: operator});
    state.inputNumber = 0;
  }

  return (
    <button className="btn" onClick={handleClick}>{props.operator}</button>
  )
}

export default OperatorButton;