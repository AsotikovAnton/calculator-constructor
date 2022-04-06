import { combineReducers } from 'redux';
import { modeReducer } from './modeReducer';

export const rootReducer = combineReducers({
  mode: modeReducer,
})

export type RootState = ReturnType<typeof rootReducer>
