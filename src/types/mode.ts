export interface ConstructorMode {
  isContructorMode: boolean;
}

export enum ModeActionTypes {
  CHANGE_MODE = "CHANGE_MODE",
}

export interface ModeAction {
  type: ModeActionTypes.CHANGE_MODE;
  payload: boolean;
}
