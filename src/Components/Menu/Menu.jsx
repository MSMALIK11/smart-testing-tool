import React from 'react'
import Section1 from '../Sections/Section1'
import Section2 from '../Sections/Section2'
import './Menu.css'
function Menu({ toggleLocker }) {
    return (
      <>
      
        <div className="menu-btn-container">
          <div className="menu-btn">
            <Section1 toggleLocker={toggleLocker} />
            <Section2 />
          </div>
        </div>
      </>
    );
}

export default Menu