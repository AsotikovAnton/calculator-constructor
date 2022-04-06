import { ModeActionTypes } from "../../types/mode"

export const changeMode = (payload: boolean) => {
  return {
    type: ModeActionTypes.CHANGE_MODE,
    payload
  }
}
