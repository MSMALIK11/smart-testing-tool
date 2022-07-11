import React from 'react'
import './Common.css'
const SectionButton = ({dataTestId,title,btnClass}) => {

  console.log('section button  component ')
  return (
    <button
      data-testid={dataTestId}
      className={`btn ${btnClass}`}
    >
      {title}
    </button>
  );
}

export default React.memo(SectionButton)