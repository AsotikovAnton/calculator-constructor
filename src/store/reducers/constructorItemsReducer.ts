import { ConstructorItemsActionTypes, ConstructorItemsAction, IConstructorItems } from '../../types/constructorItems';

const initialState: IConstructorItems = {
  constructorItems: []
}

export const constructorItemsReducer = (state = initialState, action: ConstructorItemsAction): IConstructorItems => {
  switch (action.type) {
    case ConstructorItemsActionTypes.SET_CONSTRUCTOR_ITEMS:
      return { constructorItems: action.payload };
    default:
      return state;
  }
}
