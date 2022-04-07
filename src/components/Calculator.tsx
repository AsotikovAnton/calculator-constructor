import React, { useState } from 'react';
import { Button } from 'antd';

const Calculator: React.FC = () => {
  const [tempResult, setTempResult] = useState<string>('0');
  const [result, setResult] = useState(0);

  const operators = [
    { id: '/', label: '/', value: '/' },
    { id: 'х', label: 'х', value: '*' },
    { id: '-', label: '-', value: '-' },
    { id: '+', label: '+', value: '+' },
  ];

  const digits = [
    { id: 7, label: 7, value: '7' },
    { id: 8, label: 8, value: '8' },
    { id: 9, label: 9, value: '9' },
    { id: 4, label: 4, value: '4' },
    { id: 5, label: 5, value: '5' },
    { id: 6, label: 6, value: '6'},
    { id: 1, label: 1, value: '1' },
    { id: 2, label: 2, value: '2' },
    { id: 3, label: 3, value: '3' },
    { id: 0, label: 0, value: '0', className: 'large' },
    { id: ',', label: ',', value: '.' },
  ];

  const handleOperator = (operator: string) => {
    console.log(operator);
  }

  const handleDigit = (digit: string) => {
    console.log(digit);
  }

  const calculate = () => {
    
  }

  return (
    <section className="calculator">
      <div className="calculator-item" draggable={true}>
        <div className="calculator-result-field">{tempResult}</div>
      </div>
      <div className="calculator-item i-4">
        {operators.map(o => 
          <Button key={o.id} onClick={() => handleOperator(o.value)}>{o.label}</Button>
        )}
      </div>
      <div className="calculator-item i-3">
        {digits.map(o => {
          interface IProp {
            key: string | number,
            onClick: () => void,
            className?: string
          }
          const prop: IProp = {
            key: o.id,
            onClick: () => handleDigit(o.value),
          }
          if (o.className) {
            prop.className = o.className
          }
          return <Button {...prop}>{o.label}</Button>
        })}
      </div>
      <div className="calculator-item i-1">
        <Button type="primary" onClick={calculate}>=</Button>
      </div>
    </section>
  )
}

export default Calculator;
