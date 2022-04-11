import { combineReducers } from 'redux';
import { modeReducer } from './modeReducer';
import { calculatorItemReducer } from './calculatorItemReducer';
import { constructorItemsReducer } from './constructorItemsReducer';

export const rootReducer = combineReducers({
  mode: modeReducer,
  currentCalculatorItem: calculatorItemReducer,
  constructorItems: constructorItemsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
