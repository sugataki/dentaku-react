import React, { useReducer } from 'react';

import reducer from '../reducers/index';

import AppContext from '../contexts/AppContexts';

import NumberButton from './NumberButton';
import OperatorButton from './OperatorButton';

import {
  CLEAR_NUM_BUTTON_CLICKED,
  CLEAR_NUMBER,
  CLEAR_OPE_BUTTON_CLICKED
} from '../actions/index';

import '../css/App.scss';
import '../css/Button.scss';


const App = () => {

  const initialState = {
    totalNumber: 0,
    inputNumber: 0,
    operation: '+'
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  const renderValue = () => {
    let showNumber;
    if(state.inputNumber !== 0) {
      showNumber = state.inputNumber
    } else {
      showNumber = state.totalNumber
    }
    return <div className="showNumber">{showNumber}</div>
  }

  const formatting = () => {
    dispatch({type: CLEAR_NUM_BUTTON_CLICKED});
    dispatch({type: CLEAR_NUMBER});
    dispatch({type: CLEAR_OPE_BUTTON_CLICKED});
  }

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <h1>Reactで電卓</h1>
        {renderValue()}
        <button className="btn" onClick={formatting}>C</button>
        <br/>
        <NumberButton number='7'/>
        <NumberButton number='8'/>
        <NumberButton number='9'/>
        <OperatorButton operator='÷'/>
        <br/>
        <NumberButton number='4'/>
        <NumberButton number='5'/>
        <NumberButton number='6'/>
        <OperatorButton operator='x'/>
        <br/>
        <NumberButton number='1'/>
        <NumberButton number='2'/>
        <NumberButton number='3'/>
        <OperatorButton operator='-'/>
        <br/>
        <NumberButton number='0'/>
        <NumberButton number='.'/>
        <OperatorButton operator='+'/>
        <OperatorButton operator='='/>
      </div>
    </AppContext.Provider>
    
  );
}

export default App;
