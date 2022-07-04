import React from 'react'
import Section1 from './Sections/Section1'
import Section2 from './Sections/Section2'

function Menu({ props }) {
    return (

        <>
            <div className="action-btn">
                <button data-testid="primary-btn" className='btn btn-primary'>Home</button>
                <button className='btn'>Home</button>
            </div>
            <div className="menu-btn">
                <Section1 props={props} />
                <Section2 />
            </div>
        </>
    )
}

export default Menu