import * as ModeActionCreators from './mode';
import * as CalculatorItemCreators from './calculatorItem';
import * as ConstructorItemsCreators from './constructorItems';

export default {
  ...ModeActionCreators,
  ...CalculatorItemCreators,
  ...ConstructorItemsCreators,
}
