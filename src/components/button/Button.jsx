import React from 'react';
import css from './Button.module.css';

const Button = ({ onLoadMore }) => {
  return (
    <button type="button" className={css['load-btn']} onClick={onLoadMore}>
      <span className="label">Load more</span>
    </button>
  );
};
export default Button;