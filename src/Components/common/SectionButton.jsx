import React from 'react'
import './Common.css'
const SectionButton = ({dataTestId,title,btnClass}) => {
  return (
    <button
      data-testid={dataTestId}
      className={`btn ${btnClass && btnClass}}`}
    >
      {title}
    </button>
  );
}

export default SectionButton