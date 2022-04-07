import React, { useState } from 'react';
import { ReactComponent as Empty } from '../images/icons/empty.svg';

const Construstor: React.FC = () => {
  const [items, setItems] = useState([]);

  return (
    <section className="construstor">
      {items.length > 0 
        ? 
        items.map(item => {
          return (
            <div className="calculator-item">
              <div className="calculator-result-field">0</div>
            </div>
          )
        })
        :
        <div className="empty-block">
          <Empty />
          <span className="title">Перетащите сюда</span>
          <span className="description">любой элемент из левой панели</span>
        </div>
      }
    </section>
  )
}

export default Construstor;
