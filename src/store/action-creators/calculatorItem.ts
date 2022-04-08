import { CalculatorItemActionTypes, IItem } from "../../types/calculatorItem";

export const setCurrentCalculatorItem = (payload: IItem | null) => {
  return {
    type: CalculatorItemActionTypes.SET_CURRENT_CALCULATOR_ITEM,
    payload
  }
}
