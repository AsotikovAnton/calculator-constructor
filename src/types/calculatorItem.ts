import { ReactNode } from "react";

export interface IItem {
  id: number,
  className: string,
  children: ReactNode,
}

export interface ICurrentItem {
  currentCalculatorItem: IItem | null,
}

export enum CalculatorItemActionTypes {
  SET_CURRENT_CALCULATOR_ITEM = "SET_CURRENT_CALCULATOR_ITEM",
}

export interface CalculatorItemAction {
  type: CalculatorItemActionTypes.SET_CURRENT_CALCULATOR_ITEM;
  payload: IItem | null;
}
