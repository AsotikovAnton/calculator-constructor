import React from 'react';
import CalculatorItem from './CalculatorItem';
import { useCalcItems } from '../hooks/useCalcItems';

const Calculator: React.FC = () => {
  const { items } = useCalcItems();

  return (
    <section className="calculator">
      {items.map(item => 
        <CalculatorItem 
          key={item.id}
          item={item} 
        />
      )}
    </section>
  )
}

export default Calculator;
