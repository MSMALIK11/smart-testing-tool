import React from 'react'

function Section2() {
    return (
        <div className="section2">
            <button data-testid="checkPowerBtn" className='btn-s2 bgs2' >Check Power</button>
            <button data-testid="checkVersionBtn" className='btn-s2' >Check Version</button>
            <input type="text" data-testid="icCardInput" className='btn' placeholder='IC Card' name="IC Card" id="icCard" />
            <button data-testid="exitBtn" className='btn-s2 exits2' >Exit</button>
        </div>
    )
}

export default Section2