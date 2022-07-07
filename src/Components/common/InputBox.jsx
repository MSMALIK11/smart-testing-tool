import React from 'react';
import './Common.css'
const InputBox = ({ type,placeHolderTitle, dataTestId, name, id, inputClass }) => {
  return (
    <input
    type={type}
    name={name}
    placeholder={placeHolderTitle}
    className={`${inputClass}`}
    id={id && id}
    data-testid={dataTestId}
    />
  );
};

export default InputBox