import { CalculatorItemAction, CalculatorItemActionTypes, ICurrentItem } from './../../types/calculatorItem';

const initialState: ICurrentItem  = {
  currentCalculatorItem: null
}

export const calculatorItemReducer = (state = initialState, action: CalculatorItemAction): ICurrentItem => {
  switch (action.type) {
    case CalculatorItemActionTypes.SET_CURRENT_CALCULATOR_ITEM:
      return { currentCalculatorItem: action.payload };
    default:
      return state;
  }
}
