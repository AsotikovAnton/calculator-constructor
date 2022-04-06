import { ConstructorMode, ModeAction, ModeActionTypes } from "../../types/mode";

const initialState: ConstructorMode = {
  isContructorMode: false
}

export const modeReducer = (state = initialState, action: ModeAction): ConstructorMode => {
  switch (action.type) {
    case ModeActionTypes.CHANGE_MODE:
      return { isContructorMode: action.payload };
    default:
      return state;
  }
}
