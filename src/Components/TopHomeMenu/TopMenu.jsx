import React from 'react'
import SectionButton from '../common/SectionButton';

const TopMenu = () => {
  return (
    <div className="topHomeMenu">
   
        <SectionButton
          title="Home"
          btnClass="btn-primary btn-lg"
          dataTestId="primary-btn"
        />
        <SectionButton
          title="Home"
          btnClass="btn-lg"
          dataTestId=""
        />
       
      
    </div>
  );
}

export default TopMenu