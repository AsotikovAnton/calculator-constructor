import React, { ReactNode, useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useCalcItems } from '../hooks/useCalcItems';
import { useTypedSelector } from '../hooks/useTypedSelector';
import empty from '../images/icons/empty.png';
import { ICurrentItem, IItem } from '../types/calculatorItem';
import CalculatorItem from './CalculatorItem';

const Construstor: React.FC = () => {
  const { items } = useCalcItems();
  const { currentCalculatorItem } = useTypedSelector(state => state.currentCalculatorItem);
  const { constructorItems } = useTypedSelector(state => state.constructorItems);
  const { setConstructorItems } = useActions();

  const addHighlight = (currentTarget: Element) => {
    if (currentCalculatorItem?.id !== 1) {
      currentTarget.children[currentTarget.children.length - 1].classList.add('highlight');
    } else {
      currentTarget.children[0].classList.add('highlight-top');
    }
  }

  const removeHighlight = (currentTarget: Element) => {
    if (currentCalculatorItem?.id !== 1) {
      currentTarget.children[currentTarget.children.length - 1].classList.remove('highlight');
    } else {
      currentTarget.children[0].classList.remove('highlight-top');
    }
  }

  const dragOverHandler = (e: React.DragEvent) => {    
    e.preventDefault();
    // console.log(e);    
    const target = e.target as Element;
    const currentTarget = e.currentTarget as Element;
    // console.log(target);
    // console.log(currentTarget);
    
    if (target.className === 'empty-block') {
      target.classList.add('shadow');
    }
    if (target.parentElement?.className === 'empty-block') {
      target.parentElement.classList.add('shadow');
    }

    if (currentTarget.className === 'constructor') {
      addHighlight(currentTarget);
    }
  }

  const dragLeaveHandler = (e: React.DragEvent) => {
    const target = e.target as Element;
    const currentTarget = e.currentTarget as Element;

    target.classList.remove('shadow');

    if (currentTarget.className === 'constructor') {
      removeHighlight(currentTarget);
    }
  }

  // const dragStartHandler = (e: React.DragEvent) => {
  //   console.log(e);
  // }

  const dragEndHandler = (e: React.DragEvent) => {
    const target = e.target as Element;
    const currentTarget = e.currentTarget as Element;

    target.classList.remove('shadow');

    if (currentTarget.className === 'constructor') {
      removeHighlight(currentTarget);
    }
  }

  const dropHandler = (e: React.DragEvent) => {
    e.preventDefault();
    const target = e.target as Element;
    const currentTarget = e.currentTarget as Element;
    
    target.classList.remove('shadow');

    if (currentTarget.className === 'constructor') {
      removeHighlight(currentTarget);
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

  // console.log(constructorItems);
  

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
