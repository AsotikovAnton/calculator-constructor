import { IItem } from "./calculatorItem";

export interface IConstructorItems {
  constructorItems: IItem[],
}

export enum ConstructorItemsActionTypes {
  SET_CONSTRUCTOR_ITEMS = "SET_CONSTRUCTOR_ITEMS",
}

export interface ConstructorItemsAction {
  type: ConstructorItemsActionTypes.SET_CONSTRUCTOR_ITEMS;
  payload: IItem[];
}
