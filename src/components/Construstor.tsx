import React, { ReactNode, useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useCalcItems } from '../hooks/useCalcItems';
import { useTypedSelector } from '../hooks/useTypedSelector';
import empty from '../images/icons/empty.png';
import { ICurrentItem, IItem } from '../types/calculatorItem';
import CalculatorItem from './CalculatorItem';

// interface IItem {
//   id: number,
//   className: string,
//   children: ReactNode,
// }

const Construstor: React.FC = () => {
  const { items } = useCalcItems();
  const { currentCalculatorItem } = useTypedSelector(state => state.currentCalculatorItem);
  const { constructorItems } = useTypedSelector(state => state.constructorItems);
  const { setConstructorItems } = useActions();
  // const [currentItems, setCurrentItems] = useState<IItem[]>([]); // вынести в глобальный

  const dragOverHandler = (e: React.DragEvent) => {    
    e.preventDefault();
    // console.log(e);    
    const target = e.target as Element;
    // console.log(target);
    
    
    if (target.className === 'empty-block') {
      target.classList.add('shadow');
    }
    if (target.parentElement?.className === 'empty-block') {
      target.parentElement.classList.add('shadow');
    }

    // if (target.className === 'constructor') {
    //   target.classList.add('line');
    // }
  }

  const dragLeaveHandler = (e: React.DragEvent) => {
    const target = e.target as Element;
    target.classList.remove('shadow');
  }

  // const dragStartHandler = (e: React.DragEvent) => {
  //   console.log(e);
  // }

  const dragEndHandler = (e: React.DragEvent) => {
    const target = e.target as Element;
    target.classList.remove('shadow');
  }

  const dropHandler = (e: React.DragEvent, items: IItem[]) => {
    e.preventDefault();
    const target = e.target as Element;
    target.classList.remove('shadow');
    
    if (currentCalculatorItem) {
      if (constructorItems.some(p => p.id === currentCalculatorItem.id)) {
        setConstructorItems(constructorItems);
      } else {
        setConstructorItems([ ...constructorItems, currentCalculatorItem ]);
      }

      // setCurrentItems(prev => {
      //   if (prev.some(p => p.id === currentCalculatorItem.id)) {
      //     return prev;
      //   } else {
      //     return [
      //       ...prev,
      //       currentCalculatorItem
      //     ]
      //   }
      // });
    }
  }

  console.log(constructorItems);
  

  return (
    <section 
      className="construstor"
      onDragOver={(e) => dragOverHandler(e)}
      onDrop={(e) => dropHandler(e, items)}
    >
      {constructorItems.length > 0 
        ? 
        constructorItems.map((item) => {
          return (
            <CalculatorItem 
              key={item.id}
              item={item} 
            />
          )
        })
        :
        <div 
          className="empty-block" 
          onDragOver={(e) => dragOverHandler(e)}
          onDragLeave={(e) => dragLeaveHandler(e)}
          // onDragStart={(e) => dragStartHandler(e)}
          onDragEnd={(e) => dragEndHandler(e)}
          onDrop={(e) => dropHandler(e, items)}
        >
          <img src={empty} alt="empty" />
          <span className="empty-block-title">Перетащите сюда</span>
          <span className="empty-block-description">любой элемент из левой панели</span>
        </div>
      }
    </section>
  )
}

export default Construstor;
