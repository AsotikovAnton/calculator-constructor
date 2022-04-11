import { IItem } from "../../types/calculatorItem";
import { ConstructorItemsActionTypes } from "../../types/constructorItems";

export const setConstructorItems = (payload: IItem[]) => {
  return {
    type: ConstructorItemsActionTypes.SET_CONSTRUCTOR_ITEMS,
    payload
  }
}
