import React, { useState } from 'react';
import CalculatorItem from './CalculatorItem';
import { useCalcItems } from '../hooks/useCalcItems';

const Calculator: React.FC = () => {
  const { items } = useCalcItems();
  const [currentItem, setCurrentItem] = useState(null);

  return (
    <section className="calculator">
      {items.map(item => 
        <CalculatorItem 
          key={item.id}
          item={item} 
          // setCurrentItem={setCurrentItem}
        />
      )}
    </section>
  )
}

export default Calculator;
