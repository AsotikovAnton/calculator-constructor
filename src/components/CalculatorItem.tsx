import React, { ReactNode } from 'react';
import { useActions } from '../hooks/useActions';
import { useCalcItems } from '../hooks/useCalcItems';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IItem } from '../types/calculatorItem';

// interface IItem {
//   id: number,
//   className: string,
//   children: ReactNode,
// }

interface Props {
  item: IItem,
  isConstructorItem: boolean
}

const CalculatorItem: React.FC<Props> = ({ item, isConstructorItem }) => {
  const { isContructorMode } = useTypedSelector(state => state.mode);
  const { items } = useCalcItems();
  const { constructorItems } = useTypedSelector(state => state.constructorItems);
  const { currentCalculatorItem } = useTypedSelector(state => state.currentCalculatorItem);
  const { setCurrentCalculatorItem, setConstructorItems } = useActions();
  
  const dragOverHandler = (e: React.DragEvent) => {
    e.preventDefault();
  }

  // const dragLeaveHandler = (e: React.DragEvent) => {
  //   const target = e.target as Element;
  // }

  const dragStartHandler = (e: React.DragEvent, item: IItem) => {
    setCurrentCalculatorItem(item);
    // if (isContructorMode) {
      
    // }
  }

  // const dragEndHandler = (e: React.DragEvent) => {

  // }

  const dropHandler = (e: React.DragEvent) => {
    e.preventDefault();
  }

  const removeHandler = (id: number) => {
    if (isConstructorItem) {
      setConstructorItems(constructorItems.filter(p => p.id !== id));
    }
  }

  return (
    <div 
      key={item.id}
      className={`${item.className} ${constructorItems.some(c => c.id === item.id) && !isConstructorItem ? 'opacity-50' : ''}`} 
      // draggable={!isConstructorItem && !constructorItems.some(c => c.id === item.id)}
      draggable={!constructorItems.some(c => c.id === item.id) || isConstructorItem && item.id !== 1}
      onDragOver={(e) => dragOverHandler(e)}
      // onDragLeave={(e) => dragLeaveHandler(e)}
      onDragStart={(e) => dragStartHandler(e, item)}
      // onDragEnd={(e) => dragEndHandler(e, item)}
      onDrop={(e) => dropHandler(e)}
      onDoubleClick={() => removeHandler(item.id)}
    >
      {item.children}
    </div>
  )
}

export default CalculatorItem;
