import React from 'react';
import { ReactComponent as Empty } from '../images/icons/empty.svg';

const Construstor: React.FC = () => {
  return (
    <section className="construstor">
      <div className="empty-block">
        <Empty />
        <span className="title">Перетащите сюда</span>
        <span className="description">любой элемент из левой панели</span>
      </div>
    </section>
  )
}

export default Construstor;
