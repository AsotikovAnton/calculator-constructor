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

    // console.log(target);
    if (target.className === 'constructor' && currentCalculatorItem?.id !== 1) {
      target.children[target.children.length - 1].classList.add('highlight');
    }
    if (target.className === 'constructor' && currentCalculatorItem?.id === 1) {
      target.children[0].classList.add('highlight-top');
    }

    // if (target.className.includes('constructor-item')) {
    //   target.classList.add('highlight');
    // }

    // if (target.parentElement?.className.includes('constructor-item')) {
    //   target.parentElement.classList.add('highlight');
    // }
  }

  const dragLeaveHandler = (e: React.DragEvent) => {
    const target = e.target as Element;
    target.classList.remove('shadow');
    if (target.className === 'constructor' && currentCalculatorItem?.id !== 1) {
      target.children[target.children.length - 1].classList.remove('highlight');
    }
    if (target.className === 'constructor' && currentCalculatorItem?.id === 1) {
      target.children[0].classList.remove('highlight-top');
    }


    // if (target.className.includes('constructor-item')) {
    //   target.classList.remove('highlight');
    // }
  }

  // const dragStartHandler = (e: React.DragEvent) => {
  //   console.log(e);
  // }

  const dragEndHandler = (e: React.DragEvent) => {
    const target = e.target as Element;
    target.classList.remove('shadow');
    if (target.className === 'constructor' && currentCalculatorItem?.id !== 1) {
      target.children[target.children.length - 1].classList.remove('highlight');
    }
    if (target.className === 'constructor' && currentCalculatorItem?.id === 1) {
      target.children[0].classList.remove('highlight-top');
    }

    // if (target.className.includes('constructor-item')) {
    //   target.classList.remove('highlight');
    // }
  }

  const dropHandler = (e: React.DragEvent) => {
    e.preventDefault();
    const target = e.target as Element;
    console.log(target);
    
    target.classList.remove('shadow');
    if (target.className === 'constructor' && currentCalculatorItem?.id !== 1) {
      target.children[target.children.length - 1].classList.remove('highlight');
    }
    if (target.className === 'constructor' && currentCalculatorItem?.id === 1) {
      target.children[0].classList.remove('highlight-top');
    }
    if (target.className.includes('constructor-item')) {
      target.classList.remove('highlight');
    }
    
    if (currentCalculatorItem) {
      if (constructorItems.some(p => p.id === currentCalculatorItem.id)) {
        setConstructorItems(constructorItems);
      } else {
        if (currentCalculatorItem.id === 1) {
          setConstructorItems([ currentCalculatorItem, ...constructorItems ]);
        } else {
          setConstructorItems([ ...constructorItems, currentCalculatorItem ]);
        }
      }
    }
  }

  console.log(constructorItems);
  

  return (
    <section 
      className="constructor"
      onDragOver={(e) => dragOverHandler(e)}
      onDragLeave={(e) => dragLeaveHandler(e)}
      onDragEnd={(e) => dragEndHandler(e)}
      onDrop={(e) => dropHandler(e)}
    >
      {constructorItems.length > 0 
        ? 
        constructorItems.map((item) => {
          return (
            <CalculatorItem 
              key={item.id}
              item={item} 
              isConstructorItem={true}
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
          onDrop={(e) => dropHandler(e)}
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
