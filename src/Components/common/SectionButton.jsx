import React from 'react'
import './Common.css'
const SectionButton = ({dataTestId,title,btnClass}) => {
  console.log('btn class',btnClass)
  return (
    <button
      data-testid={dataTestId}
      className={`btn ${btnClass}`}
    >
      {title}
    </button>
  );
}

export default SectionButton