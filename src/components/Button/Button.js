import React from 'react'
import './style.scss';

const Button = (props) => {
  return(
    <button
      className="default-button"
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
}

export default Button;