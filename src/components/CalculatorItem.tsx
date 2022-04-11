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
    const target = e.target as Element;
    // console.log(target);
    
    // if (target.className === 'constructor') {
    //   console.log(target);
      
    //   target.classList.add('shadow');
    // }

    // if (target.parentElement?.className === 'constructor-item') {
    //   console.log(target.parentElement);
      
    //   target.parentElement?.classList.add('shadow');
    // }
  }

  const dragLeaveHandler = (e: React.DragEvent) => {
    const target = e.target as Element;
    // target.classList.remove('shadow');
  }

  const dragStartHandler = (e: React.DragEvent, items: IItem[], item: IItem) => {
    // console.log(e);
    // console.log(items);
    console.log(item);

    setCurrentCalculatorItem(item);
  }

  const dragEndHandler = (e: React.DragEvent, item: IItem) => {
    // const target = e.target as Element;
    // if (constructorItems.some(c => c.id === item.id)) {
    //   target.classList.add('opacity-50');
    // }
  }

  const dropHandler = (e: React.DragEvent, items: IItem[], item: IItem) => {
    e.preventDefault();
    // console.log(e);
    // console.log(items);
    // console.log(item);
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
      draggable={!isConstructorItem && !constructorItems.some(c => c.id === item.id)}
      onDragOver={(e) => dragOverHandler(e)}
      onDragLeave={(e) => dragLeaveHandler(e)}
      onDragStart={(e) => dragStartHandler(e, items, item)}
      onDragEnd={(e) => dragEndHandler(e, item)}
      onDrop={(e) => dropHandler(e, items, item)}
      onDoubleClick={() => removeHandler(item.id)}
    >
      {item.children}
    </div>
  )
}

export default CalculatorItem;
