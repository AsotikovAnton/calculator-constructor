import { combineReducers } from 'redux';
import { calculatorItemReducer } from './calculatorItemReducer';
import { modeReducer } from './modeReducer';

export const rootReducer = combineReducers({
  mode: modeReducer,
  currentCalculatorItem: calculatorItemReducer,
})

export type RootState = ReturnType<typeof rootReducer>
